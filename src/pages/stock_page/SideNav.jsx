import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ onAddBook, onFilterBooks, onClear, onSearch }) => {
  return (
    <nav className='bg-secondaryGreen flex flex-col gap-3 p-3 max-w-fit h-[100vh]'>
      <Link to='/stock/home'>
        <button className='bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32 h-fit'>
          Home
        </button>
      </Link>

      <button
        onClick={onAddBook}
        className='bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32 h-fit'>
        Add Book
      </button>

      <button
        onClick={onSearch}
        className='bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32 h-fit'>
        Search Book
      </button>

      <button
        onClick={onFilterBooks}
        className='bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32 h-fit'>
        Filter Books
      </button>

      <button
        onClick={onClear}
        className='bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32 h-fit'>
        Clear Filters
      </button>
    </nav>
  );
};

export default SideNav;
