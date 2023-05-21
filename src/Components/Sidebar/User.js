import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../../pages/Login/Image/Image';
const User = () => {
    const ProfileImageProps = {
        src: "/images/avatars/karl.jpg",
        alt: "img profile",
        imageWrapperStyle: "w-16 flex mr-3",
        imageStyle: "rounded-full"
      };
  return (
    <Link to={`/p/karl`} className="grid grid-cols-4 gap-4 mb-6 items-center">
    <div className="flex items-center justify-between col-span-1">
    <Image {...ProfileImageProps}></Image>
    </div>
    <div className="col-span-3">
      <p className="font-bold text-sm">karl</p>
      <p className="text-sm">karl Hadwen</p>
    </div>
  </Link>
  )
}

export default User