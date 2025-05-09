

// import { useState } from "react"
// import React from 'react'
// import "./../Style/Custom.css"

// const Contact = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <section className="contact">
//       <h2>Contact Us</h2>
//       <div style={{ textAlign: "center", marginBottom: "2rem" }}>
//         <button 
//           onClick={() => setShowForm(!showForm)}
//           style={{
//             padding: "0.8rem 2rem",
//             fontSize: "1.1rem",
//             backgroundColor: "#008080",
//             color: "#fff",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             transition: "background 0.3s ease"
//           }}
//         >
//           {showForm ? "Close Form" : "Contact Us"}
//         </button>
//       </div>
//       {showForm && (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <iframe
//             src="https://docs.google.com/forms/d/e/1FAIpQLSdqxItEV0LkflcryXgGd0IXTaiuj15eAK4wNQ5TA1NzxMytkw/viewform?usp=header"
//             width="640"
//             height="800"
//             frameBorder="0"
//             marginHeight="0"
//             marginWidth="0"
//             title="Contact Form"
//           >
//             Loading…
//           </iframe>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Contact

import React, { useState } from "react";
import "./../Style/Custom.css";
import axios from "axios"
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiry: "Career Counselling",
    message: ""
  });
  const [thankYouMessageVisible, setThankYouMessageVisible] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("https://brickwayz.onrender.com/api/sendmail", formData);
  
      // Show SweetAlert success message
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "Okay"
      });
  
      setThankYouMessageVisible(true);
  
      // Hide the thank you message after 5 seconds
      setTimeout(() => {
        setThankYouMessageVisible(false);
      }, 5000);  // 5000 ms = 5 seconds

      // Reset the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        enquiry: "Career Counselling",
        message: ""
      });
  
    } catch (error) {
      // Show SweetAlert error message
      Swal.fire({
        title: "Error!",
        text: "There was an issue submitting the form. Please try again.",
        icon: "error",
        confirmButtonText: "Okay"
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="main_container" id="Contact">

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact-title">Contact Form</h2>
        <div className="contact-input-group">
          <input
            type="text"
            name="firstName"
            className="contact-input"
            placeholder="*First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            className="contact-input"
            placeholder="*Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          className="contact-input"
          placeholder="*Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="phone"
          name="phone"
          className="contact-input"
          placeholder="*Contact Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <label className="contact-label">Enquiry:</label>
        <select
          name="enquiry"
          className="contact-dropdown"
          value={formData.enquiry}
          onChange={handleChange}
        >
          <option value="Career Counselling">Career Counselling</option>
          <option value="Study Abroad">Study Abroad</option>
          <option value="Training Programs">Training Programs</option>
        </select>
        <label className="contact-label">Message:</label>
        <textarea
          name="message"
          className="contact-textarea"
          placeholder="Write description....."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="contact_btn_contact">
          <button type="submit" className="contact-button">Apply Online</button>
        </div>
      </form>

      {thankYouMessageVisible && (

      <p className="tanking_you">THANK YOU! OUR TEAM WILL CONNECT WITH YOU SOON. HAPPY LEARNING!</p>
      )}
    </div>
  );
};

export default Contact;
