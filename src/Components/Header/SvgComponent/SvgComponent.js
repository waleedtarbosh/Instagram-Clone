import React from 'react';

const SvgComponent = (props) => {
  const { className, xmlns, fill, viewBox, stroke } = props;

  return (
    <svg
      className={className}
      xmlns={xmlns}
      fill={fill}
      viewBox={viewBox}
      stroke={stroke}
    >
      {props.children}
    </svg>
  );
};

export default SvgComponent;