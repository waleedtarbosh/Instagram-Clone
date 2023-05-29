import React from 'react'
import styles from './SidebarSettings.module.css';
import { Link } from "react-router-dom";
import Image from '../../Login/Image/Image';
const SidebarSettings = () => {
    const metaLogo = {
        src: "images/meta.webp",
        alt: "meta Photo",
        imageWrapperStyle: "mt-2 mb-2 w-6/12"
      };
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles['edit-profile-tab active']} id="edit-profile-tab"><Link href="/">Edit Profile</Link></li>
        <li className={styles['change-password-tab']} id="change-password-tab"><Link href="/">Change Password</Link></li>
      </ul>
      <div className="relative w-100 h-auto p-1 mt-30 ">
        <Image {...metaLogo}></Image>
        <Link to="/" className={styles['accounts-center-tabLink']}>
      Accounts Center
    </Link>
        <p className={styles['accounts-center-tabP']}>Control settings for connected experiences on Instagram, the Facebook app, and Messenger, including sharing stories and posts, and logging in.</p>
      </div>
    </div>
  )
}

export default SidebarSettings