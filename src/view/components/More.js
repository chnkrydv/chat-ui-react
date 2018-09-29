import React from 'react';
import { Modal } from './';

const More = ({ onClick, children }) => (
  <div className="option" onClick={onClick}>
    <i className="material-icons option__icon">more_vert</i>
    {children}
  </div>
)

export default More;