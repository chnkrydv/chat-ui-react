import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ProfileTitle } from '../components';

const RoomTitlebar = ({ userName, deleteRoom }) => (
  <ProfileTitle name={userName} deleteRoom={deleteRoom}/>
);

const mapStateToProps = state => ({
  userName: state.app.userName,
});

RoomTitlebar.propTypes = {
  userName: PropTypes.string,
  deleteRoom: PropTypes.func,
}

RoomTitlebar.defaultProps = {
  userName: '',
  deleteRoom: () => {},
}

export default connect(mapStateToProps)(RoomTitlebar);