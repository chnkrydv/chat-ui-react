const initState = {
    selectedIndex: 0,
    searchText: '',
    list: [],
};

const rooms = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_ROOM':
            return { ...state, selectedRoomIndex: action.roomIndex };
        case 'MESSAGE_RECIEVED':
            return {
                ...state,
                unreadMessages: 3
            };
        case 'UPDATE_MESSAGE_TEXT':
            return { ...state, messageText: action.messageText };
        case 'SEND_MESSAGE':
            return { ...state, messageText: '' };
        default:
            return { ...state };
    }

    return state;
}

const getMessages = roomIndex => rooms[roomIndex].messages;

export default rooms;