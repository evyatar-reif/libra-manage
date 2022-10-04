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
  function updateActiveProfile(id) {
    setActiveProfile(id);
  }
  function getActiveProfile() {
    return profiles[activeProfile];
  }
  function isLoggedIn() {
    return activeProfile != null;
  }
  return (
    <profileContext.Provider
      value={{
        profiles,
        addProfileToContext,
        updateActiveProfile,
        getActiveProfile,
        isLoggedIn,
      }}>
      {props.children}
    </profileContext.Provider>
  );
}

export { ProfileContextProvider, profileContext };
