import React from 'react';

const CustomInput = ({ ariaLabel, type, placeholder, styleInput, onChange, value }) => {
  return (
    <input
      aria-label={ariaLabel}
      type={type}
      placeholder={placeholder}
      className={`${styleInput}`}
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomInput;