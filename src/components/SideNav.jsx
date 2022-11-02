import React from "react";

const SideNav = ({ onSearch, onAddAccount }) => {
  return (
    <nav className="bg-secondaryGreen flex flex-col gap-3 p-3 max-w-fit h-[100vh]">
      <button
        onClick={onAddAccount}
        className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32 h-fit">
        Add Account
      </button>

      <button
        onClick={onSearch}
        className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32 h-fit">
        Search
      </button>
    </nav>
  );
};

export default SideNav;
