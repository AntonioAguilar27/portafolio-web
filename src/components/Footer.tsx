import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-dark text-white text-center py-3">
    <div className="container">
      <small>© {new Date().getFullYear()} MiLanding. Todos los derechos reservados.</small>
    </div>
  </footer>
);

export default Footer;
