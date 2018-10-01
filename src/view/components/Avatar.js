import React from 'react';
import PropTypes from 'prop-types';

import { initials } from '../../services/utils/stringer';

const Avatar = ({ className, name }) => {
  const shortName = initials(name).toUpperCase();

  return (
    <div className={`avatar ${className}`}>
      {shortName}
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
}

Avatar.defaultProps = {
  className: '',
  name: '',
}

export default Avatar;