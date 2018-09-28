const initState = {
    messages: [],
    messageText: '',
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
    }

    return state;
}

export default room;