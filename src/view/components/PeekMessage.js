import React from 'react';

const PeekMessage = ({ className, lastMessage='' }) => (
  <div
    className={`peek-message ${className}`}
  >
    {lastMessage}
  </div>
);

export default PeekMessage;