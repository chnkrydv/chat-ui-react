import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Highlighted, Avatar, Timestamp, PeekMessage } from '.';

const RoomTile = ({ className, index, name, peekLastMessage, peekMessage, searchText, selected, onSelect }) => {
  const select = () => onSelect(index);

  return (
    <div
      className={`room ${selected ? 'room__selected' : ''} ${className}`}
      onClick={select}
    >
      <Avatar name={name} />
      <div className="room__info">
        <Highlighted className="room__info__name" text={name} substring={searchText} />
        {
          peekLastMessage
            ? (<LastMessageInfo peekMessage={peekMessage}/>)
            : null
        }
      </div>
    </div>
  );
}

const LastMessageInfo = ({peekMessage}) => (
  <Fragment>
    <Timestamp className="room__info__timestamp" time={peekMessage.time} />
    <PeekMessage className="room__info__peek" peekMessage={peekMessage.text} />
  </Fragment>
);

RoomTile.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string,
  peekLastMessage: PropTypes.bool,
  peekMessage: PropTypes.shape({
    text: PropTypes.string,
    time: PropTypes.instanceOf(Date)
  }),
  searchText: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
}

RoomTile.defaultProps = {
  className: '',
  index: 0,
  name: '',
  peekLastMessage: true,
  peekMessage: {
    text: '',
    time: null
  },
  searchText: '',
  selected: false,
  onSelect: () => {},
}

export default RoomTile;