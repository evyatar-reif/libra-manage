function addProfile(profile) {
  return {
    type: "ADD_PROFILE",
    payload: profile,
  };
}
function updateActiveProfile(profile) {
  return {
    type: "UPDATE_ACTIVE_PROFILE",
    payload: profile,
  };
}
function removeProfile(profile) {
  return { type: "REMOVE_PROFILE", payload: profile };
}

const DEFAULT_STATE = { profiles: [], activeProfile: null, currentId: 0 };

export default function accountReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "ADD_PROFILE": {
      const newProfile = { ...action.payload, id: state.currentId };
      return {
        ...state,
        profiles: [...state.profiles, newProfile],
        currentId: state.currentId + 1,
      };
    }
    case "UPDATE_ACTIVE_PROFILE": {
      const index = state.profiles.findIndex(
        (pr) => pr.id === action.payload.id
      );
      return { ...state, activeProfile: index };
    }
    case "REMOVE_PROFILE": {
      const newArr = state.profiles.filter((pr) => pr.id !== action.payload.id);
      return {
        ...state,
        profiles: newArr,
        activeProfile: null,
      };
    }
    default:
      return state;
  }
}
