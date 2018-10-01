import React from 'react';
import PropTypes from 'prop-types';
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

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    fromeMe: PropTypes.bool,
    to: PropTypes.string,
    text: PropTypes.string,
  }))
}

Messages.defaultProps = {
  messages: []
}

export default connect(mapStateToProps)(Messages);