import React, { Component } from 'react';

import { chats, send, recieve, createChatRoom, getChatRooms } from '../utils/data';
import { Menu, Content } from './stateful';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchText: '',
      chatIndex: 0,
      chats: chats,
      chatText: '',
    }
  }

  onSearchInputChange = (searchText) => {
    console.log(searchText);
    this.setState({searchText: searchText})
  }

  onChatSelect = (index) => {
    console.log(index);
    this.setState({chatIndex: index})
  }

  onSend = (friend, message) => {
    console.log(friend, message)
  }

  onTextInputChange = (updatedText) => {
    this.setState({ chatText: updatedText });
  }

  sendMessage = (message) => {
    console.log(message);
    const { chatIndex } = this.state;
    const to = getChatRooms()[chatIndex];
    send(message, to);
  }

  render() {
    const { chatIndex, chats, searchText, chatText } = this.state;
    const { friend, messages } = chats[chatIndex];

    return (
      <div className="App">
        <Menu
          searchText={searchText}
          chats={chats}
          onSearchInputChange={this.onSearchInputChange}
          selectedIndex={chatIndex}
          onChatSelect={this.onChatSelect}
        />
        <Content
          friend={friend}
          messages={messages}
          updatedText={chatText}
          sendMessage={this.sendMessage}
          onTextInputChange={this.onTextInputChange}
          onSend={this.onSend}
        />
      </div>
    );
  }
}

export default App;
