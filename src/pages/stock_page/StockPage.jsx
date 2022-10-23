import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import FilterBooks from "../../components/FilterBooks";
import AddBook from "../../components/AddBook";
import BookList from "../../components/BookList";

import Modal from "../../components/Modal";

const StockPage = () => {
  const [modalState, setModalState] = useState({
    filter: false,
    addBook: false,
  });
  const [filters, setFilters] = useState({
    title: "",
    author: "",
    minYear: "",
    maxYear: "",
    inStock: false,
  });
  const stock = useSelector((state) => state).stock.stock;
  const [viewedBooks, setViewedBooks] = useState(stock);

  useEffect(() => {
    console.log("re filtering");
    const newViewedBooks = stock.filter((book) =>
      isMatchingBook(book, filters)
    );
    console.log(newViewedBooks);
    setViewedBooks(newViewedBooks);
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

function isMatchingBook(book, filters) {
  return true;
}

export default StockPage;
