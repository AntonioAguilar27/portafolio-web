import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';
import Tecnologias from './components/Tecnologias'
import Proyects from './components/Proyects';
import VerticallPils from './components/VerticallPils';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Aside from './components/Aside';
import Experience from './components/Experience';

const App: React.FC = () => (
  <>
    <Navbar />
    <Aside/>
    <HeroBanner />
    <Tecnologias/>
    <VerticallPils/>
    <Proyects/>
    <Experience/>
    <Footer />
  </>
);

export default App;
