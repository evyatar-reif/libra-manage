import "./App.css";
import React, { useContext } from "react";
import LoginPage from "./login_page/LoginPage";
import HomePage from "./home_page/HomePage";
import { profileContext } from "./context/profileContext";
import Header from "./header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  const { isLoggedIn } = useContext(profileContext);
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        {!isLoggedIn() ? (
          <LoginPage />
        ) : (
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;
