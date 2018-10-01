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
    id: 'debsar',
    name: 'Debjeet Sarkar',
  },
  {
    id: 'sumkum',
    name: 'Sumit Kumar',
  },
  {
    id: 'sujven',
    name: 'Sujay Venaik',
  },
  {
    id: 'anksob',
    name: 'Ankit Sobti',
  },
  {
    id: 'privir',
    name: 'Priyal Viroja',
  },
  {
    id: 'deepat',
    name: 'Deepak Pathania',
  },
  {
    id: 'assin',
    name: 'Asha Singh',
  },
  {
    id: 'ramyn',
    name: 'Ramyashree N',
  },
  {
    id: 'harche',
    name: 'Harsha Chelle',
  },
  {
    id: 'erum',
    name: 'Erum',
  },
];



const createRoom = (id, name) => ({
  id,
  name,
  messages: [],
});

const createMessage = (messageText, reciever, fromMe) => ({
  fromMe: (typeof fromMe === 'undefined') ? true : fromMe,
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