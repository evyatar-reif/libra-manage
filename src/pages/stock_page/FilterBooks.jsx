import React, { useState } from "react";
import { isValidFilter } from "../../utils/bookUtils";
import { useNavigate } from "react-router-dom";

const INIT_FILTER = {
  title: "",
  author: "",
  minYear: "",
  maxYear: "",
};

const FilterBooks = ({ onFilter }) => {
  const [entry, setEntry] = useState(INIT_FILTER);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function onSubmit() {
    if (isValidFilter(entry)) {
      onFilter(entry);
      navigate("/stock/home");
    } else alert("Please Enter a valid filter");
  }
  function onClear() {
    setEntry(INIT_FILTER);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className='flex flex-col gap-3 p-3 text-secondaryGreen bg-white justify-center'>
      <div className='flex gap-3 p-1 items-center justify-between'>
        <label
          htmlFor='title'
          className='text-xl'>
          Title:
        </label>
        <input
          onChange={(e) =>
            setEntry((prevEntry) => {
              return { ...prevEntry, title: e.target.value };
            })
          }
          value={entry.title}
          id='title'
          placeholder='ex, It'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='flex gap-3 p-1 items-center justify-between'>
        <label
          htmlFor='author'
          className='text-xl'>
          Author:
        </label>
        <input
          value={entry.author}
          onChange={(e) =>
            setEntry((prevEntry) => {
              return { ...prevEntry, author: e.target.value };
            })
          }
          id='author'
          placeholder='ex, Rick Riordan'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='flex gap-3 p-1 items-center justify-between'>
        <label
          htmlFor='minYear'
          className='text-xl'>
          From Year:
        </label>
        <input
          value={entry.minYear}
          onChange={(e) =>
            setEntry((prevEntry) => {
              return { ...prevEntry, minYear: e.target.value };
            })
          }
          id='minYear'
          type='number'
          placeholder='ex, 1986'
          className='w-xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='flex gap-3 p-1 items-center justify-between'>
        <label
          htmlFor='maxYear'
          className='text-xl'>
          To Year:
        </label>
        <input
          value={entry.maxYear}
          onChange={(e) =>
            setEntry((prevEntry) => {
              return { ...prevEntry, maxYear: e.target.value };
            })
          }
          id='maxYear'
          type='number'
          placeholder='ex, 2022'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>

      <div className='flex gap-3'>
        <button className=' bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-full'>
          Filter
        </button>
        <button
          type='button'
          onClick={onClear}
          className=' bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-full'>
          Clear
        </button>
      </div>
      <span>{error}</span>
    </form>
  );
};

export default FilterBooks;
