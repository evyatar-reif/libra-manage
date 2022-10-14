import React, { useContext } from "react";
import { profileContext } from "../context/profileContext";
import plusLogo from "./img/plusLogo.png";
import userLogo from "./img/userLogo.png";

const ProfileCard = (props) => {
  const {
    addProfileToContext,
    updateActiveProfile,
    removeProfile,
    getActiveProfile,
  } = useContext(profileContext);

  function addProfile() {
    const name = prompt("Please enter your name");
    if (name === null) {
      return;
    }
    const password = prompt("Please enter a secure password");
    if (password === null) {
      return;
    }
    addProfileToContext({ name, password });
  }

  function login() {
    const password = prompt("Please enter your password");
    if (password === null) {
      return;
    }
    const didMatch = password === props.profile.password;
    didMatch ? updateActiveProfile(props.profile) : alert("Incorrect password");
  }
  function remove() {
    const password = prompt(
      "To delete your account please enter your password"
    );
    if (password === null) {
      return;
    }
    const didMatch = password === props.profile.password;
    didMatch ? removeProfile(props.profile) : alert("Incorrect password");
  }

  if (props.profile) {
    return (
      <div
        className="profile-card-container"
        onClick={getActiveProfile() == props.profile ? remove : login}>
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
