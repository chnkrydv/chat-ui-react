import React from 'react';

import { Avatar, Add, More, Modal } from '.';

const ProfileTitle = ({ isUser, name, addRoom, modalOpen, toggleProfileModal }) => (
  <div className="profile-title">
    <Avatar name={name} />
    {name}
    {isUser && (
      <Add
        onClick={addRoom}
      />
    )}
    <More onClick={toggleProfileModal}>
      <Modal open={modalOpen}>
        this is options modal
      </Modal>
    </More>
  </div>
)

export default ProfileTitle;