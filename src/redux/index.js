import accountReducer from "./accountManagment";
const redux = require("redux");
const { combineReducers, createStore } = redux;

const rootReducer = combineReducers({
  accounts: accountReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
export default store;
