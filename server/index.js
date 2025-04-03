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
app.use("/send-email", limiter);

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
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
  body("to").isEmail().withMessage("Valid email required"),
  body("subject").isString().trim().notEmpty().withMessage("Subject required"),
  body("text").isString().trim().notEmpty().withMessage("Email body required"),
  body("html").optional().isString(),
  body("cc").optional().isArray(),
  body("bcc").optional().isArray(),
  body("attachments").optional().isArray(),
];

// Email sending route
app.post("/send-email", emailValidation, async (req, res) => {
  try {
    // Validation check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { to, subject, text, html, cc, bcc, attachments } = req.body;

    const mailOptions = {
      from: process.env.FROM_EMAIL || "noreply@example.com",
      to,
      subject,
      text,
      html,
      cc,
      bcc,
      attachments,
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
