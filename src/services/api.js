const config = {
  serverUrl: `${hostname}:${port}`,
  socketSourceUrl: `${hostname}:${port}/socket.io/socket.io.js`,
}

const hostname = 'http://localhost';
const port = 1989;
const packet = {
  event: '',
  payload: {}
};

const connect = () => {
}

const send = (socket, packet) => {
  const { event, payload } = packet;
  socket.emit(event, payload);
}

const recieve = (socket, event, callback) => {
  socket.on(event, callback);
}

const createChatRoom = () => {
}

const getChatRooms = () => {
}