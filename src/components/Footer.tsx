import React from 'react';
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-white text-center py-3" style={{ backgroundColor: '#1b1b1b' }}>
      <div className="container">
        <small>© {t("footer.madewith")}<span style={{ color: '#548C27' }}> Antonio Aguilar</span></small>
      </div>
    </footer>
  );
};

export default Footer;
