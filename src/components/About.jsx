// src/pages/About.js
import React from 'react';
import './PageStyles.css';
function About() {
  return (
    <div className="container py-5 page-container">
      <h2>About Cartsy</h2>
      <p>
        Cartsy is a next-generation e-commerce platform committed to redefining the online shopping experience.
        Founded in 2025, Cartsy offers a curated selection of top-rated products in fashion, electronics,
        home essentials, and more — all in one place.
      </p>
      <p>
        Our mission is to deliver unmatched value to our customers through a seamless, secure, and fast
        shopping process. With a strong focus on quality, customer satisfaction, and innovation, Cartsy is
        built for shoppers who expect more.
      </p>
      <p>
        <strong>Why choose Cartsy?</strong>
        <ul>
          <li>🌐 Wide selection of global brands</li>
          <li>🚚 Free & fast delivery on most products</li>
          <li>💳 Secure and flexible payment options</li>
          <li>📞 24/7 customer support</li>
          <li>✅ Hassle-free returns and refunds</li>
        </ul>
      </p>
    </div>
  );
}

export default About;
