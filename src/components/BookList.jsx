import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const BookList = ({ books }) => {
  const bookElements = books.map((book) => (
    <Link
      key={book.id}
      to={`/book/${book.id}`}>
      <Book
        key={book.id}
        book={book}
      />
    </Link>
  ));
  return (
    <div className="flex flex-wrap gap-3 content-between">{bookElements}</div>
  );
};

export default BookList;
