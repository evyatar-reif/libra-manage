import React from "react";
import logo from "./img/logo.png";
import ProfileIcon from "./ProfileIcon";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src={logo}
        alt="logo"
      />
      <span className="header-title">Library Managment System</span>
      <ProfileIcon />
    </div>
  );
};

export default Header;
