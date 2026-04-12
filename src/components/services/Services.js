// src/components/services/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Distribution Services",
      description: "Authorized distributor for premium FMCG brands",
      icon: "🚚"
    },
    {
      title: "Wholesale Supply",
      description: "Bulk supply to retailers and wholesalers",
      icon: "🏪"
    },
    
    {
      title: "Market Coverage",
      description: "Strong presence in local and regional markets",
      icon: "🎯"
    }
  ];

  return (
    <main>
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Distribution Solutions</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;