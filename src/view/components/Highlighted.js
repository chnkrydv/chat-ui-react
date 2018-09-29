import React from 'react';

import { contains, indexOf } from '../../services/stringer';

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

export default Highlighted;