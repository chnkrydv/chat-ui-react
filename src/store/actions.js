const addRoom = (roomId, roomName) => ({
  type: 'ADD_ROOM',
  roomId,
  roomName
});

const openRoom = (roomIndex, room) => ({
  type: 'OPEN_ROOM',
  roomIndex,
  room
});

const deleteRoom = (roomIndex) => ({
  type: 'DELETE_ROOM',
  roomIndex
});

const search = (searchText) => ({
  type: 'SEARCH',
  searchText
});

const connectToServer = () => ({
  type: 'CONNECT_TO_SERVER'
});

const updateMessageText = (messageText) => ({
  type: 'UPDATE_MESSAGE_TEXT',
  messageText
});

const sendMessage = (message, to) => ({
  type: 'SEND_MESSAGE',
  message,
  to
});

const messageRecieved = (message, from) => ({
  type: 'MESSAGE_RECIEVED',
  message,
  from
});

const updateSearchText = (searchText) => ({
  type: 'UPDATE_SEARCH_TEXT',
  searchText
});

const toggleAddRoomModal = (isOpen) => ({
  type: 'TOGGLE_ADD_ROOM_MODAL',
  isOpen
});

const initApp = () => ({
  type: 'INIT_APP'
});

export {
  sendMessage,
  messageRecieved,
  addRoom,
  deleteRoom,
  openRoom,
  search,
  connectToServer,
  updateMessageText,
  updateSearchText,
  toggleAddRoomModal,
  initApp,
}