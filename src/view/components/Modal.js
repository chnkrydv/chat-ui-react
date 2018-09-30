import React from 'react';

const Modal = ({ className='', children, open, setModalState }) => {
  const closeModal = e => setModalState(false);
  const stopEventPropagataion = e => e.stopPropagation();

  return (
    <div className={`modal ${open ? '' : 'gone'}`} onClick={closeModal}>
      <div className={`modal__content ${className}`} onClick={stopEventPropagataion}>
          {children}
      </div>
    </div>
  );
}

export default Modal;