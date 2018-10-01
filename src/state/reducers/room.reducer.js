import { createMessage } from '../../services/offline/data';

const initState = {
  roomLoaded: false,
  id: '',
  name: '',
  roomOptionsModalOpen: false,
  messages: [],
  messageText: '',
};

const room = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ROOM':
      return {
        ...state,
        id: action.roomId,
        name: action.roomName,
        messages: [],
      };
    case 'OPEN_ROOM':
      const room = action.room;
      return {
        ...state,
        id: room && room.roomId,
        name: room && room.roomName,
        messages: room && room.messages
      };
    case 'UPDATE_MESSAGE_TEXT':
      return { ...state, messageText: action.messageText };
    case 'SEND_MESSAGE':
      return {
        ...state,
        messageText: '',
        messages: updatedMessages(state, action),
      };
    default:
      return state;
  }
};

const updatedMessages = ({ messages }, { message, to, fromMe }) => {
  const newMessages = [...messages, createMessage(message, to, fromMe)];
  console.log(newMessages);
  return newMessages;
}

export default room;