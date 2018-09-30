let user;

const User = function (id, name) {
  this.id = id;
  this.name = name;
}

User.prototype.updateProfile = function (id, name) {
  this.id = id;
  this.name = name;
  console.log('arguments from inside: ', id, name)
  console.log('user from inside: ', this)
}

User.prototype.getProfile = function () {
  return { id: this.id, name: this.name };
};



const friends = [
  {
    id: 'nitagr',
    name: 'Nitesh Agarwal',
  },
  {
    id: 'srkch',
    name: 'Saurabh Kumar',
  },
  {
    id: 'mannj',
    name: 'Mann Jain',
  },
  {
    id: 'sangrwl',
    name: 'Sanjay Agarwal',
  },
];



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

const getMockOnlineList = () => friends;

const setProfile = (id, name) => {
  user = new User(id, name);
}

const getProfile = () => user.getProfile();




export {
  createRoom,
  createMessage,
  getMockOnlineList,
  setProfile,
  getProfile,
}