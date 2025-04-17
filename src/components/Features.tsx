import React from 'react';

const Features: React.FC = () => (
  <section id="features" className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Características</h2>
      <div className="row">
        <div className="col-md-4">
          <h4>Fácil de usar</h4>
          <p>Una interfaz intuitiva y amigable.</p>
        </div>
        <div className="col-md-4">
          <h4>Responsive</h4>
          <p>Funciona en móviles, tablets y escritorio.</p>
        </div>
        <div className="col-md-4">
          <h4>Optimizada</h4>
          <p>Carga rápida y excelente rendimiento.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
