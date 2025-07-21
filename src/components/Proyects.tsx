import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../visuals/Proyects.css";
// import ExternalLinkIcon from "../components/ExternalLinkIcon"; // No parece que lo estés usando actualmente
import { Modal, Button } from "react-bootstrap";

// --- 1. Actualiza la interfaz Project para incluir 'image' ---
interface Project {
  title: string;
  desc: string;
  link: string;
  link2?: string;
  badges: string[];
  image?: string; // Hacemos la propiedad 'image' opcional
}

const Projects: React.FC = () => {
  const { t } = useTranslation();

  // El estado ahora usa la interfaz Project
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    // Aseguramos que el array de proyectos cumpla con la interfaz
    {
      title: t("project1.title"),
      desc: t("project1.desc"),
      link: "https://citas-veterinaria-ag27.netlify.app/",
      badges: ["React", "Vite", "TailwindCSS"],
      image: "/images/project1.png", // Asegúrate de que tus imágenes tengan extensión
    },
    {
      title: t("project2.title"),
      desc: t("project2.desc"),
      link: "https://control-gastos-2703ag.netlify.app/",
      badges: ["React", "Vite", "TailwindCSS"],
      image: "/images/project2.png",
    },
    {
      title: t("project3.title"),
      desc: t("project3.desc"),
      link: "https://cotizador-criptos-2703ag.netlify.app/",
      badges: ["React", "Vite", "TailwindCSS"],
      image: "/images/project3.png",
    },
    {
      title: t("project4.title"),
      desc: t("project4.desc"),
      link: "https://github.com/AntonioAguilar27/crud_django",
      badges: ["Django", "SQlite", "Bootstrap"],
      image: "/images/project4.png",
    },
    {
      title: t("project5.title"),
      desc: t("project5.desc"),
      link: "https://github.com/AntonioAguilar27/React_Node_CRUD",
      badges: ["React", "NodeJS", "Sequelize", "Express"],
      image: "/images/project5.png",
    },
    {
      title: t("project6.title"),
      desc: t("project6.desc"),
      link: "https://github.com/AntonioAguilar27/Reservaciones2",
      badges: ["PHP", "MySQL", "Bootstrap"],
      image: "/images/project6.png",
    },
    {
      title: t("project7.title"),
      desc: t("project7.desc"),
      link: "https://github.com/AntonioAguilar27/Frontend-React-Strapi-Rockstar",
      link2:
        "https://github.com/AntonioAguilar27/Backend-React-Strapi-Rockstar",
      badges: ["Strapi", "SQlite", "React"],
      image: "/images/project7.png",
    },
    {
      title: t("project8.title"),
      desc: t("project8.desc"),
      link: "https://github.com/AntonioAguilar27/Reservaciones2", // Nota: El link de este proyecto es el mismo que el 6, ¿es intencional?
      badges: ["React", "Typescript", "Tailwindcss"],
      image: "/images/imagen-soltech.png", // Asegúrate de la extensión aquí (.png, .jpg, etc.)
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <div className="container mt-4">
        <h2 className="text-white mb-4 proy-title">
          .{t("projects.title")}
          <span className="parenthesis-proy">()</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {projects.map((project, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 project-card"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <i className="bi bi-folder-fill icon-folder"></i>{" "}
                    {project.title}
                  </h5>
                  <p className="card-text">{project.desc}</p>
                  <div className="badge-container">
                    {project.badges.map((badge, i) => (
                      <span className="badge me-1" key={i}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de React-Bootstrap */}
        {selectedProject && (
          <Modal
            show={!!selectedProject} // 'show' controla la visibilidad
            onHide={() => setSelectedProject(null)} // 'onHide' se llama cuando el modal se cierra (ej. click fuera, Esc)
            centered // Centra el modal verticalmente
            dialogClassName="custom-modal-dialog" // Clase opcional para estilos personalizados del diálogo
            contentClassName="custom-modal-content" // Clase opcional para estilos personalizados del contenido
          >
            <Modal.Header closeButton className="custom-modal-header">
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="custom-modal-body">
              {/* --- 2. Integra la imagen aquí --- */}
              {selectedProject.image && (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="img-fluid rounded mb-3 modal-image" // Agrega clases de Bootstrap para responsive y una clase personalizada
                />
              )}
              <p>{selectedProject.desc}</p>
              <div className="mb-3 badge-container">
                {selectedProject.badges.map((badge, i) => (
                  <span className="badge me-1" key={i}>
                    {badge}
                  </span>
                ))}
              </div>
              <div className="d-flex flex-column flex-md-row gap-2">
                {" "}
                {/* Usa flex para los botones de enlace */}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary" // Usamos clases de Bootstrap
                >
                  Ver Proyecto
                </a>
                {selectedProject.link2 && (
                  <a
                    href={selectedProject.link2}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary" // Usamos clases de Bootstrap
                  >
                    Ver Backend
                  </a>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer className="custom-modal-footer">
              <Button
                variant="secondary"
                onClick={() => setSelectedProject(null)}
              >
                {t("close") || "Cerrar"}
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Projects;
