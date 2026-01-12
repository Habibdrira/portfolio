import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {currentYear} DRIRA HABIB. Cloud & DevOps Engineer. All rights reserved. | Based in Tunis, Tunisia
        </p>
        <p className="footer-links">
          <a href="https://github.com/Habibdrira/portfolio.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
