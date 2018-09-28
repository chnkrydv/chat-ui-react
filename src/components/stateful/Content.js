import React from 'react';

import { TitleBar, ChatWindow, ChatText } from './';

const Content = ({ friend, messages, updatedText, onTextInputChange, sendMessage }) => (
  <div className="content">
    <TitleBar
      name={friend} />
    <ChatWindow
      messages={messages}/>
    <ChatText
      updatedText={updatedText}
      sendMessage={sendMessage}
      onTextInputChange={onTextInputChange}/>
  </div>
)

export default Content;