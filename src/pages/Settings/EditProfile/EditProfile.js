import React from 'react'
import styles from './EditProfile.module.css';
import { Link } from "react-router-dom";
import Image from '../../Login/Image/Image';
const EditProfile = () => {
    const profileImageProps = {
        src: "/images/avatars/karl.jpg",
        alt: "img profile",
        imageWrapperStyle: "h-16 w-2 mr-4 mb-4 flex ",
        imageStyle: "rounded-full"
      };
  return (
<div className={styles.content}>
  <section id="edit-profile-section" className="p-4">
    <form>
      <div className={styles['form-group']}>
        <div className={styles['profile-info']}>
            <Image {...profileImageProps} className={`${styles['profile-photo-preview']}`}   id="profile-photo-preview" ></Image>

          <div className={styles['profile-text']}>karl</div>
        </div>
        <label htmlFor="profile-photo" className={styles['profile-photo-label']} id="profile-photo-label" />
        <input type="file"className={styles['profile-photo1']} id="profile-photo" />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="name" className={styles['label-name']} id="label-name">Name:</label>
        <input type="text" id="name" className={styles['name']}/>
        <div className={styles['note']} >To help people discover your account, use the name people know you by, whether it's your full name, nickname, or business name.</div>
        <p className={styles['note-description']}>You can only change your name twice within a 14-day period.</p>
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="username" className={styles['label-username']} id="label-username">Username:</label>
        <input type="text" id="username" className={styles['username']}/>
        <p className={styles['note']}>In most cases, you will be able to change your username back to karl for an additional 14 days. <Link href="/" className={styles['note-link']}>More information</Link></p>
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="description" className={styles['label-description']} id="label-description">Description:</label>
        <textarea id="description" defaultValue={""} className={styles['description']} />
      </div>
      <div className={styles['form-group']}>
        <h6 className={styles['note']}>Personal Information</h6>
        <p className={styles['note']}>Provide your personal information, even if the account is used for a business, a pet, etc. This information will not be kept in your public profile.</p>
        <label htmlFor="email" className={styles['label-email']} id="label-email">Email:</label>
        <input type="email" id="email" className={styles['email']}/>
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="gender"className={styles['label-gender']}  id="label-gender">Gender:</label>
        <select id="gender" className={styles['gender']}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className={styles['button-Temporarily']}>
        <button type="submit" className={styles['save-button']} id="save-changes-button" disabled>Send</button>
        <Link href="#" className={styles['deactivate-account-text']}>Temporarily deactivate my account</Link>
      </div>
    </form>
  </section>
</div>

  )
}

export default EditProfile