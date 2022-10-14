import React, { useContext } from "react";
import { profileContext } from "../context/profileContext";

const ProfileIcon = () => {
  const { getActiveProfile, isLoggedIn } = useContext(profileContext);

  return isLoggedIn() ? (
    <div className="header-profile-container">
      <span className="header-profile-txt">{getActiveProfile().name}</span>
    </div>
  ) : (
    <div></div>
  );
};

export default ProfileIcon;
