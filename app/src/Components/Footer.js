import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'; 
// or use FaTwitter, FaLinkedinIn, etc. depending on your actual social links
import "./../Style/Custom.css"
import applogo from "./../Assets/footorlogo.png";


function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      {/* Left Section */}
      <div className="footer-left">
        <div className='footerlog0'>
          <img src={applogo} alt=""/>
        </div>
        <h3 className="footer-heading">Contact Us!</h3>
        <p className="footer-text">
          Ready to take the next step? <br />
          Reach out to us today!
        </p>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <h3 className="footer-heading">Let’s get social:</h3>

        {/* Social Icons */}
        <div className="footer-social-icons">
          <a href="https://facebook.com" className="footer-icon-link">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/7339077299" className="footer-icon-link">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com" className="footer-icon-link">
            <FaInstagram />
          </a>
        </div>

        {/* Contact Info */}
        <p className="footer-info">
          <strong>Email:</strong> brickwayz.academy@gmail.com
        </p>
        <p className="footer-info">
          <strong>Phone:</strong> 7339077299
        </p>
        <p className="footer-info">
          <strong>Location:</strong> A1A, TNHB, 5876, Avadi Road, TNHB Colony, Annanur, 
          Ayapakkam, Chennai, Tamil Nadu 600077.
        </p>
      </div>
    </div>
  </footer>
  );
}


export default Footer;
