import React from 'react';

import { initials } from '../../services/utils/stringer';

const Avatar = ({ name='' }) => {
  const shortName = initials(name).toUpperCase();

  return (
    <div className="avatar">
      {shortName}
    </div>
  );
}

export default Avatar;