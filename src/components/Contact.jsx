// src/pages/Contact.js
import React from 'react';
import './PageStyles.css';
function Contact() {
  return (
    <div className="container py-5 page-container">
      <h2>Contact Us</h2>
      <p>We're here to help! Reach out to us through any of the following methods:</p>

      <h5>📧 Email Support</h5>
      <p>support@cartsy.com — Available 24/7 for order inquiries, issues, or feedback.</p>

      <h5>📞 Phone Support</h5>
      <p>+1 800 123 4567 — Available Mon–Sat: 9:00 AM to 7:00 PM (IST)</p>

      <h5>🏢 Office Address</h5>
      <p>Cartsy Technologies Pvt. Ltd.,<br />
         5th Floor, Tech Park,<br />
         Hyderabad, Telangana 500081, India</p>

      <h5>🌐 Social Media</h5>
      <p>Follow us on Instagram, Facebook, and Twitter for updates, promotions, and news!</p>
    </div>
  );
}

export default Contact;
