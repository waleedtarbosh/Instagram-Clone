import PropTypes from 'prop-types';

export default function FooterPosts({ caption, username }) {
  return (
    <div className="p-4 pt-2 pb-1">
      <span className="mr-1 font-bold">{username}</span>
      <span className="italic">{caption}</span>
    </div>
  );
}

FooterPosts.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};