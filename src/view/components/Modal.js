import React from 'react';

const Modal = ({ children, open, isModalOpen }) => {
  const closeModal = e => isModalOpen(false)
  const stopEventPropagataion = e => e.stopPropagation();

  return (
    <div className={`modal ${open ? '' : 'gone'}`} onClick={closeModal}>
      <div className="modal__content" onClick={stopEventPropagataion}>
          {children}
      </div>
    </div>
  );
}

export default Modal;