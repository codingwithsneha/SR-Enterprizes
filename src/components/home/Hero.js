// src/components/home/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Animated Background Elements */}
      <div className="bg-animation">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>

      <div className="hero-content">
        <h1 className="fade-in-up">
          Your Trusted Partner in<br />
          <span className="highlight">FMCG Distribution</span>
        </h1>
        <p className="fade-in-up">
          From Warehouse to Retail - We Deliver Excellence
        </p>
        <div className="hero-buttons fade-in-up">
          <Link to="/products" className="btn">Explore Products</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;