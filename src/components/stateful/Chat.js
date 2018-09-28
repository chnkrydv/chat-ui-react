import React from 'react';

import { Highlighted, Avatar, Timestamp, PeekMessage } from '../stateless';

const Chat = ({ index, friend, lastMessage, searchText, selected, onSelect }) => {
  const select = () => onSelect(index);

  return (
    <div
      className={`chat ${selected? 'chat__selected' : ''}`}
      onClick={select}
    >
      <Avatar name={friend} />
      <div className="chat__info">
        <Highlighted className="chat__info__name" text={friend} substring={searchText} />
        <Timestamp className="chat__info__timestamp" time={lastMessage.time} />
        <PeekMessage className="chat__info__peek" lastMessage={lastMessage} />
      </div>
    </div>
  );
}

export default Chat;