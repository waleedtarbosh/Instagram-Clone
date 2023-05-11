import React from 'react';

const Image = ({ src, alt , imageWrapperStyle}) => {
  return (
    <div  className={`${imageWrapperStyle}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;