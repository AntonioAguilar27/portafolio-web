import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tecnologias from './components/Tecnologias'
import Infraestructura from './components/Infraestructura';

const App: React.FC = () => (
  <>
    <Navbar />
    <HeroBanner />
    <Tecnologias/>
    <Infraestructura/>
    <Features />
    <Contact />
    <Footer />
  </>
);

export default App;
