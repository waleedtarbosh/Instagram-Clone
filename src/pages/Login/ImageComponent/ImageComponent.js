import React from 'react';

const ImageComponent = ({ src, alt , styleImg}) => {
  return (
    <div  className={`${styleImg}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageComponent;