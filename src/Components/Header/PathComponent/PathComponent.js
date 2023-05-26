import React from 'react';

const PathComponent = ({ strokeLinecap, strokeLinejoin, strokeWidth, d,fillRule, clipRule }) => {
  return (
    <path
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      strokeWidth={strokeWidth}
      d={d}
      fillRule={fillRule} 
      clipRule={clipRule}
    />
  );
};

export default PathComponent;