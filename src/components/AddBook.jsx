import React, { useState } from "react";
import { getBookByISBN } from "../utils/bookApi";
import Book from ".././components/Book";

const AddBook = ({ onAddBook }) => {
  const [entry, setEntry] = useState("");
  const [book, setBook] = useState(null);

  async function searchBook() {
    const resultBook = await getBookByISBN(entry);
    setBook(resultBook);
    console.log(resultBook);
  }
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="isbn">
          ISBN number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="isbn"
          type="text"
          placeholder="ISBN"
          value={entry}
          onChange={(e) => {
            setEntry(e.target.value);
            if (!e.target.entry) setBook(null);
          }}
        />
        <button
          onClick={searchBook}
          type="button"
          className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-full mt-3">
          Search Book
        </button>
      </div>
      {book && (
        <>
          <Book
            preview={true}
            book={book}
          />
          <button
            onClick={() => {
              onAddBook(book);
            }}
            type="button"
            className="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add book to stock
          </button>
        </>
      )}
    </form>
  );
};

export default AddBook;
