import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contains } from '../../services/utils/stringer';
import { addRoom } from '../../state/actions'
import { RoomTile } from '../components';

const AvailableRooms = ({ rooms, searchText, addRoom }) => {
  const addAvailableToRooms = index => {
    const { id, name } = rooms[index];
    addRoom(id, name);
  }
  const roomsList = rooms.filter(room => room && contains(room.name, searchText));

  return (
    <div className="available">
      <div className="available__title">
        {rooms.length ? 'Online' : 'No one online'}
      </div>
      {roomsList.length
        ? roomsList.map(({id, name}, key) => (
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

AvailableRooms.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
  searchText: PropTypes.string,
  addRoom: PropTypes.func,
}

AvailableRooms.defaultProps = {
  rooms: [],
  searchText: '',
  addRoom: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailableRooms);