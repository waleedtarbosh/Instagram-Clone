import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import AddComment from '../AddComment/AddComment';

const Comments = forwardRef(({ docId, comments: allComments, posted }, ref) => {
  const defaultCommentsVisible = 3;
  const [comments, setComments] = useState(allComments);
  const [commentsSlice, setCommentsSlice] = useState(defaultCommentsVisible);
  const showNextComments = () => setCommentsSlice(commentsSlice + defaultCommentsVisible);

  return (
    <>
      <div className="p-4 pt-1 pb-4">
        {comments.slice(0, commentsSlice).map((item) => (
          <p key={`${item.comment}-${item.username}`} className="mb-1">
            <Link to={`/`}>
              <span className="mr-1 font-bold">{item.username}</span>
            </Link>
            <span>{item.comment}</span>
          </p>
        ))}
        {comments.length >= defaultCommentsVisible && commentsSlice < comments.length && (
          <button
            className="text-sm text-gray-base mb-1 cursor-pointer focus:outline-none"
            type="button"
            onClick={showNextComments}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                showNextComments();
              }
            }}
          >
            View more comments
          </button>
        )}
        <p className="text-gray-base uppercase text-xs mt-2">
          {formatDistance(posted, new Date())} ago
        </p>
      </div>
      <AddComment
        docId={docId}
        comments={comments}
        setComments={setComments}
        commentInput={ref}
      />
    </>
  );
});

Comments.propTypes = {
  docId: PropTypes.string,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
};

export default Comments;