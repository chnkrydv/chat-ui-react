import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ProfileTitle } from '../components';

const RoomTitlebar = ({ roomName, deleteRoom }) => (
  <ProfileTitle name={roomName} deleteRoom={deleteRoom}/>
);

const mapStateToProps = state => ({
  roomName: state.room.name,
});

RoomTitlebar.propTypes = {
  roomName: PropTypes.string,
  deleteRoom: PropTypes.func,
}

RoomTitlebar.defaultProps = {
  roomName: '',
  deleteRoom: () => {},
}

export default connect(mapStateToProps)(RoomTitlebar);