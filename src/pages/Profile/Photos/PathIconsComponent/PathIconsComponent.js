import React from 'react';

const PathIconsComponent = ({ fillRule, d, clipRule}) => {
  return (
    <path
    fillRule={fillRule}
    d={d}
    clipRule={clipRule}
    />
  );
};

export default PathIconsComponent;