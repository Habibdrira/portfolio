import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            Final-year Computer Engineering student specializing in Cloud Computing and DevOps. 
            I bring strong hands-on experience in cloud-native and microservices architectures, 
            containerization, CI/CD pipelines, infrastructure automation and monitoring.
          </p>
          <p className="about-text">
            Currently seeking a final-year internship (PFE) starting January 2026. My expertise spans 
            across AWS, Azure, OCI, Docker, Kubernetes and modern DevOps tools. I'm passionate about 
            building scalable, resilient cloud infrastructure and automating deployment pipelines.
          </p>
          <div className="education-box">
            <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>Education</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>
              <strong>Engineering Degree in Computer Science</strong> – iTeam University (2023 – Present)<br />
              Specialization: Cloud Computing & Virtualization
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <strong>Bachelor's Degree in Computer Systems Engineering</strong> – Faculty of Sciences of Tunis (2020 – 2023)<br />
              Specialization: IoT & Embedded Systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
