import React from "react";

const Book = ({ book }) => {
  console.log(book);
  return (
    <div>
      <p>{book.title}</p>
      <img
        src={book.imageLinks.smallThumbnail}
        alt="cover"
      />
    </div>
  );
};

export default Book;
