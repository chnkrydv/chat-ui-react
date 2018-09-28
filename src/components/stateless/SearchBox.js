import React from 'react';

const SearchBox = ({ onSearchInputChange }) => {
  const onChange = ({ target }) => onSearchInputChange(target.value);

  return (
    <div className="searchbox">
      <div className="searchbox__wrapper">
        <i className="material-icons searchbox__search">search</i>
        <input className="searchbox__input" type="text" onChange={onChange} />
        <i className="material-icons searchbox__close">close</i>
      </div>
    </div>
  );
}

export default SearchBox;