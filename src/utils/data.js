const chats = [
  {
    friend: 'Nitesh Agarwal',
    messages: [
      {
        fromMe: false,
        text: 'kya kar raha hai bhai, fee hai kya',
        time: Date.now() - 387812,
      },
      {
        fromMe: true,
        text: 'kuch nahi',
        time: Date.now() - 487812,
        seen: true,
      },
      {
        fromMe: false,
        text: 'bataa na free hai ya nahi',
        time: Date.now() - 587812,
      },
      {
        fromMe: true,
        text: 'nahi bhai assignment karna hai aaj. nahi bhai assignment karna hai aaj. nahi bhai assignment karna hai aaj. nahi bhai assignment karna hai aaj. nahi bhai assignment karna hai aaj. nahi bhai assignment karna hai aaj. nahi bhai assignment karna hai aaj. nahi bhai assignment karna hai aaj. nahi bhai assignment karna hai aaj. ',
        time: Date.now() - 587812,
      },
    ]
  },
  {
    friend: 'Saurabh Kumar',
    messages: [
      {
        fromMe: false,
        text: 'abey sun na, wo broker ko phone kar dena na thoda',
        time: Date.now() - 387812,
      },
      {
        fromMe: true,
        text: 'bhakk nahi karenge, busy hain',
        time: Date.now() - 487812,
        seen: false,
      },
      {
        fromMe: false,
        text: 'kar dena na, kitna hi der lagega',
        time: Date.now() - 587812,
      },
      {
        fromMe: true,
        text: 'theek hai',
        time: Date.now() - 487812,
        seen: false,
      },
      {
        fromMe: true,
        text: 'hum reminder laga ke rakh lenge',
        time: Date.now() - 487812,
        seen: false,
      },
    ]
  }
];

const hostname = 'http://localhost';
const port = 1989;
const packet = {
  event: '',
  payload: {}
};
const config = {
  serverUrl: `${hostname}:${port}`,
  socketSourceUrl: `${hostname}:${port}/socket.io/socket.io.js`,
}

const connect = () => {
}

const send = (socket, packet) => {
  const { event, payload } = packet;
  socket.emit(event, payload);
}

const recieve = (socket, event, callback) => {
  socket.on(event, callback);
}

const createChatRoom = () => {
}

const getChatRooms = () => {
}

export {
  chats,
  connect,
  send,
  recieve,
  createChatRoom,
  getChatRooms
}