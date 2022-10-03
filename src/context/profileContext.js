import { createContext, useState } from "react";

const Context = createContext();

function ProfileContextProvider(props) {
  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState();
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
  return (
    <Context.Provider
      value={{
        profiles,
        addProfileToContext,
        updateActiveProfile,
        getActiveProfile,
      }}>
      {props.children}
    </Context.Provider>
  );
}

export { ProfileContextProvider, Context };
