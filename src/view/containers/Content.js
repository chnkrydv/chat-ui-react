import React from 'react';
import { connect } from 'react-redux';

import { ProfileTitle } from '../components';
import { Messages, Send } from './';

const Content = ({ roomName, roomOptionsModalOpen }) => {
  return (
    <div className="content">
      <ProfileTitle
        isUser={false}
        name={roomName}
        roomOptionsModalOpen={roomOptionsModalOpen} />
      <Messages />
      <Send />
    </div>
  );
}

const mapStateToProps = state => ({
  roomName: state.room.name,
  roomOptionsModalOpen: state.room.roomOptionsModalOpen,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);