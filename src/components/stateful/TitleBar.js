import React from 'react';

import { Avatar, Options } from '../stateless';

const TitleBar = ({ name }) => (
  <div className="titlebar">
    <Avatar name={name} />
    {name}
    <Options />
  </div>
)

export default TitleBar;