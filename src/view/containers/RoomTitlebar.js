import React from 'react';
import { connect } from 'react-redux';


import { ProfileTitle } from '../components';

const RoomTitlebar = ({ user }) => {
  const addNewChatRoom = () => {
    console.log('adding room');
  }

  return (
    <ProfileTitle name={user} addRoom={addNewChatRoom}/>
  );
}

const mapStateToProps = state => ({
  user: state.app.user,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomTitlebar);