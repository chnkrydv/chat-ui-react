import React from 'react';

const AddButton = ({ onClick }) => (
  <div className="option" onClick={onClick}>
    <i className="material-icons option__icon">add</i>
  </div>
)

export default AddButton;