const initState = {
    addRoomModalOpen: false,
};

const app = (state = initState, action) => {
    switch (action.type) {
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