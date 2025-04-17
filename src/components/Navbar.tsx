import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../visuals/Navbar.css';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para cambiar el idioma
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // Función para mostrar/ocultar el menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Función para cerrar el menú móvil
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Controlar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Ajusta este valor según el efecto deseado
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`navbar navbar-expand-lg ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container position-relative">
          {/* Menú de navegación de escritorio */}
          <ul className="navbar-nav mx-auto d-flex flex-row gap-4 align-items-center desktop-menu">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">{t("nav.home")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#technologies">{t("nav.technologies")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#projects">{t("nav.projects")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#experience">{t("nav.experience")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">{t("nav.about")}</a>
            </li>
          </ul>

          {/* Botones de cambio de idioma en escritorio */}
          <div className="language-buttons-desktop">
            <button className="btn btn-sm btn-outline-custom" onClick={() => handleLanguageChange("es")}>ES</button>
            <button className="btn btn-sm btn-outline-custom" onClick={() => handleLanguageChange("en")}>EN</button>
          </div>

          {/* Botón de menú hamburguesa (visible solo en móvil) */}
          <button className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-modal">
          <nav className="mobile-nav-links">
            <a href="#home" onClick={closeMobileMenu}>{t("nav.home")}</a>
            <a href="#technologies" onClick={closeMobileMenu}>{t("nav.technologies")}</a>
            <a href="#projects" onClick={closeMobileMenu}>{t("nav.projects")}</a>
            <a href="#experience" onClick={closeMobileMenu}>{t("nav.experience")}</a>
            <a href="#about" onClick={closeMobileMenu}>{t("nav.about")}</a>
          </nav>
          <div className="mobile-language-buttons">
            <button className="btn btn-sm btn-outline-custom" onClick={() => handleLanguageChange("es")}>ES</button>
            <button className="btn btn-sm btn-outline-custom" onClick={() => handleLanguageChange("en")}>EN</button>
          </div>
          <button className="close-mobile-menu" onClick={closeMobileMenu}>✕</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
