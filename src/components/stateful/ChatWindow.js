import React from 'react';

import { Message } from '../stateless';

const Chat = ({ messages }) => (
  <div className="chat-window">
    <div className="chat-window__messages">
      {messages.map((message, key) => (
        <Message
          key={key}
          fromMe={message.fromMe}
          text={message.text}
          time={message.time}
        />
      ))}
    </div>
  </div>
)

export default Chat;