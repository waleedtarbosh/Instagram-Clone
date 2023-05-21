import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Image from "../../pages/Login/Image/Image";
import SvgComponent from "./SvgComponent/SvgComponent";
import PathComponent from "./PathComponent/PathComponent";

const instagramLogo = {
  src: "/images/logo.png",
  alt: "Instagram",
  imageWrapperStyle: "mt-2 w-6/12",
};

const svgProps = {
  className: "w-8 mr-6 text-black-light cursor-pointer",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
};

const pathProps1 = {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
};

const pathProps2 = {
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
};
const profileImageProps = {
  src: "/images/avatars/karl.jpg",
  alt: "img profile",
  imageWrapperStyle: "h-8 w-8 flex ",
  imageStyle: "rounded-full",
};

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                <Image {...instagramLogo} />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items">
            <>
              <Link to={ROUTES.DASHBOARD} aria-label="Dashboard">
                <SvgComponent {...svgProps}>
                  <PathComponent {...pathProps1} />
                </SvgComponent>
              </Link>

              <button
                type="button"
                title="Sign Out"
                onClick={() => {
                  // Handle sign out logic here
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    // Handle sign out logic here
                  }
                }}
              >
                <SvgComponent {...svgProps}>
                  <PathComponent {...pathProps2} />
                </SvgComponent>
              </button>
              <div className="flex items-center cursor-pointer">
                <Link to={`/p/karl`}>
                  <Image {...profileImageProps}></Image>
                </Link>
              </div>
            </>
          </div>
        </div>
      </div>
    </header>
  );
}