import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="bg-light py-5">
    <div className="container">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <form className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo</label>
          <input type="email" className="form-control" id="email" placeholder="tu@email.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" rows={4} placeholder="Tu mensaje"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  </section>
);

export default Contact;
