import React from 'react';

const Timestamp = ({ className, time }) => (
  <div
    className={`timestamp ${className || ''}`}
  >
    {time.getHours() + ':' + time.getMinutes()}
  </div>
);

export default Timestamp;