import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contains } from '../../services/utils/stringer';
import { openRoom } from '../../state/actions'
import { RoomTile } from '../components';

const Rooms = ({ rooms, searchText, selectedIndex, openRoom }) => {
  const openRoomWithDetails = index => openRoom(index, rooms[index]);

  return (
    <div className="rooms">
      {
        !rooms.length
          ? (<div className="rooms__title">
            Add an online friend to chat
            </div>)
          : null
      }
      {rooms.length
        ? rooms.map(({ id, name, messages }, key) => (
          <RoomTile
            className={contains(name, searchText) ? '' : 'gone'}
            key={key}
            index={key}
            id={id}
            name={name}
            peekMessage={messages[messages.length - 1] || {}}
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

Rooms.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    messages: PropTypes.array,
  })),
  searchText: PropTypes.string,
  selectedIndex: PropTypes.number,
  openRoom: PropTypes.func,
}

Rooms.defaultProps = {
  rooms: [],
  searchText: '',
  selectedIndex: 0,
  openRoom: () => { },
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);