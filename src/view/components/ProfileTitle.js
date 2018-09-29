import React from 'react';

import { Avatar, AddButton, MoreButton, Modal } from '.';

const ProfileTitle = ({ name, children, modalOpen, isModalOpen }) => (
  <div className="profile-title">
    <Avatar name={name} />
    {name || ' '}
    <MoreButton onClick={isModalOpen}>
      <Modal open={modalOpen}>
        {children}
      </Modal>
    </MoreButton>
  </div>
)

export default ProfileTitle;