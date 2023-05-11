import React from 'react';

const Image = ({ src, alt , styleImg}) => {
  return (
    <div  className={`${styleImg}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;