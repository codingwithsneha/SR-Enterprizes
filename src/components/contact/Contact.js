// src/components/contact/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since this is frontend only, we'll just show a success message
    // In production, you can use EmailJS or Formspree for actual form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main>
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us for business inquiries</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h3>Office Address</h3>
                  <p>Plot No. 5A, Dhongade Nagar, Deolali, Nashik Road, Nashik</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <h3>Phone Number</h3>
                  <p>9404215553</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <h3>Email Address</h3>
                  <p>swarae200@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🕐</span>
                <div>
                  <h3>Operating Hours</h3>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.5!2d73.8!3d19.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU0JzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {submitted && (
                <div className="success-message">
                  Thank you! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;