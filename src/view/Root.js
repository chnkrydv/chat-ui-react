import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/root.css'
import { onClientsList, onMessage, requestClientsList } from '../services/api/reqActions';
import { initApp, clientsListRecieved, messageRecieved } from '../state/actions';
import { Sidebar, Content, Profile } from './containers';

const Root = ({ initApp, clientsListRecieved, messageRecieved }) => {
  requestClientsList();
  onClientsList(clientsListRecieved);
  onMessage(messageRecieved);
  initApp();
  return (
    <div className="root">
      <Sidebar />
      <Content />
      <Profile />
    </div>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  initApp: () => dispatch(initApp()),
  clientsListRecieved: clients => dispatch(onClientsList(clients)),
  messageRecieved: message => dispatch(onMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);



