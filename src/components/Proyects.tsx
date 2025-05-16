// src/components/Projects.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../visuals/Proyects.css";
import ExternalLinkIcon from "../components/ExternalLinkIcon";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="projects-section" id="projects">
      <div className="container mt-4">
        <h2 className="text-white mb-4 proy-title">.{t("projects.title")}<span className="parenthesis-proy">()</span></h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[
            {
              title: t("project1.title"),
              desc: t("project1.desc"),
              link: "https://citas-veterinaria-ag27.netlify.app/",
              badges: ["React", "Vite", "TailwindCSS"],
            },
            {
              title: t("project2.title"),
              desc: t("project2.desc"),
              link: "https://control-gastos-2703ag.netlify.app/",
              badges: ["React", "Vite", "TailwindCSS"],
            },
            {
              title: t("project3.title"),
              desc: t("project3.desc"),
              link: "https://cotizador-criptos-2703ag.netlify.app/",
              badges: ["React", "Vite", "TailwindCSS"],
            },
            {
              title: t("project4.title"),
              desc: t("project4.desc"),
              link: "https://github.com/AntonioAguilar27/crud_django",
              badges: ["Django", "SQlite", "Bootstrap"],
            },
            {
              title: t("project5.title"),
              desc: t("project5.desc"),
              link: "https://github.com/AntonioAguilar27/React_Node_CRUD",
              badges: ["React", "NodeJS", "Sequelize", "Express"],
            },
            {
              title: t("project6.title"),
              desc: t("project6.desc"),
              link: "https://github.com/AntonioAguilar27/Reservaciones2",
              badges: ["PHP", "MySQL", "Bootstrap"],
            },
            {
              title: t("project7.title"),
              desc: t("project7.desc"),
              link: "https://github.com/AntonioAguilar27/Frontend-React-Strapi-Rockstar",
              link2: "https://github.com/AntonioAguilar27/Backend-React-Strapi-Rockstar",
              badges: ["Strapi", "SQlite", "React"],
            },
          ].map((project, index) => (
            <div className="col" key={index}>
              <div className="card h-100 project-card">
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-folder-fill icon-folder"></i> {project.title}
                    <a href={project.link} target="_blank" rel="noreferrer" className="external-link">
                      <ExternalLinkIcon />
                    </a>
                    {project.link2 && (
                      <a href={project.link2} target="_blank" rel="noreferrer" className="external-link">
                        <ExternalLinkIcon />
                      </a>
                    )}
                  </h5>
                  <p className="card-text">{project.desc}</p>
                  <div className="badge-container">
                    {project.badges.map((badge, i) => (
                      <span className="badge me-1" key={i}>{badge}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
