const DEFAULT_STATE = { accounts: [] };

function addAccount(account) {
  return {
    type: "ADD_ACCOUNT",
    payload: account,
  };
}
function updateAccount(originalId, newAccount) {
  return { type: "UPDATE_ACCOUNT", payload: { originalId, newAccount } };
}

export default function accountReducer(state = DEFAULT_STATE, action) {
  const generateId = () => {};

  switch (action.type) {
    case "ADD_ACCOUNT": {
      const newAccount = {
        id: generateId(),
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
      };
      return {
        ...state,
        accounts: [...state.accounts, newAccount],
      };
    }
    case "UPDATE_ACCOUNT": {
      const foundAccount = state.accounts.find(
        (ac) => ac.id == action.payload.originalId
      );
      const index = state.accounts.indexOf(foundAccount);
      if (index) {
        const newAccounts = [...state.accounts].splice(
          index,
          1,
          action.payload.newAccount
        );
        return {
          ...state,
          accounts: [newAccounts],
        };
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
}

export { addAccount, updateAccount };
