import React from 'react';

const PeekMessage = ({ className, peekMessage='' }) => (
  <div
    className={`peek-message ${className}`}
  >
    {peekMessage}
  </div>
);

export default PeekMessage;