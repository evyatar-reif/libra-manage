import React, { useContext } from "react";
import { profileContext } from "../context/profileContext";
import { Link } from "react-router-dom";

const ProfileIcon = () => {
  const { getActiveProfile, isLoggedIn } = useContext(profileContext);

  return isLoggedIn() ? (
    <Link to="/accounts">
      <span className="header-profile-container">
        {getActiveProfile().name}
      </span>
    </Link>
  ) : (
    <div></div>
  );
};

export default ProfileIcon;
