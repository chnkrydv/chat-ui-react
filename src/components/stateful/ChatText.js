import React from 'react';

const ChatText = ({ updatedText, onTextInputChange, sendMessage }) => {
  const onChange = ({ target }) => onTextInputChange(target.value);
  const handleKeyPress = ({ key }) => key === 'Enter' && send();
  const send = () => {
    if(!updatedText) return;

    sendMessage(updatedText);
    onTextInputChange('');
  }

  return (
    <div className="chat-text">
      <input
        className="chat-text__input"
        onChange={onChange}
        value={updatedText}
        onKeyPress={handleKeyPress}
        placeholder="Type a message"/>
      <span className="chat-text__send" onClick={send}>
        <i className="material-icons chat-text__icon">send</i>
      </span>
    </div>
  );
}

export default ChatText;