import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, MoreButton } from '.';

const ProfileTitle = ({ className, name, setProfileModalState }) => {
  const openProfileModal = () => setProfileModalState(true);

  return (
    <div className={`profile-title ${className}`}>
      <Avatar name={name} />
      <span>{name}</span>
      <MoreButton onClick={openProfileModal} />
    </div>
  );
};

ProfileTitle.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  setProfileModalState: PropTypes.func,
}

ProfileTitle.defaultProps = {
  className: '',
  name: '',
  setProfileModalState: () => {},
}

export default ProfileTitle;