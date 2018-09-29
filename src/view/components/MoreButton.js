import React from 'react';
import { Modal } from './';

const MoreButton = ({ onClick, children }) => (
  <div className="option" onClick={onClick}>
    <i className="material-icons option__icon">more_vert</i>
    {children}
  </div>
)

export default MoreButton;