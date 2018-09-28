const initState = {
    selectedRoomIndex: 0,
    searchText: '',
};

const room = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_ROOM':
            return { ...state, selectedRoomIndex: action.roomIndex };
        case 'MESSAGE_RECIEVED':
            return {
                ...state,
                unreadMessages: getUreadCount(action)
            };
        case 'UPDATE_MESSAGE_TEXT':
            return { ...state, messageText: action.messageText };
        case 'SEND_MESSAGE':
            return { ...state, messageText: '' };
        case '':
            return { ...state, };
        case '':
            return { ...state, };
        case '':
            return { ...state, };
        case '':
            return { ...state, };
        default:
            return { ...state };
    }

    return state;
}

export default room;