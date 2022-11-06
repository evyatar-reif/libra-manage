import React, { useState } from "react";

const AddAccount = ({ onAddAccount }) => {
  const [entry, setEntry] = useState({ name: "", phoneNumber: "" });

  function handleSumbit(e) {
    e.preventDefault();
    if (entry.name && entry.phoneNumber) {
      onAddAccount(entry);
    } else {
      console.log(":Test");
      alert("Please fill all fields.");
    }
  }

  return (
    <form
      onSubmit={handleSumbit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          value={entry.name}
          onChange={(e) => {
            setEntry((prevEntry) => {
              return { ...prevEntry, name: e.target.value };
            });
          }}
        />
      </div>
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
            setEntry((prevEntry) => {
              return { ...prevEntry, phoneNumber: e.target.value };
            });
          }}
        />
        <button
          type="submit"
          className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-full mt-3">
          Add Account
        </button>
      </div>
    </form>
  );
};

export default AddAccount;
