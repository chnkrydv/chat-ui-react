import React from 'react';

import { Highlighted, Avatar, Timestamp, PeekMessage } from '../components';

const Room = ({ index, name, lastMessage, searchText, selected, onSelect }) => {
  const select = () => onSelect(index);

  return (
    <div
      className={`room ${selected? 'room__selected' : ''}`}
      onClick={select}
    >
      <Avatar name={name} />
      <div className="room__info">
        <Highlighted className="room__info__name" text={name} substring={searchText} />
        <Timestamp className="room__info__timestamp" time={lastMessage.time} />
        <PeekMessage className="room__info__peek" lastMessage={lastMessage} />
      </div>
    </div>
  );
}

export default Room;