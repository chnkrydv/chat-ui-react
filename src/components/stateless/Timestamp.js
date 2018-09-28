import React from 'react';

const Timestamp = ({ className, lastMessage }) => (
  <div
    className={`timestamp ${className || ''}`}
  >
    10:54 AM
  </div>
);

export default Timestamp;