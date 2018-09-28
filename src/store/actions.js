const sendMessage = (message, to) => ({
    type: 'SEND_MESSAGE',
    message,
    to
});

const messageRecieved = (message, from) => ({
    type: 'MESSAGE_RECIEVED',
    message,
    from
});

const addRoom = (roomName) => ({
    type: 'ADD_ROOM',
    roomName
});

const deleteRoom = (roomName) => ({
    type: 'DELETE_ROOM',
    roomName
});

const openRoom = (roomName) => ({
    type: 'OPEN_ROOM',
    roomName
});

const search = (searchText) => ({
    type: 'SEARCH',
    searchText
})

export {
    sendMessage,
    messageRecieved,
    addRoom,
    deleteRoom,
    openRoom,
    search
}