import React from "react";
import Image from "../Login/Image/Image";
import Photos from "./Photos/Photos";
import UserName from "../Profile/UserName/UserName";
import Count from "../Profile/Count/Count";
import Bio from "../Profile/Bio/Bio";

const Profile = ({
  profileImageProps,
  userName,
  countsData,
  bioText,
  photos,
  activeBtnFollow,
  isFollowingProfile,
  handleToggleFollow,
}) => {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg mt-12 mr-10">
        <div className="grid grid-cols-3 gap-4 justify-between">
          <div className="col-span-1 flex justify-center items-center">
            <Image {...profileImageProps} />
          </div>
          <div className="col-span-2 flex flex-col">
            <div className="flex items-center">
              <UserName name={userName} />
              {activeBtnFollow && (
                <button
                  className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
                  type="button"
                  onClick={handleToggleFollow}
                >
                  {isFollowingProfile ? "Unfollow" : "Follow"}
                </button>
              )}
            </div>
            <Count countsData={countsData} />
            <div className="mt-4">
              <Bio bioText={bioText} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-screen-lg h-full">
        <Photos photos={photos} />
      </div>
    </>
  );
};

export default Profile;