// src/components/home/Features.js - No changes needed, CSS will handle theming
import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Timely Delivery',
      description: 'Ensuring consistent product availability with efficient logistics',
    },
    {
      icon: '🏪',
      title: 'Strong Market Coverage',
      description: 'Extensive network connecting brands with retailers across regions',
    },
    {
      icon: '✓',
      title: 'Quality Assurance',
      description: 'Authorized distributor of premium FMCG brands',
    },
    {
      icon: '💼',
      title: 'Reliable Supply Chain',
      description: 'End-to-end distribution solutions for business growth',
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;