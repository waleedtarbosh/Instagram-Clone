import React from "react";
import Image from "../Login/Image/Image";
import Photos from "./Photos";
import UserName from "./UserName/UserName";
import Count from "./Count/Count";
import Bio from "./Bio/Bio";
import Header from "../../Components/Header/Header";
const Profile = () => {
  const followerCount = 1;
  const profileImageProps = {
    src: "/images/avatars/karl.jpg",
    alt: "karl profile picture",
    imageWrapperStyle: "h-40 w-40",
    imageStyle: "rounded-full",
  };

  const dataProfile = [
    { id: "photos", label: "photos", value: 0 },
    { id: "followers", label: "followers", value: followerCount },
    { id: "following", label: "following", value: 2 },
  ];

  return (
    <>
     <Header />
      <div className="container mx-auto max-w-screen-lg mt-12 mr-10">
        <div className="grid grid-cols-3 gap-4 justify-between">
          <div className="col-span-1 flex justify-center items-center">
            <Image {...profileImageProps} />
          </div>
          <div className="col-span-2 flex flex-col">
            <div className="flex items-center">
              <UserName name="karl" />
            </div>
            <Count countsData={dataProfile} />
            <div className="mt-4">
              <Bio bioText="karl Hadwen" />
            </div>
          </div>
        </div>
      </div>
      <Photos />
    </>
  );
};

export default Profile;