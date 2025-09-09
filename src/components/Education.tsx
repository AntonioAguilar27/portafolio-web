import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../visuals/Experience.css"; // Asegúrate de importar tus estilos

const Education: React.FC = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState("gc1Holding"); // Sección predeterminada: Gc1 Holding

  // Función para manejar el cambio de sección
  const handleTabSelect = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div>
      <div className="vertical-pills-container" id="education">
        <div className="container">
          <h2 className="text-white tech_title">
            .{t("education.title")}
            <span className="parenthesis-pill">()</span>
          </h2>
          <div className="row justify-content-center">
            {/* Column para las "píldoras" */}
            <div className="col-sm-4">
              <ul className="nav nav-pills flex-column">
                {/* Secciones de "Gc1 Holding" y "Coppel" */}
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeKey === "gc1Holding" ? "active" : ""
                    }`}
                    href=""
                    onClick={() => handleTabSelect("gc1Holding")}
                  >
                    {t("universidad")}
                  </a>
                </li>
              </ul>
            </div>
            {/* Contenido de cada sección con estilo tipo card */}
            <div className="col-sm-8">
              <div className="tech-card p-4 mb-4">
                {activeKey === "gc1Holding" && (
                  <>
                    <h4 className="text-white">{t("escuela.carrera")}</h4>
                    <p className="" style={{ color: "#548C27" }}>
                      {t("escuela.institucion")}
                    </p>
                    <ul className="tech-list">
                      <li className="text-white">{t("escuela.status")}</li>
                      <li className="text-white">{t("escuela.fecha")}</li>
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

export default Education;
