import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "CRM Microservices Platform on Kubernetes",
      description:
        "Deployed a comprehensive CRM system with microservices architecture on Kubernetes. Implemented service discovery, auto-scaling, and health monitoring. Integrated with CI/CD pipeline for continuous deployment.",
      technologies: [
        "Kubernetes",
        "Docker",
        "Spring Boot",
        "PostgreSQL",
        "Jenkins",
      ],
      link: "https://github.com/Habibdrira/CRM-system-go-microservices",
    },
    {
      title: "Plateforme SaaS d’Administration de Conteneurs Docker",
      description:
        "Développement d’une plateforme SaaS microservices en Python (Flask) pour administrer des conteneurs Docker : cycle de vie (create, start, stop, delete) via Docker SDK, provisionnement isolé par utilisateur, orchestration et déploiement avec Docker Compose sur Linux.",
      technologies: [
        "Python",
        "Flask",
        "Docker",
        "Docker SDK",
        "Docker Compose",
        "Linux",
      ],
      link: "https://github.com/Habibdrira/saas-control-panel",
    },
    {
      title: "OpenStack Private Cloud Deployment",
      description:
        "Designed and deployed a complete OpenStack private cloud infrastructure. Configured compute, networking, and storage components. Implemented automation using Terraform and Ansible for IaC practices.",
      technologies: ["OpenStack", "Terraform", "Ansible", "Linux", "KVM"],
    },
    {
      title: "Fleetman – Déploiement microservices",
      description:
        "Déploiement d'une application de gestion de flotte en architecture microservices sur Kubernetes (Minikube). Pipeline CI/CD Jenkins, analyse de qualité avec SonarQube.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "SonarQube"],
      link: "https://github.com/Habibdrira/fleetman-k8s",
    },
    {
      title: "Plateforme Microservices Core Banking (Spring Cloud)",
      description:
        "Développement d’une plateforme bancaire en architecture microservices avec Spring Cloud. Service Discovery (Eureka), API Gateway, services exposés via REST, GraphQL et SOAP, documentation et tests des APIs.",
      technologies: [
        "Spring Boot",
        "Spring Cloud",
        "Eureka",
        "API Gateway",
        "REST",
        "GraphQL",
        "SOAP",
        "Swagger",
      ],
      link: "https://github.com/Habibdrira/microservices-corebanking",
    },
    {
      title: "Gestion Employés – Laravel",
      description:
        "Application de gestion des employés et services en Laravel : CRUD, validation, vues Blade, et persistance des données.",
      technologies: ["PHP", "Laravel", "Blade", "MySQL"],
      link: "https://github.com/Habibdrira/Gestion-Employee-Laravel",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link || "#contact"}
                className="project-link"
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noreferrer" : undefined}
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
