import stockReducer from "./stockReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  stock: stockReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
