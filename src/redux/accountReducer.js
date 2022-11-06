const DEFAULT_STATE = {
  accounts: [
    {
      name: "SYSTEM",
      id: "SYSTEM",
      phoneNumber: "000000000",
    },
  ],
  accountTransactions: [],
};

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
  const generateId = (type) => {
    if (type == "account") {
      let newId = "A" + Math.floor(100000000 + Math.random() * 900000000);
      let isFound = state.accounts.find((a) => a.id == newId);
      while (isFound) {
        newId = "A" + Math.floor(100000000 + Math.random() * 900000000);
        isFound = state.accounts.find((a) => a.id == newId);
      }
      return newId;
    } else if (type == "transaction") {
      let newId = "TA" + Math.floor(100000000 + Math.random() * 900000000);
      let isFound = state.accountTransactions.find((t) => t.id == newId);
      while (isFound) {
        newId = "TA" + Math.floor(100000000 + Math.random() * 900000000);
        isFound = state.accountTransactions.find((t) => t.id == newId);
      }
      return newId;
    }
  };

  const generateAction = (type, accountId) => {
    const newAction = {
      type: type,
      id: generateId("transaction"),
      accountId: accountId,
      date: new Date().toLocaleDateString(),
    };

    return newAction;
  };

  switch (action.type) {
    case "ADD_ACCOUNT": {
      const newAccount = {
        id: generateId("account"),
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
      };
      const newAction = generateAction("Account added", newAccount.id);

      return {
        ...state,
        accounts: [...state.accounts, newAccount],
        accountTransactions: [...state.accountTransactions, newAction],
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
