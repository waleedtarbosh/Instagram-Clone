import PropTypes from 'prop-types';

export default function FooterPosts({ caption, username }) {
  const usersComments  = [
    { id: 'username', value: username, className: 'mr-1 font-bold' },
    { id: 'caption', value: caption, className: 'italic' },
  ];

  return (
    <div className="p-4 pt-2 pb-1">
      {usersComments.map((element) => (
        <span key={element.id} className={element.className}>
          {element.value}
        </span>
      ))}
    </div>
  );
}

FooterPosts.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};