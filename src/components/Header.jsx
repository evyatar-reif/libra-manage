import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/book-stack-64(1).png";

const Header = () => {
  return (
    <header
      className='relative w-full h-auto p-3 bg-secondaryGreen border-b-2 
    border-primaryGreen flex items-center justify-between'>
      <Link to='/'>
        <div className='flex items-center h-50 hover:scale-110'>
          <img
            src={logo}
            alt='logo'
          />
          <p className='text-lg ml-3 font-bold'>BOOKABLE</p>
        </div>
      </Link>

      <nav className='flex gap-x-2'>
        <Link to='/stock/home'>
          <button className='bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32'>
            Stock
          </button>
        </Link>
        <Link to='/accounts/home'>
          <button className='bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32'>
            Accounts
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
