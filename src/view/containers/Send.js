import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateMessageText, sendMessage } from '../../state/actions';

const Send = ({ userId, userName, roomId, messageText, updateMessageText, sendMessage }) => {
  const handleKeyPress = ({ key }) => key === 'Enter' && send();
  const onChange = ({ target }) => {
    if(!userId || !userName) return;
    updateMessageText(target.value);
  }
  const send = () => {
    if(!messageText || !roomId) return;
    const fromMe = !!Math.floor(Math.random() * 3);
    console.log('randomly setting fromMe: ', fromMe)  
    sendMessage(messageText, roomId, fromMe);
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
  userId: state.app.userId,
  userName: state.app.userName,
  roomId: state.room.id,
  messageText: state.room.messageText,
});

const mapDispatchToProps = dispatch => ({
  updateMessageText: message => dispatch(updateMessageText(message)),
  sendMessage: (message, to, fromMe) => dispatch(sendMessage(message, to, fromMe)),
});

Send.propTypes = {
  userId: PropTypes.string,
  userName: PropTypes.string,
  roomId: PropTypes.string,
  messageText: PropTypes.string,
  updateMessageText: PropTypes.func,
  sendMessage: PropTypes.func,
}

Send.defaultProps = {
  userId: '',
  userName: '',
  roomId: '',
  messageText: '',
  updateMessageText: () => {},
  sendMessage: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(Send);