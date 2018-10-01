import config from './config';     // Not implemented
     // Not implemented
const socket = window.io && window.io.connect(config.serverUrl);     // Not implemented
const createPacket = (event, payload) => ({event, payload});     // Not implemented
     // Not implemented
     // Not implemented
     // Not implemented
const emit = (packet) => {     // Not implemented
  if(!socket) return console.log('socket js source file for client is not loaded');     // Not implemented
     // Not implemented
  const { event, payload } = packet;     // Not implemented
  socket.emit(event, payload);     // Not implemented
}     // Not implemented
const on = (event, callback) => {     // Not implemented
  if(!socket) return console.log('socket js source file for client is not loaded');     // Not implemented
     // Not implemented
  console.log('event: ', event);     // Not implemented
  console.log('callback: ', callback);     // Not implemented
  socket.on(event, callback);     // Not implemented
};     // Not implemented
     // Not implemented
     // Not implemented
     // Not implemented
     // Not implemented
const connect = (id, name) => {     // Not implemented
  if(!id || !name) {     // Not implemented
    alert('Name and Id of user should not be blank');     // Not implemented
    return;     // Not implemented
  }     // Not implemented
       // Not implemented
  const packet = createPacket('online', { id, name });     // Not implemented
  emit(packet);     // Not implemented
}     // Not implemented
     // Not implemented
const requestClientsList = () => {     // Not implemented
  const packet = createPacket('needClientsList');     // Not implemented
  emit(packet);     // Not implemented
}     // Not implemented
     // Not implemented
const sendMessage = (message) => {     // Not implemented
  const packet = createPacket('message', message);     // Not implemented
  emit(packet);     // Not implemented
}     // Not implemented
     // Not implemented
     // Not implemented
     // Not implemented
     // Not implemented
     // Not implemented
const onClientsList = callback => on('clientsList', callback);     // Not implemented
const onMessage = callback => on('message', callback);     // Not implemented
     // Not implemented
     // Not implemented
     // Not implemented
     // Not implemented
export {     // Not implemented
  connect,     // Not implemented
  requestClientsList,     // Not implemented
  sendMessage,     // Not implemented
  onClientsList,     // Not implemented
  onMessage,     // Not implemented
};     // Not implemented