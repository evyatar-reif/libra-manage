import React, { useState } from "react";
import { getBookByISBN } from "../utils/bookApi";
import Book from ".././components/Book.tsx";
import { useDispatch } from "react-redux";
import { addNewBook } from ".././redux/stockReducer";

const AddBook = ({ onClose }) => {
  const [entry, setEntry] = useState("");
  const [book, setBook] = useState(null);
  const dispatch = useDispatch();

  async function searchBook() {
    const resultBook = await getBookByISBN(entry);
    setBook(resultBook);
  }
  function addToStock() {
    console.log(book);
    dispatch(addNewBook(book));
    onClose();
  }
  return (
    <div className="w-full max-w-xs">
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
            className="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search Book
          </button>
        </div>
        {book && (
          <>
            <Book book={book} />
            <button
              onClick={addToStock}
              type="button"
              className="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add book to stock
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default AddBook;
