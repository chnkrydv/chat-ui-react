import React from 'react';
import { connect } from 'react-redux';

import { openRoom } from '../../store/actions'
import { Room } from '../components';

const Rooms = ({ rooms, searchText, selectedIndex, openRoom }) => {
  const openRoomWithDetails = index => openRoom(index, rooms[index]);

  return (
    <div>
      {rooms.length
        ? rooms.map(({id, name, messages}, key) => (
          <Room
            key={key}
            index={key}
            id={id}
            name={name}
            lastMessage={messages[messages.length - 1]}
            searchText={searchText}
            selected={selectedIndex === key}
            onSelect={openRoomWithDetails}
          />
        ))
        : null
      }
    </div>
  );
}

const mapStateToProps = state => ({
  rooms: state.rooms.list,
  searchText: state.rooms.searchText,
  selectedIndex: state.rooms.selectedIndex,
});

const mapDispatchToProps = dispatch => ({
  openRoom: (roomIndex, room) => dispatch(openRoom(roomIndex, room)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);