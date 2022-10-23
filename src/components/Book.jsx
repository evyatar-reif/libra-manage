import React from "react";

const Book = ({ book, preview }) => {
  const borderColor = book.isBorrowed ? "error" : "success";
  return preview ? (
    <div
      className={`shadow-2xl flex border-black border-2 pl-3 pt-3 pb-3 max-w-sm rounded-lg`}>
      <img
        className="rounded-lg"
        src={book.imageLinks.thumbnail}
        alt="cover"
      />
      <div className="flex flex-col ml-3 gap-4">
        <h2 className="font-bold text-sm">{book.title}</h2>
        <div>
          <p className="text-xs">Author</p>
          <p className="text-sm">{book.authors}</p>
        </div>
        <div>
          <p className="text-xs">Year</p>
          <p className="text-sm">{book.publishedDate}</p>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`min-w-[18%] flex border-${borderColor} border-4 pl-3 pt-3 pb-3 max-w-sm rounded-lg`}>
      <img
        className="rounded-lg border-black border-2"
        src={book.imageLinks.thumbnail}
        alt="cover"
      />
      <div className="flex flex-col ml-3 gap-4 mr-1">
        <h2 className="font-bold text-l">{book.title}</h2>
        <div>
          <p className="text-s">Author</p>
          <p className="text-base">{book.authors}</p>
        </div>
        <div>
          <p className="text-s">Year</p>
          <p className="text-base">{book.publishedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
