import React from 'react';

const SearchBox = ({ onSearchInputChange, searchText, clearText, placeholder }) => {
  const onChange = ({ target }) => onSearchInputChange(target.value);

  return (
    <div className="searchbox">
      <div className="searchbox__wrapper">
        <input className="searchbox__input" type="text" placeholder={placeholder} value={searchText} onChange={onChange} />
        <i className="material-icons searchbox__close" onClick={clearText}>close</i>
      </div>
    </div>
  );
}

export default SearchBox;