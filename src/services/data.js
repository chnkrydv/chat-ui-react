const rooms = [
  {
    id: 'nitagr',
    name: 'Nitesh Agarwal',
    messages: [
      {
        fromMe: false,
        text: 'kya kar raha hai bhai, fee hai kya',
        time: Date.now() - 387812,
        seen: true,
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
    id: 'srkch',
    name: 'Saurabh Kumar',
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

const user = {
  name: 'Chandan Kumar',
  username: 'chnkr'
};

const friends = [
  {
    username: 'nitagr',
    name: 'Nitesh Agarwal',
  },
  {
    username: 'srkch',
    name: 'Saurabh Kumar',
  },
];

const app = {
  user: user,
  online: friends,
  rooms: rooms
}

const createRoom = (id, name) => ({
  id,
  name,
  messages: [],
});

const createMessage = (messageText, reciever) => ({
  fromMe: true,
  to: reciever,
  text: messageText,
  time: new Date(),
  seen: false,
});

const getOnlineList = () => friends;

const getProfile = () => user;

const getMessages = roomId => rooms.filter(room => room.id === roomId)[0];

export {
  rooms,
  createRoom,
  createMessage,
  getOnlineList,
  getProfile,
  getMessages,
}