import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);