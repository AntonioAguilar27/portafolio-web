import React from 'react';
import { useTranslation } from 'react-i18next';
import '../visuals/HeroBanner.css'; // Importa un archivo CSS para estilos más específicos
import profileImage from '../assets/IMG_1468.jpg'; // Importa tu imagen de perfil

const HeroBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="hero-banner" id='home' style={{marginTop: '80px'}}>
      <div className='container'>
      <div className="espaciador"></div>
        <div className="hero-container" >
          <div className="hero-text">
            <h1 className="display-4">ANTONIO AGUILAR</h1>
            <p className="lead">
              {t('hero.introduction')}
            </p>
            <a href="#projects" className="hero-button" id="technologies">
              {t('hero.callToAction')}
            </a>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Antonio Aguilar" className="profile-image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;