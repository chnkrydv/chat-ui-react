import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ className, onSearchInputChange, searchText, clearText, placeholder }) => {
  const onChange = ({ target }) => onSearchInputChange(target.value);

  return (
    <div className={`searchbox ${className}`}>
      <div className="searchbox__wrapper">
        <input className="searchbox__input" type="text" placeholder={placeholder} value={searchText} onChange={onChange} />
        <i className="material-icons searchbox__close" onClick={clearText}>close</i>
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  searchText: PropTypes.string,
  onSearchInputChange: PropTypes.func,
  clearText: PropTypes.func,
}

SearchBox.defaultProps = {
  className: '',
  placeholder: '',
  searchText: '',
  onSearchInputChange: () => {},
  clearText: () => {},
}

export default SearchBox;