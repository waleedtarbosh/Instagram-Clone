import React from 'react';
import { Link } from 'react-router-dom';

const Paragraph = ({ textParagraph , textLink, styleParagraph , signUpLinkProps }) => {
  return (
    <p className={styleParagraph }>
      {textParagraph }{' '}
      <Link {...signUpLinkProps}>
        {textLink}
      </Link>
    </p>
  );
};

export default Paragraph;