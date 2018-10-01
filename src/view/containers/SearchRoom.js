import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateSearchText } from '../../state/actions';
import { SearchBox } from '../components';

const SearchRoom = ({ roomsSearchText, updateSearchText }) => {
  const clearText = () => updateSearchText('');

  return (
    <SearchBox
      placeholder="Search a friend or room.."
      searchText={roomsSearchText}
      onSearchInputChange={updateSearchText}
      clearText={clearText}
    />
  );
}

const mapStateToProps = state => ({
  roomsSearchText: state.rooms.searchText,
});

const mapDispatchToProps = dispatch => ({
  updateSearchText: text => dispatch(updateSearchText(text)),
});

SearchRoom.propTypes = {
  roomsSearchText: PropTypes.string,
  updateSearchText: PropTypes.func,
}

SearchRoom.defaultProps = {
  roomsSearchText: '',
  updateSearchText: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchRoom);