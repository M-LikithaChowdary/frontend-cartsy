// src/pages/FAQ.js
import React from 'react';
import './PageStyles.css';
function FAQ() {
  return (
    <div className="container py-5 page-container">
      <h2>Frequently Asked Questions</h2>

      <h5>Q: How can I track my order?</h5>
      <p>A: You can track your order in the "My Orders" section after logging into your Cartsy account. You will also receive tracking details via email and SMS.</p>

      <h5>Q: What are the shipping charges?</h5>
      <p>A: We offer free shipping on all orders above ₹499. For orders below that, a nominal shipping fee may apply.</p>

      <h5>Q: What is your return and refund policy?</h5>
      <p>A: Returns are accepted within 7 days of delivery for most products. Refunds are processed within 3-5 business days after we receive the returned item.</p>

      <h5>Q: Is it safe to shop on Cartsy?</h5>
      <p>A: Absolutely. Cartsy uses SSL encryption and secure payment gateways to ensure your data is protected.</p>

      <h5>Q: Can I cancel my order?</h5>
      <p>A: Orders can be cancelled before they are shipped. Visit your order history and click on "Cancel Order" if the option is available.</p>
    </div>
  );
}

export default FAQ;
