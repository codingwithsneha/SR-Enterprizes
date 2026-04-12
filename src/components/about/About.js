// src/components/about/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Your Trusted Partner in FMCG Distribution</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                SWARA ENTERPRISES, established in 2024, is engaged in the distribution 
                and wholesale supply of FMCG products as an authorized distributor and 
                super stockist. Our company ensures timely delivery, strong market coverage, 
                and reliable supply of quality FMCG brands to retailers, wholesalers, and 
                local markets.
              </p>
              <p>
                With a strong distribution network and efficient logistics, we ensure 
                consistent product availability and support brand growth in the market.
              </p>
            </div>
            <div className="about-mission">
              <h2>Our Mission</h2>
              <p>
                To expand our presence as a reliable FMCG distributor and super stockist, 
                connecting quality brands with every market.
              </p>
            </div>
          </div>

          <div className="company-details">
            <div className="detail-card">
              <h3>Year Established</h3>
              <p>2024</p>
            </div>
            <div className="detail-card">
              <h3>Operating Hours</h3>
              <p>9:00 AM - 6:00 PM</p>
            </div>
            <div className="detail-card">
              <h3>Location</h3>
              <p>Plot No. 5A, Dhongade Nagar, Deolali, Nashik Road, Nashik</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;