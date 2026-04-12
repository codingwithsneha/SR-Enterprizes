// src/components/home/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-glow"></div>

      <div className="hero-inner">

        {/* Logo with bounce */}
        <img
          src={`${process.env.PUBLIC_URL}/images/SRLOGO.jpg`}
          alt="SR Enterprises Logo"
          className="hero-logo bounce-in"
        />

        {/* Content with swipe animations */}
        <h1 className="slide-up delay-1">
          Your Trusted Partner in <br />
          <span className="highlight">FMCG Distribution</span>
        </h1>

        <p className="slide-up delay-2">
          From Warehouse to Retail — We Deliver Excellence
        </p>

        <div className="hero-buttons slide-up delay-3">
          <Link to="/products" className="btn">
            Explore Products
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;