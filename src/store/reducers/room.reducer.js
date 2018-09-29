import { createMessage } from '../../services/data';

const initState = {
    id: 'srkch',
    name: 'Saurabh Kumar Chutiya',
    roomOptionsModalOpen: false,
    messages: [],
    messageText: 'just typing...',
};

const room = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGE_TEXT':
            return { ...state, messageText: action.messageText };
        case 'SEND_MESSAGE':
            return { 
                ...state,
                messageText: '',
                messages: updatedMessages(state, action),
            };
    }

    return state;
};

const getUreadCount = action => 2;

const updatedMessages = ({messages}, {message, to}) => {
    return [...messages, createMessage(message, to)];
}

export default room;