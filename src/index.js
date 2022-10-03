import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProfileContextProvider } from "./context/profileContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </React.StrictMode>
);
