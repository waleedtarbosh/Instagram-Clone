import React from 'react';

const CustomButton = ({ disabled, type, styleButton, content }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={styleButton}
    >
      {content}
    </button>
  );
};

export default CustomButton;