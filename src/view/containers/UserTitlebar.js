import React from 'react';
import { connect } from 'react-redux';

import { setProfileModalState } from '../../state/actions';
import { ProfileTitle } from '../components';

const UserTitlebar = ({ userName, setProfileModalState }) => {
  return (
    <ProfileTitle
      name={userName}
      setProfileModalState={setProfileModalState}
    />
  );
}

const mapStateToProps = state => ({
  userName: state.app.userName,
});

const mapDispatchToProps = dispatch => ({
  setProfileModalState: isOpen => dispatch(setProfileModalState(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTitlebar);