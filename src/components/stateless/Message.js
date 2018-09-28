import React from 'react';
import Timestamp from './Timestamp';

const Message = ({ fromMe, text, time }) => (
  <div
    className={`message ${fromMe ? 'my-message' : ''}`}
  >
    {text}
    <Timestamp className="message__timestamp"/>
  </div>
);

export default Message;