import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProfileContextProvider } from "./context/profileContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProfileContextProvider>
        <App />
      </ProfileContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
