import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import HeaderPosts from './HeaderPosts/HeaderPosts';
import PostImages from './ImagesPosts/ImagesPosts';
import ActionPosts from './ActionPosts/ActionPosts';
import FooterPosts from './FooterPosts/FooterPosts';
import Comments from './Comments/Comments';

const Posts = ({ content }) => {
  const handleFocus = () => {
    commentInput.current.focus();
  };

  const commentInput = useRef(null);

  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary">
      <HeaderPosts username={content.username} />
      <PostImages src={content.imageSrc} caption={content.alt} />
      <ActionPosts
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <FooterPosts caption={content.caption} username={content.username} />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
};

Posts.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }).isRequired,
};

export default Posts;