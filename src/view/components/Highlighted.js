import React from 'react';
import PropTypes from 'prop-types';

import { contains, indexOf } from '../../services/utils/stringer';

const Highlighted = ({ className, text, substring }) => {
  substring = contains(text, substring) ? substring : '';

  let first = '';
  let last = '';
  let index = indexOf(text, substring);

  first = text.slice(0, index);
  last = text.slice(index + substring.length);

  return (
    <span className={className}>
      {first}
      <ColoredText text={substring} />
      {last}
    </span>
  );
}

const ColoredText = ({ text }) => (
  <span className="colored bold">{text}</span>
);

Highlighted.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  substring: PropTypes.string,
}

Highlighted.defaultProps = {
  className: '',
  text: '',
  substring: '',
}

export default Highlighted;