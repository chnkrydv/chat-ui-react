import { combineReducers } from 'redux';

import app from './app.reducer';
import room from './room.reducer';
import rooms from './rooms.reducer';

export default combineReducers({
  app,
  room,
  rooms,
});