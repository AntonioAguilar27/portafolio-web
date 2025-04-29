import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../visuals/VerticalPills.css"; // Asegúrate de importar tus estilos

const VerticalPills: React.FC = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState("frontend"); // Estado para saber qué sección está activa

  // Función para manejar el cambio de sección
  const handleTabSelect = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div>
        <div className="vertical-pills-container">
      <div className="container">
        <h2 className="text-white tech_title">.{t("sections.title")}<span className="parenthesis-pill">()</span></h2>
        <div className="row justify-content-center">
          {/* Column para las "píldoras" */}
          <div className="col-sm-4">
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeKey === "frontend" ? "active" : ""
                  }`}
                  href="#frontend"
                  onClick={() => handleTabSelect("frontend")}
                >
                  {t("sections.frontend")}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeKey === "backend" ? "active" : ""
                  }`}
                  href="#backend"
                  onClick={() => handleTabSelect("backend")}
                >
                  {t("sections.backend")}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeKey === "databases" ? "active" : ""
                  }`}
                  href="#databases"
                  onClick={() => handleTabSelect("databases")}
                >
                  {t("sections.databases")}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeKey === "infrastructure" ? "active" : ""
                  }`}
                  href="#infrastructure"
                  onClick={() => handleTabSelect("infrastructure")}
                >
                  {t("sections.infrastructure")}
                </a>
              </li>
            </ul>
          </div>
          {/* Contenido de cada sección con estilo tipo card */}
          <div className="col-sm-8">
            <div className="tech-card p-4 mb-4">
              {activeKey === "frontend" && (
                <>
                  <ul className="tech-list">
                    <li className="text-white">React</li>
                    <li className="text-white">PHP</li>
                    <li className="text-white">Angular</li>
                    <li className="text-white">TypeScript</li>
                    <li className="text-white">Bootstrap CSS</li>
                  </ul>
                </>
              )}
              {activeKey === "backend" && (
                <>
                  <ul className="tech-list">
                    <li className="text-white">Node.js</li>
                    <li className="text-white">Django</li>
                    <li className="text-white">Express.js</li>
                    <li className="text-white">Laravel</li>
                  </ul>
                </>
              )}
              {activeKey === "databases" && (
                <>
                  <ul className="tech-list">
                    <li className="text-white">PostgreSQL</li>
                    <li className="text-white">MongoDB</li>
                    <li className="text-white">MySQL</li>
                    <li className="text-white">SQL Server</li>
                    <li className="text-white">SQLite</li>
                  </ul>
                </>
              )}
              {activeKey === "infrastructure" && (
                <>
                  <ul className="tech-list">
                    <li className="text-white">AWS</li>
                    <li className="text-white">Docker</li>
                    <li className="text-white">Kubernetes</li>
                    <li className="text-white">Nginx</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VerticalPills;
