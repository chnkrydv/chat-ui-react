import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ className, children, open, setModalState }) => {
  const closeModal = e => setModalState(false);
  const stopEventPropagataion = e => e.stopPropagation();

  return (
    <div className={`modal ${open ? '' : 'gone'}`} onClick={closeModal}>
      <div className={`modal__content ${className}`} onClick={stopEventPropagataion}>
          {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  setModalState: PropTypes.func,
}

Modal.defaultProps = {
  className: '',
  open: false,
  setModalState: () => {},
}

export default Modal;