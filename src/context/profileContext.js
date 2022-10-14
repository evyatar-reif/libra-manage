import { createContext, useState } from "react";

const profileContext = createContext();

function ProfileContextProvider(props) {
  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState(null);
  const [currentId, setCurrentId] = useState(0);

  function addProfileToContext(profile) {
    const newProfile = { ...profile, id: currentId };
    increaseCurrentId();
    setProfiles((prevProf) => [...prevProf, newProfile]);
  }
  function increaseCurrentId() {
    setCurrentId((prevId) => prevId + 1);
  }
  function updateActiveProfile(profile) {
    const index = profiles.findIndex((pr) => pr.id === profile.id);
    setActiveProfile(index);
  }
  function getActiveProfile() {
    return profiles[activeProfile];
  }
  function isLoggedIn() {
    return activeProfile != null;
  }
  function removeProfile(profile) {
    const newArr = profiles.filter((pr) => pr.id !== profile.id);
    setActiveProfile(null);
    setProfiles(newArr);
  }

  console.log(activeProfile);

  return (
    <profileContext.Provider
      value={{
        profiles,
        addProfileToContext,
        updateActiveProfile,
        getActiveProfile,
        isLoggedIn,
        removeProfile,
      }}>
      {props.children}
    </profileContext.Provider>
  );
}

export { ProfileContextProvider, profileContext };
