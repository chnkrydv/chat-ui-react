import { createRoom, createMessage, getMockOnlineList } from '../../services/offline/data';

const initState = {
  selectedIndex: -1,
  searchText: '',
  list: [],
  availableList: getMockOnlineList(),
};

const rooms = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ROOM':
      const { newList, newAvailableList } = addAndUpdateRooms(state, action);
      return {
        ...state,
        selectedIndex: 0,
        list: newList,
        availableList: newAvailableList,
      };
    case 'OPEN_ROOM':
      return { ...state, selectedIndex: action.roomIndex };
    case 'MESSAGE_RECIEVED':
      return {
        ...state,
        unreadMessages: 3
      };
    case 'UPDATE_SEARCH_TEXT':
      console.log(action.searchText)
      return { ...state, searchText: action.searchText };
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

const addAndUpdateRooms = ({ list, availableList }, { roomId, roomName }) => {
  const newAvailableList = availableList.filter(room => (room.id !== roomId));
  const newList = [createRoom(roomId, roomName), ...list];

  return { newList, newAvailableList };
}

const roomsAfterSendingMessage = ({ list }, { message, to }) => {
  const newList = list.map(room => {
    if (room && room.id === to)
      room.messages = [...room.messages, createMessage(message, to)];

    return room;
  });

  return newList;
};

export default rooms;