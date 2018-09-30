// START: app state actions
const initApp = () => ({
  type: 'INIT_APP'
});

const initAppDone = () => ({
  type: 'INIT_APP_DONE'
});

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

const updateMessageText = (messageText) => ({
  type: 'UPDATE_MESSAGE_TEXT',
  messageText
});

const updateSearchText = (searchText) => ({
  type: 'UPDATE_SEARCH_TEXT',
  searchText
});

const updateUserIdText = (editingUserId) => ({
  type: 'UPDATE_USER_ID_TEXT',
  editingUserId
});

const updateUserNameText = (editingUserName) => ({
  type: 'UPDATE_USER_NAME_TEXT',
  editingUserName
});

const setProfileModalState = (isOpen) => ({
  type: 'TOGGLE_PROFILE_MODAL',
  isOpen
});
// END: app state actions



// START: server calling actions
const connectToServer = (userId, userName) => ({
  type: 'CONNECT_TO_SERVER',
  userId,
  userName
});

const requestClientsList = () => ({
  type: 'REQUEST_CLIENTS_LIST'
})

const sendMessage = (message, to) => ({
  type: 'SEND_MESSAGE',
  message,
  to
});
// END: server calling actions



// START: server events based actions
const messageRecieved = (message) => ({
  type: 'MESSAGE_RECIEVED',
  message,
});

const clientsListRecieved = (clients) => {
  console.log('clientsList action fired');
  return {
    type: 'CLIENTS_LIST_RECIEVED',
    clients
  }
};
// END: server events based actions




export {
  initApp,
  initAppDone,
  addRoom,
  deleteRoom,
  openRoom,
  search,
  updateMessageText,
  updateSearchText,
  updateUserIdText,
  updateUserNameText,
  setProfileModalState,

  connectToServer,
  requestClientsList,
  sendMessage,

  messageRecieved,
  clientsListRecieved,
}