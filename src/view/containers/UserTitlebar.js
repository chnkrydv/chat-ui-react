import React from 'react';
import { connect } from 'react-redux';

import { addRoom } from '../../store/actions';
import { ProfileTitle } from '../components';

const UserTitlebar = ({ user, rooms, online, addRoom }) => {
  const addNewChatRoom = () => {
    console.log('adding room');
    const index = rooms.length;
    const { id, name } = online[index];
    addRoom(id, name);
  }

  return (
    <ProfileTitle hadAddButton={true} name={user} addRoom={addNewChatRoom}/>
  );
}

const mapStateToProps = state => ({
  user: state.app.user,
  rooms: state.rooms.list,
  online: state.rooms.availableList,
});

const mapDispatchToProps = dispatch => ({
  addRoom: (index, name) => dispatch(addRoom(index, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTitlebar);