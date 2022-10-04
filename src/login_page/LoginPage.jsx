import React, { useContext } from "react";
import { profileContext } from "../context/profileContext";
import ProfileCard from "./ProfileCard";

const LoginPage = () => {
  const { profiles, getActiveProfile } = useContext(profileContext);
  const activeProfile = getActiveProfile();
  const elements = profiles.map((pr) => (
    <ProfileCard
      key={pr.id}
      profile={pr}
    />
  ));
  return (
    <div>
      <h1>{activeProfile ? activeProfile.name : "Welcome, Please login"}</h1>
      <div className="login-page-container">
        {elements}
        <ProfileCard />
      </div>
    </div>
  );
};

export default LoginPage;
