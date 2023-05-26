import React from "react";
import styles from "./Photos.module.css";
import SvgPathComponent from "../../../Components/Header/SvgPathComponent/SvgPathComponent";
import Image from "../../Login/Image/Image";

const Photos = ({ photos }) => {
  const svgProps = {
    className: "w-8 mr-2",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    stroke: "",
  };

  const heartIconProps = {
    strokeLinecap: "",
    strokeLinejoin: "",
    strokeWidth: 2,
    d:
      "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",
    fillRule: "evenodd",
    clipRule: "evenodd",
  };

  const commentIconProps = {
    strokeLinecap: "",
    strokeLinejoin: "",
    strokeWidth: 2,
    d:
      "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
    fillRule: "evenodd",
    clipRule: "evenodd",
  };

  const photosProfile = {
    imageWrapperStyle: "",
    imageStyle: "w-full h-full object-cover",
  };

  if (photos?.length > 0) {
    return (
      <div className="h-16 border-t border-gray-primary mt-12 pt-4">
        <div className="grid grid-cols-3 gap-2">
          {photos.map((photo) => (
            <div key={photo.id} className="relative mr-6 mb-5">
              <Image src={photo.src} alt={photo.alt} {...photosProfile} />
              <div className="absolute bottom-0 left-0 bg-gray-200 z-10 w-full justify-evenly items-center h-full bg-black-faded group-hover:flex">
                <div className="flex justify-center items-center">
                  <div className={styles["icons"]}>
                    {[
                      { svgProps, pathProps: heartIconProps },
                      { svgProps, pathProps: commentIconProps },
                    ].map((props) => (
                      <p
                        key={`${photo.id}-${props.pathProps.d}`}
                        className="flex items-center text-white font-bold"
                      >
                        <SvgPathComponent {...props} />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-16 border-t border-gray-primary mt-12 pt-4">
        <p className="text-center text-2xl">
          No posts yet, but stay tuned for exciting updates!
        </p>
      </div>
    );
  }
};

export default Photos;