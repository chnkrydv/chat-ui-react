import React from 'react';
import { Messages, Send, RoomTitlebar } from './';

const Content = () => {
  return (
    <div className="content">
      <RoomTitlebar />
      <Messages />
      <Send />
    </div>
  );
}

export default Content;