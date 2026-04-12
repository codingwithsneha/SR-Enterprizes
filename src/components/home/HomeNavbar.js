// src/components/home/HomeNavbar.js - Purple navbar for homepage
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HomeNavbar.css';

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="home-navbar">
      <div className="nav-container">
        <Link to="/" className="home-logo" onClick={() => setIsOpen(false)}>
          <h2>SWARA ENTERPRISES</h2>
          
        </Link>

        <div className={`home-nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="home-hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;