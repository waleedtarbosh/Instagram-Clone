import React from 'react';

const CustomButton = ({ disabled, type, styleButton, children }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={styleButton}
    >
      {children}
    </button>
  );
};

export default CustomButton;