import React from "react";
import { Link } from "react-router-dom";
import "./Component.css";

const ShoeFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section">
          <h2 className="footer-title">ShoeMart</h2>
          <p>Your go-to destination for stylish and comfortable shoes.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Nav Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <p>Subscribe for the latest offers and updates.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ShoeMart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default ShoeFooter;
