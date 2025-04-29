import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../visuals/Experience.css"; // Asegúrate de importar tus estilos

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = useState("gc1Holding"); // Sección predeterminada: Gc1 Holding

  // Función para manejar el cambio de sección
  const handleTabSelect = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div>
      <div className="vertical-pills-container" id="experience">
        <div className="container">
          <h2 className="text-white tech_title">
            .{t("experience.title")}
            <span className="parenthesis-pill">()</span>
          </h2>
          <div className="row justify-content-center">
            {/* Column para las "píldoras" */}
            <div className="col-sm-4">
              <ul className="nav nav-pills flex-column">
                {/* Secciones de "Gc1 Holding" y "Coppel" */}
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeKey === "gc1Holding" ? "active" : ""}`}
                    href="#gc1Holding"
                    onClick={() => handleTabSelect("gc1Holding")}
                  >
                    {t("GC1 Holding")}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeKey === "coppel" ? "active" : ""}`}
                    href="#coppel"
                    onClick={() => handleTabSelect("coppel")}
                  >
                    {t("Coppel")}
                  </a>
                </li>
              </ul>
            </div>
            {/* Contenido de cada sección con estilo tipo card */}
            <div className="col-sm-8">
              <div className="tech-card p-4 mb-4">
                {activeKey === "gc1Holding" && (
                  <>
                    <h4 className="text-white">{t("work.gc1Holding.title")}</h4>
                    <p className="text-white">{t("work.gc1Holding.description")}</p>
                    <ul className="tech-list">
                      <li className="text-white">{t("work.gc1Holding.role")}</li>
                      <li className="text-white">{t("work.gc1Holding.work")}</li>
                      <li className="text-white">{t("work.gc1Holding.technologies")}</li>
                    </ul>
                  </>
                )}
                {activeKey === "coppel" && (
                  <>
                    <h4 className="text-white">{t("work.coppel.title")}</h4>
                    <p className="text-white">{t("work.coppel.description")}</p>
                    <ul className="tech-list">
                      <li className="text-white">{t("work.coppel.role")}</li>
                      <li className="text-white">{t("work.coppel.work")}</li>
                      <li className="text-white">{t("work.coppel.technologies")}</li>
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

export default Experience;
