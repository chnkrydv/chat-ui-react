import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styles/root.css'
import { initApp } from '../store/actions';
import { Sidebar, Content } from './containers';

const Root = ({ initApp }) => {
  initApp();
  return (
    <div className="root">
      <Sidebar />
      <Content />
    </div>
  );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  initApp: () => dispatch(initApp()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);



