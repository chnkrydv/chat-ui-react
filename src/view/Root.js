import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles/root.css'
import { initApp } from '../state/actions';
import { Sidebar, Content, Profile } from './containers';

const Root = ({ initApp }) => {
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
});

Root.propTypes = {
  initApp: PropTypes.func,
}

Root.defaultProps = {
  initApp: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);



