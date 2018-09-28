import React from 'react';
import { Modal } from './';

const Options = ({ onComplete, modalOpen }) => (
  <div className="options">
    <i className="material-icons options__icon">more_vert</i>
    <Modal open={modalOpen}>
      this is options modal
    </Modal>
  </div>
)

export default Options;