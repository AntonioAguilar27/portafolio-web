import React from 'react';
import '../visuals/Tecnologias.css'; // Importa el archivo CSS para los estilos

const Tecnologias: React.FC = () => (
  <section id="technologies" className="technologies-section py-5">
    <div className="container" id='tecnologias'>
      <h2 className="text-center mb-2 mt-5" >Tecnologías y/o Lenguajes</h2>
      <div className="technologies-grid">

        {/* Frontend */}
        <div className="tech-group">
          <h3 className="tech-group-title">Frontend</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/laravel.png" alt="Laravel" loading="lazy" /></div>
            </div>
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/React.webp" alt="React" loading="lazy" /></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/angular.svg.png" alt="Angular" loading="lazy" /></div>
            </div>
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/javascrip.png" alt="JavaScript" loading="lazy" /></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/django.png" alt="Django" loading="lazy" /></div>
            </div>
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/wordpress.png" alt="WordPress" loading="lazy" /></div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="tech-group">
          <h3 className="tech-group-title">Backend</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/laravel.png" alt="Laravel" loading="lazy" /></div>
            </div>
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/nodejs.png" alt="Node.js" loading="lazy" /></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/javascrip.png" alt="JavaScript" loading="lazy" /></div>
            </div>
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/django.png" alt="Django" loading="lazy" /></div>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="tech-group">
          <h3 className="tech-group-title">Databases</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/mongodb.svg" alt="MongoDB" loading="lazy" /></div>
            </div>
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/mysql.png" alt="MySQL" loading="lazy" /></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/postgresql.svg.png" alt="PostgreSQL" loading="lazy" /></div>
            </div>
            <div className="col-md-6">
              <div className="tech-icon"><img src="/images/sqlserver.png" alt="Redis" loading="lazy" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Tecnologias;



