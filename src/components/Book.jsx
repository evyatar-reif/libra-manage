import React from "react";

const Book = ({ book, preview }) => {
  return (
    <div className="shadow-2xl flex border-black border-2 pl-3 pt-3 pb-3 max-w-xs rounded-lg">
      <img
        className="border-black border-2"
        src={book.imageLinks.thumbnail}
        alt="cover"
      />
      <div className="flex flex-col ml-3 mr-2">
        <h2 className="font-bold text-sm">{book.title}</h2>
        <div>
          <p className="text-xs">Author</p>
          <p className="text-sm">{book.authors[0]}</p>
        </div>
        <div>
          <p className="text-xs">Year</p>
          <p className="text-sm">{book.publishedDate}</p>
        </div>
        {
          <div>
            <p
              className={`bg-${
                book.isBorrowed ? `error` : `success`
              } rounded-full text-center mt-5 mr-2`}>
              {book.isBorrowed ? "Out of stock" : "In stock"}
            </p>
          </div>
        }
      </div>
    </div>
  );
};

export default Book;
