import config from './config';

const socket = window.io && window.io.connect(config.serverUrl);
const createPacket = (event, payload) => ({event, payload});



const emit = (packet) => {
  if(!socket) return console.log('socket js source file for client is not loaded');

  const { event, payload } = packet;
  socket.emit(event, payload);
}
const on = (event, callback) => {
  if(!socket) return console.log('socket js source file for client is not loaded');

  console.log('event: ', event);
  console.log('callback: ', callback);
  socket.on(event, callback);
};




const connect = (id, name) => {
  if(!id || !name) {
    alert('Name and Id of user should not be blank');
    return;
  }
  
  const packet = createPacket('online', { id, name });
  emit(packet);
}

const requestClientsList = () => {
  const packet = createPacket('needClientsList');
  emit(packet);
}

const sendMessage = (message) => {
  const packet = createPacket('message', message);
  emit(packet);
}





const onClientsList = callback => on('clientsList', callback);
const onMessage = callback => on('message', callback);




export {
  connect,
  requestClientsList,
  sendMessage,
  onClientsList,
  onMessage,
};