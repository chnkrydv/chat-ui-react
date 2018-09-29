import React from 'react';
import { connect } from 'react-redux';

import { UserTitlebar, SearchRoom, Rooms, AvailableRooms } from './';

const Sidebar = () => {
  return (
    <div className="menu">
      <UserTitlebar />
      <SearchRoom />
      <div>
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