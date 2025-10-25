// src/pages/PrivacyPolicy.js
import React from 'react';
import './PageStyles.css';
function PrivacyPolicy() {
  return (
    <div className="container py-5 page-container">
      <h2>Privacy Policy</h2>
      <p>
        At Cartsy, your privacy is our top priority. This policy outlines how we collect, use,
        and protect your personal information when you use our services.
      </p>

      <h5>1. Information We Collect</h5>
      <p>We collect your name, email address, phone number, shipping address, and payment details only to process orders and improve your experience.</p>

      <h5>2. How We Use Your Information</h5>
      <ul>
        <li>To process and deliver your orders</li>
        <li>To notify you of updates, offers, and support</li>
        <li>To improve our platform and customer experience</li>
      </ul>

      <h5>3. Data Protection</h5>
      <p>We use advanced encryption and firewall technologies to keep your information secure. Your card details are never stored on our servers.</p>

      <h5>4. Third-Party Sharing</h5>
      <p>We do not sell or rent your personal data to third parties. Data is shared only with trusted partners to fulfill services (e.g., courier, payment gateways).</p>

      <h5>5. Your Rights</h5>
      <p>You may update or delete your data at any time by contacting our support team or using the options in your account settings.</p>

      <p>For full details, please refer to our complete privacy terms or contact us directly.</p>
    </div>
  );
}

export default PrivacyPolicy;
