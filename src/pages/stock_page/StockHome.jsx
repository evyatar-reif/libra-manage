import React from "react";
import BookList from "../../components/BookList";
import { useOutletContext } from "react-router-dom";

const StockHome = () => {
  const books = useOutletContext();
  return (
    <div className='p-3'>
      <span className='text-[50px] font-bold mb-[20px]'>Welcome,</span>
      <BookList books={books} />
    </div>
  );
};

export default StockHome;
