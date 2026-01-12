import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: ['AWS (EC2, S3, RDS)', 'Microsoft Azure', 'Oracle Cloud Infrastructure', 'OpenStack']
    },
    {
      title: 'Containers & Orchestration',
      skills: ['Docker', 'Kubernetes', 'OpenShift', 'Container Registry']
    },
    {
      title: 'DevOps & CI/CD',
      skills: ['Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Terraform', 'Ansible', 'Puppet']
    },
    {
      title: 'Backend & APIs',
      skills: ['Java', 'Python', 'Spring Boot', 'Spring Cloud', 'REST APIs', 'GraphQL', 'gRPC']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'Oracle Database']
    },
    {
      title: 'Monitoring & Quality',
      skills: ['Prometheus', 'Grafana', 'SonarQube', 'Trivy']
    },
    {
      title: 'Systems & Networking',
      skills: ['Linux (Ubuntu, RedHat)', 'TCP/IP', 'VLAN', 'OSPF']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
