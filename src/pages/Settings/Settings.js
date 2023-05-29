import React from "react";
import styles from "./Settings.module.css";
import SidebarSettings from "./SidebarSettings/SidebarSettings";
import EditProfile from "./EditProfile/EditProfile";
const Settings = () => {
  return (
    <div className={styles["settings-card"]}>
      <SidebarSettings></SidebarSettings>

      <EditProfile></EditProfile>
    </div>
  );
};

export default Settings;
