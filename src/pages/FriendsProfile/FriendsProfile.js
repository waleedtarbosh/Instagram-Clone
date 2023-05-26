import React, { useState } from "react";
import Profile from "../Profile/Profile";

const FriendsProfile = () => {
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const followerCount = 0;
  const activeBtnFollow = true;

  const profileImageProps = {
    src: "/images/avatars/raphael.jpg",
    alt: "raphael profile picture",
    imageWrapperStyle: "h-40 w-40",
    imageStyle: "rounded-full"
  };

  const dataProfile = [
    { id: "photos", label: "photos", value: 5 },
    { id: "followers", label: "followers", value: followerCount },
    { id: "following", label: "following", value: 0 }
  ];

  const photos = [
    {
      id: 1,
      src: "images/users/raphael/1.jpg",
      alt: "Image 1",
      style: { width: "100%", height: "auto" },
    },
    {
      id: 2,
      src: "images/users/raphael/2.jpg",
      alt: "Image 2",
      style: { width: "100%", height: "auto" },
    },
    {
      id: 3,
      src: "images/users/raphael/3.jpg",
      alt: "Image 3",
      style: { width: "100%", height: "auto" },
    },
    {
      id: 4,
      src: "images/users/raphael/4.jpg",
      alt: "Image 4",
      style: { width: "100%", height: "auto" },
    },
    {
      id: 5,
      src: "images/users/raphael/5.jpg",
      alt: "Image 5",
      style: { width: "100%", height: "auto" },
    }
  ];

  const handleToggleFollow = () => {
    setIsFollowingProfile((prevIsFollowingProfile) => !prevIsFollowingProfile);
  };

  return (
    <Profile
      profileImageProps={profileImageProps}
      userName="raphael"
      countsData={dataProfile}
      bioText="Raffaello Sanzio da Urbino"
      photos={photos}
      activeBtnFollow={activeBtnFollow}
      isFollowingProfile={isFollowingProfile}
      handleToggleFollow={handleToggleFollow}
    />
  );
};

export default FriendsProfile;