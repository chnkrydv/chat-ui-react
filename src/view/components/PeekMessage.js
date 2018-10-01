import React from 'react';
import PropTypes from 'prop-types';

const PeekMessage = ({ className, peekMessage }) => (
  <div className={`peek-message ${className}`} >
    {peekMessage}
  </div>
);

PeekMessage.propTypes = {
  className: PropTypes.string,
  peekMessage: PropTypes.string,
}

PeekMessage.defaultProps = {
  className: '',
  peekMessage: '',
}

export default PeekMessage;