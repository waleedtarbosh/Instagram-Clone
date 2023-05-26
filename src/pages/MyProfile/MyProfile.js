import React from "react";
import Profile from "../Profile/Profile";

const MyProfile = () => {
  const followerCount = 1;

  const profileImageProps = {
    src: "/images/avatars/karl.jpg",
    alt: "karl profile picture",
    imageWrapperStyle: "h-40 w-40",
    imageStyle: "rounded-full"
  };

  const dataProfile = [
    { id: "photos", label: "photos", value: 0 },
    { id: "followers", label: "followers", value: followerCount },
    { id: "following", label: "following", value: 2 }
  ];

  return (
    <Profile
      profileImageProps={profileImageProps}
      userName="karl"
      countsData={dataProfile}
      bioText="karl Hadwen"
      photos={[]}
      activeBtnFollow={false}
      isFollowingProfile={false}
      handleToggleFollow={() => {}}
    />
  );
};

export default MyProfile;