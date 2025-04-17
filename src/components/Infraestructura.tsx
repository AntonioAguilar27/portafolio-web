import React from 'react';
import '../visuals/Infraestructura.css';

const Infraestructura: React.FC = () => (
  <section className="infraestructure-section-2 pb-5">
    <div className="container">
      <div className="tech-group-2">
        <h3 className="tech-group-title-2">
          Infraestructura y trabajo en equipo
        </h3>
        <div className="tech-icons-wrapper">
          <div className="tech-icon-2">
            <img src="/images/docker.webp" alt="Docker" loading="lazy" />
          </div>
          <div className="tech-icon-2">
            <img src="/images/jira.svg" alt="Jira" loading="lazy" />
          </div>
          <div className="tech-icon-2">
            <img src="/images/monday.svg" alt="Monday" loading="lazy" />
          </div>
          <div className="tech-icon-2">
            <img src="/images/github.svg" alt="GitHub" loading="lazy" />
          </div>
          <div className="tech-icon-2">
            <img src="/images/aws-4.jpg" alt="AWS" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Infraestructura;
