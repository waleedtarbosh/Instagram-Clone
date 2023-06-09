import React from 'react';

const Image = ({ src, alt , imageWrapperStyle, imageStyle }) => {
  const doesImageStyleExist = () => imageStyle;

  return (
    <div  className={`${imageWrapperStyle}`}>
      <img src={src} alt={alt} className={doesImageStyleExist()} />
    </div>
  );
};

export default Image;