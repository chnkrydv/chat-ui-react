import React from 'react';
import { connect } from 'react-redux';

import { updateSearchText } from '../../store/actions';
import { SearchBox } from '../components';

const SearchRoom = ({ updateSearchText }) => (
  <SearchBox
    onSearchInputChange={updateSearchText}
  />
);

const mapStateToProps = state => ({
  roomsSearchText: state.rooms.searchText,
});

const mapDispatchToProps = dispatch => ({
  updateSearchText: text => dispatch(updateSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchRoom);