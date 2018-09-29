import React from 'react';

const Timestamp = ({ className, time }) => {
  const twoDigits = number => ('0' + number).slice(-2);
  const timeString = time 
    ? twoDigits(time.getHours()) + ':' + twoDigits(time.getMinutes())
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