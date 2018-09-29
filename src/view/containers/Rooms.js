import React from 'react';
import { connect } from 'react-redux';

import { openRoom } from '../../store/actions'
import { Room } from '../components';

const Rooms = ({ rooms, searchText, selectedIndex, openRoom }) => {
  return (
    <div>
      {rooms.map(({ name }, key) => (
        <Room
          key={key}
          index={key}
          name={name}
          lastMessage={'kya kar raha hai bhai'}
          searchText={searchText}
          selected={selectedIndex === key}
          onSelect={openRoom}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  rooms: state.rooms.list,
  searchText: state.rooms.searchText,
  selectedIndex: state.rooms.selectedIndex,
});

const mapDispatchToProps = dispatch => ({
  openRoom: roomIndex => dispatch(openRoom(roomIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);