import React from 'react';
import { connect } from 'react-redux';

import { setProfileModalState, connectToServer, updateUserIdText, updateUserNameText } from '../../state/actions';
import { Modal } from '../components';

const Profile = ({  userId, name, modalOpen, setModalState, connectToServer, updateUserIdText, updateUserNameText }) => {
  const updateIdText = ({ target }) => updateUserIdText(target.value);
  const updateNameText = ({ target }) => updateUserNameText(target.value);
  const connectServer = () => connectToServer(updateUserIdText, updateUserNameText);

  return (
    <Modal
      className="profile"
      open={modalOpen}
      setModalState={setModalState}
    >
      <div className="profile__title">Add or update profile</div>
      <span className="profile__userid">Create unique id</span>
      <input className="profile__userId__input" value={userId} onChange={updateIdText}/>
      <span className="profile__name">Name</span>
      <input className="profile__name__input" value={name} onChange={updateNameText} />
      <button className="profile__join-room" onClick={connectServer}>Join Room</button>
    </Modal>
  );
}

const mapStateToProps = state => ({
  modalOpen: state.app.userProfileModalOpen,
  userId: state.app.editingUserId,
  name: state.app.editingUserName,
});

const mapDispatchToProps = dispatch => ({
  connectToServer: () => dispatch(connectToServer()),
  setModalState: isOpen => dispatch(setProfileModalState(isOpen)),
  updateUserIdText: text => dispatch(updateUserIdText(text)),
  updateUserNameText: text => dispatch(updateUserNameText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);