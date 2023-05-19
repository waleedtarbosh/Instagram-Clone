import React from 'react';

const PathComponent = ({ strokeLinecap, strokeLinejoin, strokeWidth, d }) => {
  return (
    <path
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeWidth={strokeWidth}
      d={d}
    />
  );
};

export default PathComponent;