import React from 'react';

const Timestamp = ({ className, time }) => {
  const timeString = time 
    ? time.getHours() + ':' + time.getMinutes()
    : '';
  
  return (
    <div
      className={`timestamp ${className || ''}`}
    >
      {timeString}
    </div>
  );
}

export default Timestamp;