import React from 'react';
import PropTypes from 'prop-types';

export default function PostImages({ src, alt }) {
  return <img src={src} alt={alt} />;
}

PostImages.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};