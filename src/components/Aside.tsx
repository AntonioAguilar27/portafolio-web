import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../visuals/Aside.css';

const Aside: React.FC = () => (
  <aside className="aside-container">
    <div className="icon-container">
      <div className="vertical-line top-line"></div>
      <div className="icons">
        <a href="https://github.com/AntonioAguilar27" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/pedro-antonio-aguilar-godoy-53a967168" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:antonioaguilar_21@hotmail.com">
          <FaEnvelope size={30} />
        </a>
      </div>
      <div className="vertical-line bottom-line"></div>
    </div>
  </aside>
);
export default Aside;

