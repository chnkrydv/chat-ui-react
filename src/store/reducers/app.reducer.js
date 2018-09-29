import { getProfile } from '../../services/data';

const initState = {
  loading: false,
  addRoomModalOpen: false,
  user: '',
  id: '',
  userOptionsModalOpen: false,
};

const app = (state = initState, action) => {
  switch (action.type) {
    case 'INIT_APP':
      const user = getProfile();
      console.log(user)
      return { 
        ...state,
        user: user.name,
        id: user.id,
      };
    case 'UPDATE_SEARCH_TEXT':
      return { ...state, searchText: action.searchText };
    case 'TOGGLE_ADD_ROOM_MODAL':
      return { ...state, addRoomModalOpen: action.isOpen };
    case 'OPEN_ROOM':
      return { ...state, selectedRoomIndex: action.roomIndex };
    case 'ADD_ROOM':
      return { ...state, selectedRoomIndex: action.roomIndex };
    default:
      return { ...state };
  }

  return state;
}

export default app;