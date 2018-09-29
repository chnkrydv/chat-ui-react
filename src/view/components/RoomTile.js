import React, { Fragment } from 'react';

import { Highlighted, Avatar, Timestamp, PeekMessage } from '.';

const RoomTile = ({ index, name, peekLastMessage=true, peekMessage = {}, searchText, selected, onSelect }) => {
  const select = () => onSelect(index);
  const { text, time } = peekMessage;

  return (
    <div
      className={`room ${selected ? 'room__selected' : ''}`}
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
)

export default RoomTile;