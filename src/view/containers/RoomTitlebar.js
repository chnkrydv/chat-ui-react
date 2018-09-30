import React from 'react';
import { connect } from 'react-redux';


import { ProfileTitle } from '../components';

const RoomTitlebar = ({ userName }) => {
  const addNewChatRoom = () => {
    console.log('adding room');
  }

  return (
    <ProfileTitle name={userName} addRoom={addNewChatRoom}/>
  );
}

const mapStateToProps = state => ({
  userName: state.app.userName,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomTitlebar);