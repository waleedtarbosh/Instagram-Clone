import { Link } from 'react-router-dom';
import Image from '../../pages/Login/Image/Image';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
  getUserByUserId
} from '../../services/firebase';
export default function SuggestedProfile({profileDocId,username,profileId,userId,loggedInUserDocId}) {
  const ProfileImageProps = {
    src: `/images/avatars/${username}.jpg`,
    alt: "img profile",
    imageWrapperStyle: "w-8 flex mr-3",
    imageStyle: "rounded-full"
  };
  const [followed, setFollowed] = useState(false);
  async function handleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
    
    
  }
  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <Image {...ProfileImageProps} />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
      ) : null;
}
SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired
};