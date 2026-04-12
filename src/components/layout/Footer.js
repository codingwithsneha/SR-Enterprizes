// src/components/layout/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>SWARA ENTERPRISES</h3>
            <p>Your Trusted Partner in FMCG Distribution</p>
            <p>From Warehouse to Retail - We Deliver Excellence</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/produccts">Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>📞 9404215553</p>
            <p>✉️ swarae200@gmail.com</p>
            <p>📍 Plot No. 5A, Dhongade Nagar,<br />Deolali, Nashik Road, Nashik</p>
          </div>

          <div className="footer-section">
            <h4>Business Hours</h4>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SWARA ENTERPRISES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;