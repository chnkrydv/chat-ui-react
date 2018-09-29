import React from 'react';

const Modal = ({ children, open }) => (
  <div className={`modal ${open ? '' : 'gone'}`}>
    <div className="modal__content">
        {children}
    </div>
  </div>
)

export default Modal;