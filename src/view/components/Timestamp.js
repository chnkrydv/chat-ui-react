import React from 'react';
import PropTypes from 'prop-types';

const Timestamp = ({ className, time }) => {
  const twoDigits = number => ('0' + number).slice(-2);
  const timeString = time 
    ? twoDigits(time.getHours()) + ':' + twoDigits(time.getMinutes())
    : '';
  
  return (
    <div className={`timestamp ${className || ''}`} >
      {timeString}
    </div>
  );
}

Timestamp.propTypes = {
  className: PropTypes.string,
  time: PropTypes.instanceOf(Date),
}

Timestamp.defaultProps = {
  className: '',
  time: null,
}

export default Timestamp;