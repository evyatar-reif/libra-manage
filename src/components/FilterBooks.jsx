import React, { useState } from "react";

const FilterBooks = ({ onFilter }) => {
  const [entry, setEntry] = useState({
    title: "",
    author: "",
    minYear: "",
    maxYear: "",
    inStock: false,
  });
  const [error, setError] = useState("");
  function onSubmit() {
    onFilter(entry);
  }
  function onClear() {
    setEntry({
      title: "",
      author: "",
      minYear: "",
      maxYear: "",
      inStock: false,
    });
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-3 p-3 text-secondaryGreen bg-white justify-center">
      <div className="flex gap-3 p-1 items-center justify-between">
        <label
          htmlFor="title"
          className="text-xl">
          Title:
        </label>
        <input
          onChange={(e) =>
            setEntry((prevEntry) => {
              return { ...prevEntry, title: e.target.value };
            })
          }
          value={entry.title}
          id="title"
          placeholder="ex, It"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex gap-3 p-1 items-center justify-between">
        <label
          htmlFor="author"
          className="text-xl">
          Author:
        </label>
        <input
          value={entry.author}
          onChange={(e) =>
            setEntry((prevEntry) => {
              return { ...prevEntry, author: e.target.value };
            })
          }
          id="author"
          placeholder="ex, Rick Riordan"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex gap-3 p-1 items-center justify-between">
        <label
          htmlFor="minYear"
          className="text-xl">
          From Year:
        </label>
        <input
          value={entry.minYear}
          onChange={(e) =>
            setEntry((prevEntry) => {
              return { ...prevEntry, minYear: e.target.value };
            })
          }
          id="minYear"
          type="number"
          placeholder="ex, 1986"
          className="w-xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex gap-3 p-1 items-center justify-between">
        <label
          htmlFor="maxYear"
          className="text-xl">
          To Year:
        </label>
        <input
          value={entry.maxYear}
          onChange={(e) =>
            setEntry((prevEntry) => {
              return { ...prevEntry, maxYear: e.target.value };
            })
          }
          id="maxYear"
          type="number"
          placeholder="ex, 2022"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex gap-3 p-1 items-center justify-between">
        <label
          htmlFor="inStock"
          className="text-xl">
          In Stock:
        </label>
        <input
          id="inStock"
          type="checkbox"
          checked={entry.inStock}
          onChange={(e) =>
            setEntry((prevEntry) => {
              return { ...prevEntry, inStock: e.target.checked };
            })
          }
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <div className="flex gap-3">
        <button className=" bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-full">
          Filter
        </button>
        <button
          type="button"
          onClick={onClear}
          className=" bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-full">
          Clear
        </button>
      </div>
      <span>{error}</span>
    </form>
  );
};

export default FilterBooks;
