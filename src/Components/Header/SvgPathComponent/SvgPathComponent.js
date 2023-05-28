import React from 'react';
import PropTypes from 'prop-types';

const SvgPathComponent = ({ svgProps, pathProps, onClick }) => {
  return (
    <svg {...svgProps} onClick={onClick}>
      <path {...pathProps} />
    </svg>
  );
};

SvgPathComponent.propTypes = {
  svgProps: PropTypes.object.isRequired,
  pathProps: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default SvgPathComponent;