import React from "react";
import { Link } from "react-router-dom";
import Image from "../../pages/Login/Image/Image";
import * as ROUTES from "../../constants/routes";

const User = ({ fullName, username }) => {
  const ProfileImageProps = {
    src: `/images/avatars/${username}.jpg`,
    alt: "img profile",
    imageWrapperStyle: "w-16 flex mr-3",
    imageStyle: "rounded-full",
  };

  return (
    <Link to={ROUTES.PROFILE} className="grid grid-cols-4 gap-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1">
        <Image {...ProfileImageProps}></Image>
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
};

export default User;