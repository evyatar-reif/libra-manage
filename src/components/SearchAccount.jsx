import React, { useState } from "react";

const SearchAccount = ({ onSearchAccount }) => {
  const [entry, setEntry] = useState({ phoneNumber: "" });

  function handleSubmit(e) {
    e.preventDefault();
    if (entry.phoneNumber) {
      onSearchAccount(entry);
    } else {
      alert("Please enter a phone number");
    }
  }

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="number"
          placeholder="Phone Number"
          value={entry.phoneNumber}
          onChange={(e) => {
            setEntry({ phoneNumber: e.target.value });
          }}
        />
        <button className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-full mt-3">
          Search Account
        </button>
      </div>
    </form>
  );
};

export default SearchAccount;
