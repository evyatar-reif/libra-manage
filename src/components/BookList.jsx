import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

const BookList = ({ books }) => {
  const bookElements = books.map((book) => (
    <Book
      key={book.id}
      book={book}
    />
  ));
  return <div className="flex gap-3 content-between">{bookElements}</div>;
};

export default BookList;
