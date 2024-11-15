// src/components/Footer.jsx
import React from 'react';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="deorbit-footer">
      <div className="deorbit-footer-section deorbit-footer-links">
        <h4>Our Links</h4>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Admin Login</p>
      </div>
      <div className="deorbit-footer-section deorbit-footer-contact">
        <h4>Contact Us</h4>
        <p>KIET College, Korangi</p>
        <p>Andhra Pradesh - 533461</p>
      </div>
      <div className="deorbit-footer-section deorbit-footer-verification">
        <h4>Project & Certificate Verification</h4>
        <p>Email: projectnest@gmail.com</p>
        <p>Phone: +91 9059985054</p>
      </div>
    </footer>
  );
};

export default Footer;
