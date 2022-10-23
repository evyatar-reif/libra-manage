import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import FilterBooks from "../../components/FilterBooks";
import AddBook from "../../components/AddBook";
import BookList from "../../components/BookList";

import Modal from "../../components/Modal";

const INIT_FILTERS = {
  title: null,
  author: null,
  minYear: 0,
  maxYear: 3000,
  inStock: null,
};

const StockPage = () => {
  const [modalState, setModalState] = useState({
    filter: false,
    addBook: false,
  });
  const [filters, setFilters] = useState(INIT_FILTERS);
  const stock = useSelector((state) => state).stock.stock;
  const [viewedBooks, setViewedBooks] = useState(stock);

  useEffect(() => {
    const newViewedBooks = stock.filter((book) =>
      isMatchingBook(book, filters)
    );
    setViewedBooks(newViewedBooks);

    function isMatchingBook(book, f) {
      if (f === INIT_FILTERS) return true;
      if (f.title && book.title.toLowerCase().includes(f.title)) return true;
      if (f.author && book.authors[0].toLowerCase().includes(f.author))
        return true;
      if (f.minYear || f.maxYear) {
        let validYear = true;
        if (f.minYear > 0 && book.publishedDate <= f.minYear) validYear = false;
        if (f.maxYear < 3000 && book.publishedDate >= f.maxYear)
          validYear = false;
        return validYear;
      }
      if (f.inStock && !book.isBorrowed) return true;
      // return false;
    }
  }, [filters, stock]);

  function onFilter(filters) {
    setModalState((prevModal) => {
      return { ...prevModal, filter: false };
    });
    setFilters(filters);
  }
  return (
    <div className="flex flex-col gap-3 pl-3 pt-2 bg-white">
      <div className="flex gap-2">
        <button
          onClick={() =>
            setModalState((prevModal) => {
              return { ...prevModal, filter: !modalState.filter };
            })
          }
          className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
          Filter
        </button>
        <button
          onClick={() => setFilters(INIT_FILTERS)}
          className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
          Clear Filters
        </button>
        <button
          onClick={() =>
            setModalState((prevModal) => {
              return { ...prevModal, addBook: !modalState.addBook };
            })
          }
          className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
          Add Book
        </button>
      </div>

      <BookList books={viewedBooks} />

      <Modal
        closeOnOutsideClick={true}
        open={modalState.filter}
        onClose={() => {
          setModalState((prevModal) => {
            return { ...prevModal, filter: false };
          });
        }}>
        <FilterBooks onFilter={onFilter} />
      </Modal>
      <Modal
        closeOnOutsideClick={true}
        open={modalState.addBook}
        onClose={() => {
          setModalState((prevModal) => {
            return { ...prevModal, addBook: false };
          });
        }}>
        <AddBook
          onClose={() => {
            setModalState((prevModal) => {
              return { ...prevModal, addBook: false };
            });
          }}
          onFilter={onFilter}
        />
      </Modal>
    </div>
  );
};

export default StockPage;
