import React from 'react';
import { connect } from 'react-redux';


import { Message } from '../components';

const Messages = ({ messages, }) => (
  <div className="messages">
    <div className="messages__wrapper">
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
);

const mapStateToProps = state => ({
  messages: state.room.messages,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Messages);