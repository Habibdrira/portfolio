import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-name">DRIRA HABIB</h1>
        <p className="hero-title">Cloud & DevOps Engineer</p>
        <p className="hero-subtitle">Final-year Computer Engineering student specializing in Cloud Computing & DevOps</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
