import React from 'react';

import { Avatar, Options, AddChatRoom } from '../stateless';

const TitleBar = ({ name, modalOpen }) => (
  <div className="titlebar">
    <Avatar name={name} />
    {name}
    <AddChatRoom />
    <Options modalOpen={modalOpen}/>
  </div>
)

export default TitleBar;