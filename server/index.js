const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { rateLimit } = require("express-rate-limit");
const helmet = require("helmet");
const dotenv = require("dotenv");
const { body, validationResult } = require("express-validator");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
    methods: ["POST"],
  })
);
app.use(express.json({ limit: "1mb" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests from this IP, please try again later",
});
app.use("/api/sendmail", limiter);

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    pool: true, // Use pooled connections
    maxConnections: 5, // Limit concurrent connections
    maxMessages: 100, // Limit messages per connection
    rateDelta: 1000, // Space between messages
    rateLimit: 5, // Max messages per rateDelta
  });
};

let transporter = createTransporter();

// Verify connection and retry logic
const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.info("SMTP connection verified successfully");
  } catch (error) {
    console.error("SMTP connection failed, will retry");
    setTimeout(async () => {
      transporter = createTransporter();
      await verifyTransporter();
    }, 5000); // Retry after 5 seconds
  }
};

// Route validation
const emailValidation = [
  body("email").isEmail().withMessage("Valid email required"),
  body("enquiry").isString().trim().notEmpty().withMessage("enquiry required"),
  body("message").isString().trim().notEmpty().withMessage("message body required"),
  body("firstName").isString().trim().notEmpty().withMessage("firstName body required"),
  body("lastName").isString().trim().notEmpty().withMessage("lastName body required"),
  body("phone").optional().isString().trim().notEmpty().withMessage("phone body required"),


];

// Email sending route
app.post("/api/sendmail", emailValidation, async (req, res) => {
  try {
    // Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { enquiry, email, firstName, lastName, message, phone } = req.body;

    const html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #ffffff;">
    <h2 style="color: #333;">📩 ${enquiry} from ${firstName}</h2>

    <p style="color: #555;">You have received a new enquiry from your website contact form.</p>

    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
      <tr>
        <td style="padding: 8px; font-weight: bold; color: #333;">First Name:</td>
        <td style="padding: 8px; color: #555;">${firstName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; color: #333;">Last Name:</td>
        <td style="padding: 8px; color: #555;">${lastName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; color: #333;">Email:</td>
        <td style="padding: 8px; color: #555;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; color: #333;">Phone:</td>
        <td style="padding: 8px; color: #555;">${phone || "Not provided"}</td>
      <tr>
        <td style="padding: 8px; font-weight: bold; color: #333;">Enquiry Type:</td>
        <td style="padding: 8px; color: #555;">${enquiry}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; color: #333;">Message:</td>
        <td style="padding: 8px; color: #555;">${message}</td>
      </tr>
    </table>

    <p style="margin-top: 30px; font-size: 13px; color: #999;">This message was sent from your website's contact form.</p>
  </div>
`;


    const mailOptions = {
      from: process.env.FROM_EMAIL || "noreply@example.com",
      to: process.env.TO_EMAIL,
      subject: `Brickwayz Enquiry – ${firstName} ${lastName}`,
      html,
    };

    // Ensure transporter is ready
    await verifyTransporter();

    // Send email with Promise
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error) {
    // Return more helpful error responses
    if (error.code === "ECONNREFUSED") {
      return res.status(503).json({
        success: false,
        error: "Email service unavailable, please try again later",
      });
    }

    if (error.responseCode >= 400) {
      return res.status(400).json({
        success: false,
        error: "Error sending email, please check email addresses",
      });
    }

    res.status(500).json({
      success: false,
      error: "Internal server error occurred while sending email",
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
});

// Error handling for uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
  // Keep the process alive but log the error
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
  // Keep the process alive but log the error
});

app.listen(port, () => {
  console.info(`Server running at http://localhost:${port}`);
  verifyTransporter();
});
