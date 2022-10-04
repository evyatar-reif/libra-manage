import React, { useContext } from "react";
import { profileContext } from "../context/profileContext";
import plusLogo from "./img/plusLogo.png";
import userLogo from "./img/userLogo.png";

const ProfileCard = (props) => {
  const { addProfileToContext, updateActiveProfile } =
    useContext(profileContext);

  function addProfile() {
    const name = prompt("Please enter your name");
    const password = prompt("Please enter a secure password");
    addProfileToContext({ name, password });
  }

  function verifyLogin() {
    var didMatch = false;
    const password = prompt("Please enter a secure password");
    didMatch = password == props.profile.password;
    didMatch
      ? updateActiveProfile(props.profile.id)
      : alert("Incorrect password");
  }

  if (props.profile) {
    return (
      <div
        className="profile-card-container"
        onClick={verifyLogin}>
        <img
          alt="profile_pic"
          src={userLogo}
          className="profile-card-img"
        />
        <span className="profile-card-name">{props.profile.name}</span>
      </div>
    );
  } else {
    return (
      <div
        className="profile-card-container"
        onClick={addProfile}>
        <img
          alt="profile_pic"
          src={plusLogo}
          className="profile-card-img"
        />
      </div>
    );
  }
};

export default ProfileCard;
