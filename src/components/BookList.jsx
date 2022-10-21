import React from "react";
import { useSelector } from "react-redux";

const BookList = () => {
  const stock = useSelector((state) => state).stock.stock;
  const elements = stock.map((book) => <h1>{book.title}</h1>);
  return (
    <div>
      Book list
      {elements}
    </div>
  );
};

export default BookList;
