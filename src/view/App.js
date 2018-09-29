import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import './styles/app.css'
import rootReducer from '../store/reducers';
import { Sidebar, Content } from './containers';


const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;



