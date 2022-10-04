import React, { useContext } from "react";
import { profileContext } from "../context/profileContext";
import userLogo from "./img/userLogo.png";

const ProfileIcon = () => {
  const { getActiveProfile, isLoggedIn } = useContext(profileContext);
  const txt = isLoggedIn() ? getActiveProfile().name : "Log In";

  return (
    <div className="header-profile-container">
      <img
        className="header-profile-img"
        src={userLogo}
        alt="logo"
      />
      <span className="header-profile-txt">{txt}</span>
    </div>
  );
};

export default ProfileIcon;
