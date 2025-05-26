import React, { useRef, useState } from "react";
import "./../Style/Custom.css";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiry: "Career Counselling",
    message: ""
  });

  // Store validation errors from backend
  const [validationErrors, setValidationErrors] = useState({});

  const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear specific field error on change
    if (validationErrors[e.target.name]) {
      setValidationErrors({ ...validationErrors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.enquiry.trim()) newErrors.enquiry = "Enquiry is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    // If any errors, show inline and stop submission
    if (Object.keys(newErrors).length > 0) {
      setValidationErrors(newErrors);
      return;
    }

    try {
      setValidationErrors({}); // Clear previous errors

      const response = await axios.post(
        "https://brickwayz.onrender.com/api/sendmail",
        formData
      );

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "Okay"
      });

      setThankYouMessageVisible(true);
      setTimeout(() => {
        setThankYouMessageVisible(false);
      }, 5000);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        enquiry: "Career Counselling",
        message: ""
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.errors
      ) {
        const backendErrors = {};
        error.response.data.errors.forEach((err) => {
          backendErrors[err.param] = err.msg;
        });
        setValidationErrors(backendErrors);
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an issue submitting the form. Please try again.",
          icon: "error",
          confirmButtonText: "Okay"
        });
      }
    }
  };



  return (
    <div className="main_container" id="Contact" ref={contactRef}>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <h2 className="contact-title">Contact Form</h2>

        <div className="contact-input-group">
          <div className="contact_name">
            <input
              type="text"
              name="firstName"
              className={`contact-input ${validationErrors.firstName ? "input-error" : ""}`}
              placeholder="*First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <span>{validationErrors.firstName && <p className="error-msg">{validationErrors.firstName}</p>}</span>
          </div>

          <div className="contact_last">
            <input
              type="text"
              name="lastName"
              className={`contact-input ${validationErrors.lastName ? "input-error" : ""}`}
              placeholder="*Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {validationErrors.lastName && <p className="error-msg">{validationErrors.lastName}</p>}
          </div>
        </div>

        <input
          type="email"
          name="email"
          className={`contact-input ${validationErrors.email ? "input-error" : ""}`}
          placeholder="*Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {validationErrors.email && <p className="error-msg">{validationErrors.email}</p>}

        <input
          type="text"
          name="phone"
          className={`contact-input ${validationErrors.phone ? "input-error" : ""}`}
          placeholder="*Contact Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {validationErrors.phone && <p className="error-msg">{validationErrors.phone}</p>}

        <label className="contact-label">Enquiry:</label>
        <select
          name="enquiry"
          className={`contact-dropdown ${validationErrors.enquiry ? "input-error" : ""}`}
          value={formData.enquiry}
          onChange={handleChange}
        >
          <option value="Career Counselling">Career Counselling</option>
          <option value="Study Abroad">Study Abroad</option>
          <option value="Training Programs">Training Programs</option>
        </select>
        {validationErrors.enquiry && <p className="error-msg">{validationErrors.enquiry}</p>}

        <label className="contact-label">Message:</label>
        <textarea
          name="message"
          className={`contact-textarea ${validationErrors.message ? "input-error" : ""}`}
          placeholder="Write description....."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        {validationErrors.message && <p className="error-msg">{validationErrors.message}</p>}

        <div className="contact_btn_contact">
          <button type="submit" className="contact-button">
            Apply Online
          </button>
        </div>
      </form>

      {thankYouMessageVisible && (
        <p className="tanking_you">
          THANK YOU! OUR TEAM WILL CONNECT WITH YOU SOON. HAPPY LEARNING!
        </p>
      )}
    </div>
  );
};

export default Contact;
