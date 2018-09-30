import React, { Component } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from './state/reducers';
import Root from './view/Root';


const store = createStore(rootReducer, applyMiddleware(logger));

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default AppWithStore;