import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import LoginPage from "../login_page/LoginPage";

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <Routes>
          <Route
            exact
            path="/"
            element={<div>Home</div>}
          />
          <Route
            exact
            path="/accounts"
            element={<LoginPage />}
          />
          <Route
            exact
            path="/stock"
            element={<div>stock</div>}
          />
          <Route
            exact
            path="/book"
            element={<div>book</div>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
