import React from 'react';

import { Avatar, MoreButton, Modal } from '.';

const ProfileTitle = ({ name='', setProfileModalState }) => {
  const openProfileModal = () => setProfileModalState(true);

  return (
    <div className="profile-title">
      <Avatar name={name} />
      <span>{name}</span>
      <MoreButton onClick={openProfileModal} />
    </div>
  );
}

export default ProfileTitle;