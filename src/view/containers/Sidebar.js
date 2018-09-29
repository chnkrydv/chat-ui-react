import React from 'react';
import { connect } from 'react-redux';

import { addRoom } from '../../store/actions';
import { Rooms, SearchRoom } from './';
import { ProfileTitle } from '../components';

const Sidebar = ({ user, rooms, online, addRoom }) => {
  const addNewChatRoom = () => {
    console.log('adding room');
    const index = rooms.length;
    const { username, name } = online[index];
    addRoom(username, name);
  }

  return (
    <div className="menu">
      <ProfileTitle isUser={true} name={user} addRoom={addNewChatRoom}/>
      <SearchRoom />
      <Rooms />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.app.user,
  rooms: state.rooms.list,
  online: state.rooms.onlineList,
});

const mapDispatchToProps = dispatch => ({
  addRoom: (index, name) => dispatch(addRoom(index, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);