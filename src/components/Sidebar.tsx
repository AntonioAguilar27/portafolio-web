import React from 'react';
import '../visuals/Sidebar.css'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
  <div className="social-icons">
    <a href="#" target="_blank"><i className="fab fa-github"></i></a>
    <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
    <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
  </div>
</div>
  );
};

export default Sidebar;
