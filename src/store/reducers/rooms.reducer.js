import { createRoom, createMessage, getOnlineList } from '../../services/data';

const initState = {
  selectedIndex: -1,
  searchText: '',
  list: [],
  onlineList: getOnlineList(),
};

const rooms = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ROOM':
      return {
        ...state,
        selectedIndex: state.list.length,
        list: addAndUpdateRooms(state, action),
      };
    case 'OPEN_ROOM':
      return { ...state, selectedIndex: action.roomIndex };
    case 'MESSAGE_RECIEVED':
      return {
        ...state,
        unreadMessages: 3
      };
    case 'UPDATE_MESSAGE_TEXT':
      return { ...state, messageText: action.messageText };
    case 'SEND_MESSAGE':
      return {
        ...state,
        list: roomsAfterSendingMessage(state, action),
      };
    default:
      return { ...state };
  }
}

const addAndUpdateRooms = ({list}, {roomId, roomName})  => {
  return [...list, createRoom(roomId, roomName)]
}

const roomsAfterSendingMessage = ({list}, {message, to}) => {
  const newList = list.map(room => {
    if(room && room.id === to)
      room.messages = [...room.messages, createMessage(message, to)];

    return room;
  });

  return newList;
};

export default rooms;