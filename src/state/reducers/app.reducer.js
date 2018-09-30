import { setProfile, getProfile } from '../../services/offline/data';
import { connect, requestClientsList, sendMessage, } from '../../services/api/reqActions';

const initState = {
  loading: false,
  userProfileModalOpen: false,
  userId: '',
  userName: '',
  editingUserId: '',
  editingUserName: ''
};

const app = (state = initState, action) => {
  switch (action.type) {
    case 'INIT_APP':
      return { ...state, userProfileModalOpen: true, };
    case 'APP_INIT_DONE':
      return { ...state, userProfileModalOpen: true, };
    case 'UPDATE_SEARCH_TEXT':
      return { ...state, searchText: action.searchText };
    case 'UPDATE_USER_ID_TEXT':
      return { ...state, editingUserId: action.editingUserId };
    case 'UPDATE_USER_NAME_TEXT':
      return { ...state, editingUserName: action.editingUserName };
    case 'TOGGLE_PROFILE_MODAL':
      return { ...state, userProfileModalOpen: action.isOpen };
    case 'OPEN_ROOM':
      return { ...state, selectedRoomIndex: action.roomIndex };
    case 'ADD_ROOM':
      return { ...state, selectedRoomIndex: action.roomIndex };


    case 'CONNECT_TO_SERVER':
      setProfile(state.editingUserId, state.editingUserName);
      connect(state.editingUserId, state.editingUserName);
      const { id, name } = getProfile()
      return {
        ...state,
        userId: id,
        userName: name,
        userProfileModalOpen: false,
      };
    case 'SEND_MESSAGE':
      const message = {
        from: state.userId,
        to: action.to,
        text: action.message,
      };
      sendMessage(message);
      return { ...state };
    case 'REQUEST_CLIENTS_LIST':
      requestClientsList();
      return { ...state };


    case 'CLIENTS_LIST_RECIEVED':
      console.log(action.clients);
      return { ...state };
    case 'MESSAGE_RECIEVED':
      alert(action.message.text + ' from ' + action.message.from);
      return { ...state };



    default:
      return { ...state };
  }
}

export default app;