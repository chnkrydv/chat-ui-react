import React from 'react';
import { connect } from 'react-redux';

import { updateMessageText, sendMessage } from '../../store/actions';

const Send = ({ roomId, messageText, updateMessageText, sendMessage }) => {
  const onChange = ({ target }) => updateMessageText(target.value);
  const handleKeyPress = ({ key }) => key === 'Enter' && send();
  const send = () => {
    if(!messageText) return;

    sendMessage(messageText, roomId);
    console.log('sent msg to: ', roomId)
    updateMessageText('');
  }

  return (
    <div className="chat-text">
      <input
        className="chat-text__input"
        onChange={onChange}
        value={messageText}
        onKeyPress={handleKeyPress}
        placeholder="Type a message"/>
      <span className="chat-text__send" onClick={send}>
        <i className="material-icons chat-text__icon">send</i>
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  roomId: state.room.id,
  messageText: state.room.messageText,
});

const mapDispatchToProps = dispatch => ({
  updateMessageText: message => dispatch(updateMessageText(message)),
  sendMessage: (message, to) => dispatch(sendMessage(message, to)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Send);