import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Si el modal no debe estar abierto, no renderizamos nada
  if (!isOpen) return null;

  // Obtenemos el elemento 'modal-root' donde se renderizará el modal
  const modalRoot = document.getElementById("modal-root");

  // Si 'modal-root' no existe (lo cual no debería pasar si index.html está bien),
  // podemos loggear un error o simplemente no renderizar.
  if (!modalRoot) {
    console.error(
      "El elemento #modal-root no se encontró en el DOM. El modal no se renderizará correctamente."
    );
    return null;
  }

  // Usamos createPortal para renderizar el children en el modalRoot
  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Evita que hacer clic dentro del contenido cierre el modal
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}{" "}
        {/* Aquí se renderizará el contenido que le pases desde Projects.tsx */}
      </div>
    </div>,
    modalRoot // Este es el nodo DOM al que se adjuntará el modal
  );
};

export default Modal;
