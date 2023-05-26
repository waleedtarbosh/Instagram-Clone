import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../../pages/Login/Image/Image';
import PropTypes from 'prop-types';

const profileImageProps = {
  src: '/images/avatars/raphael.jpg',
  alt: 'img profile',
  imageWrapperStyle: 'h-8 w-8 flex mr-3',
  imageStyle: 'rounded-full',
};

const HeaderPosts = ({ username }) => {
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/${username}`} className="flex items-center">
          <Image {...profileImageProps} />
          <p className="font-bold">{username}</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderPosts;

HeaderPosts.propTypes = {
  username: PropTypes.string.isRequired,
};