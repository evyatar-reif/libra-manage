import React from "react";
import defaultBookCover from "../img/naCover.png";

const Book = ({ book, preview }) => {
  let bookCover = defaultBookCover;
  console.log(bookCover);
  if (book.imageLinks != null) {
    bookCover = book.imageLinks.thumbnail;
  }
  console.log(bookCover);
  return (
    <div className='shadow-2xl flex border-black border-2 pl-3 pt-3 pb-3 rounded-lg w-[280px] h-[200px]'>
      <img
        className='border-black border-2 max-h-[175px]'
        src={bookCover}
        alt='cover'
      />
      <div className='flex flex-col ml-3 mr-2'>
        <h2 className='font-bold text-sm'>
          {book.title.length > 23
            ? `${book.title.slice(0, 20)}...`
            : book.title}
        </h2>
        <div>
          <p className='text-xs'>Author</p>
          <p className='text-sm'>{book.authors[0]}</p>
        </div>
        <div>
          <p className='text-xs'>Year</p>
          <p className='text-sm'>{book.publishedDate}</p>
        </div>
        {
          <div>
            <p
              className={`${
                book.isBorrowed ? `bg-error` : `bg-success`
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
