import React from 'react';
import { UserTitlebar, SearchRoom, Rooms, AvailableRooms } from './';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <UserTitlebar />
      <SearchRoom />
      <div className="sidebar__rooms">
        <Rooms />
        <AvailableRooms />
      </div>
    </div>
  );
}

export default Sidebar;