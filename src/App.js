import "./App.css";
import React, { useContext } from "react";
import LoginPage from "./login_page/LoginPage";
import { profileContext } from "./context/profileContext";
import Header from "./header/Header";

function App() {
  const { isLoggedIn } = useContext(profileContext);
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        {!isLoggedIn() && <LoginPage />}
        {isLoggedIn() && <div>hello</div>}
      </div>
    </div>
  );
}

export default App;
