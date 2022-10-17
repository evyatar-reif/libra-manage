import React, { useContext } from "react";
import { getBookByISBN } from "../utils/bookApi";
import { stockContext } from "../context/stockContext";

const BooksPage = () => {
  async function handleClick() {
    const ISBN = prompt("Enter ISBN number");

    if (ISBN) {
      const book = await getBookByISBN(ISBN);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Search for Book!</button>
    </div>
  );
};

export default BooksPage;
