import React from 'react';
import PropTypes from 'prop-types';

const MoreButton = ({ className, onClick, children }) => (
  <div className={`option ${className}`} onClick={onClick}>
    <i className="material-icons option__icon">more_vert</i>
    {children}
  </div>
);

MoreButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

MoreButton.defaultProps = {
  className: '',
  onClick: () => {},
}

export default MoreButton;