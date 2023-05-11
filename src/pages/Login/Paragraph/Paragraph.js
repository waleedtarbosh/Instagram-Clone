import React from 'react';
import { Link } from 'react-router-dom';

const Paragraph = ({ textParagraph, textLink, styleParagraph, signUpLinkProps }) => {
  const concatenatedText = `${textParagraph} ${' '}`;

  return (
    <p className={styleParagraph}>
      {concatenatedText}
      <Link {...signUpLinkProps}>
        {textLink}
      </Link>
    </p>
  );
};

export default Paragraph;