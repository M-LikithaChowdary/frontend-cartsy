// src/components/Home.js

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion } from 'framer-motion';

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Navbar.css';

function Home() {
  return (
    <>
            <div className="hero">
  <motion.div
    className="promo-box text-center text-white"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
  >
    <h1>Welcome to Cartsy!</h1>
    <p className="fs-4">🔥 Big Sale: Up to 70% OFF on Top Categories!</p>
    <p className="fs-5">🛒 Shop now and enjoy exclusive online deals!</p>
    <Link to="/register" className="btn btn-outline-light mt-3 me-2">Explore Offers</Link>
  </motion.div>
</div>
      <footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h3>About Cartsy</h3>
      <p>
        Cartsy is your one-stop shop for fashion, electronics, and more.
        Enjoy a modern shopping experience with secure checkout and fast delivery.
      </p>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact</h3>
      <p>Email: support@cartsy.com</p>
      <p>Phone: +1 800 123 4567</p>
      <div className="social-icons">
        <a href="#"><span>📘</span></a>
        <a href="#"><span>📸</span></a>
        <a href="#"><span>🐦</span></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    &copy; 2025 Cartsy | Designed for modern shopping
  </div>
</footer>

    </>
  );
}

export default Home;
