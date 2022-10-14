import React, { useContext } from "react";
import { profileContext } from "../context/profileContext";
import ProfileCard from "./ProfileCard";

const LoginPage = () => {
  const { profiles } = useContext(profileContext);
  const elements = profiles.map((pr) => (
    <ProfileCard
      key={pr.id}
      profile={pr}
    />
  ));
  return (
    <div>
      <div className="login-page-container">
        {elements}
        <ProfileCard />
      </div>
    </div>
  );
};

export default LoginPage;
