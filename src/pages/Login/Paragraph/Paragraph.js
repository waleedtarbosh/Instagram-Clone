import React from 'react';
import { Link } from 'react-router-dom';

const Paragraph = ({ text, linkText, textStyle, linkProps }) => {
  const concatenatedText = `${text}  `;

  return (
    <p className={textStyle}>
      {concatenatedText}
      <Link {...linkProps}>
        {linkText}
      </Link>
    </p>
  );
};

export default Paragraph;