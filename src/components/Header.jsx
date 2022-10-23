import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/book-stack-64(1).png";
const userImg = (
  <svg
    className="scale-150"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
  </svg>
);

const Header = () => {
  function openModal() {
    console.log("user settings");
  }
  return (
    <header
      className="relative w-full h-auto p-3 bg-secondaryGreen border-b-2 
    border-primaryGreen flex items-center justify-between">
      <Link to="/">
        <div className="flex items-center h-50 hover:scale-110">
          <img
            src={logo}
            alt="logo"
          />
          <p className="text-lg ml-3 font-bold">BOOKABLE</p>
        </div>
      </Link>

      <nav className="flex gap-x-2">
        <Link to="/stock">
          <button className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
            Stock
          </button>
        </Link>
        <Link to="/accounts">
          <button className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
            Accounts
          </button>
        </Link>
        <Link to="/actions">
          <button className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
            Actions
          </button>
        </Link>
        <button className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-11">
          {userImg}
        </button>
      </nav>
    </header>
  );
};

export default Header;
