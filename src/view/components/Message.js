import React from 'react';
import PropTypes from 'prop-types';

import { Timestamp } from './';

const Message = ({ className, fromMe, text, time }) => (
  <div
  className={`message ${fromMe ? 'my-message' : ''} ${className}`}
  >
    {text}
    <Timestamp className="message__timestamp" time={time}/>
  </div>
);

Message.propTypes = {
  className: PropTypes.string,
  fromMe: PropTypes.bool,
  text: PropTypes.string,
  time: PropTypes.instanceOf(Date),
}

Message.defaultProps = {
  className: '',
  fromMe: true,
  text: '',
  time: new Date(),
}

export default Message;