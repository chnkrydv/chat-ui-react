import React from 'react';

import { TitleBar, Chat } from './';
import { SearchBox } from '../stateless';

const Menu = ({ chats, onSearchInputChange, selectedIndex, onChatSelect, searchText, modalOpen }) => {
  const selectChat = index => onChatSelect(index);

  return (
    <div className="menu">
      <TitleBar name="Chandan Kumar" modalOpen={modalOpen}/>
      <SearchBox
        onSearchInputChange={onSearchInputChange}
      />
      <div>
        {chats.map(({ friend, messages }, key) => (
          <Chat
            key={key}
            index={key}
            friend={friend}
            lastMessage={messages[0]}
            searchText={searchText}
            selected={selectedIndex === key}
            onSelect={selectChat}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;