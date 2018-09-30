import React from 'react';
import { connect } from 'react-redux';

import { addRoom } from '../../state/actions'
import { RoomTile } from '../components';

const Rooms = ({ rooms, searchText, selectedIndex, addRoom }) => {
  const addAvailableToRooms = index => {
    const { id, name } = rooms[index];
    addRoom(id, name);
  }

  return (
    <div className="available">
      <div className="available__title">
        {rooms.length ? 'Online' : 'No one online'}
      </div>
      {rooms.length
        ? rooms.map(({id, name}, key) => (
          <RoomTile
            key={key}
            index={key}
            id={id}
            name={name}
            searchText={searchText}
            peekLastMessage={false}
            onSelect={addAvailableToRooms}
          />
        ))
        : null
      }
    </div>
  );
}

const mapStateToProps = state => ({
  rooms: state.rooms.availableList,
  searchText: state.rooms.searchText,
  selectedIndex: state.rooms.selectedIndex,
});

const mapDispatchToProps = dispatch => ({
  addRoom: (roomIndex, room) => dispatch(addRoom(roomIndex, room)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);