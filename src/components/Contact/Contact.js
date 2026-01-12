import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Interested in collaborating or discussing Cloud & DevOps opportunities? Let's connect!
        </p>
        <div className="contact-info">
          <div className="contact-email-section">
            <p className="contact-label">Primary Email</p>
            <a href="mailto:habibdrira6@gmail.com" className="contact-email">habibdrira6@gmail.com</a>
          </div>
          <div className="contact-email-section">
            <p className="contact-label">University Email</p>
            <a href="mailto:habib.drira@iteam-univ.tn" className="contact-email">habib.drira@iteam-univ.tn</a>
          </div>
          <div className="contact-email-section">
            <p className="contact-label">Phone</p>
            <a href="tel:+21626362348" className="contact-email">+216 26 362 348</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Habibdrira" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://linkedin.com/in/habibdrira6" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
