import React from 'react';
import { connect } from 'react-redux';

import { Rooms } from './';
import { ProfileTitle, SearchBox } from '../components';

const Sidebar = ({ user, selectedIndex, searchText, onSearchInputChange, onRoomSelect }) => {
  const selectRoom = index => onRoomSelect(index);

  return (
    <div className="menu">
      <ProfileTitle isUser={true} name={user}/>
      <SearchBox onSearchInputChange={onSearchInputChange}/>
      <Rooms />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.app.user,
});

const mapDispatchToProps = dispatch => ({
  onSearchInputChange: () => dispatch(),
  onRoomSelect: () => dispatch(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);