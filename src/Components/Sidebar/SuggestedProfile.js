import { Link } from 'react-router-dom';
import Image from '../../pages/Login/Image/Image';

export default function SuggestedProfile({ profile }) {
  const ProfileImageProps = {
    src: `/images/avatars/${profile.username}.jpg`,
    alt: "img profile",
    imageWrapperStyle: "w-8 flex mr-3",
    imageStyle: "rounded-full"
  };

  return (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <Image {...ProfileImageProps} />
        <Link to={`/p/${profile.username}`}>
          <p className="font-bold text-sm">{profile.username}</p>
        </Link>
      </div>
      <button className="text-xs font-bold text-blue-medium" type="button">
        Follow
      </button>
    </div>
  );
}
