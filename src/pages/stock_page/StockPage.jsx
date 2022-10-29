import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { isBookValid } from "../../utils/bookUtils";
import { addToStock } from "../../redux/stockReducer";

import FilterBooks from "../../components/FilterBooks";
import AddBook from "../../components/AddBook";
import BookList from "../../components/BookList";

import Modal from "../../components/Modal";

const StockPage = () => {
  const allBooks = useSelector((state) => state.stock.allBooks);
  const [displayBooks, setDisplayBooks] = useState(allBooks);

  const dispatch = useDispatch();
  const [modalState, setModalState] = useState({ add: false, filter: false });
  const [filters, setFilters] = useState(null);

  function onAddBook(book) {
    setModalState((prevState) => {
      return { ...prevState, add: false };
    });

    dispatch(addToStock(book));
  }
  function onFilter(newFilters) {
    setModalState((prevState) => {
      return { ...prevState, filter: false };
    });

    setFilters(newFilters);
  }
  function onClear() {
    setFilters(null);
  }

  useEffect(() => {
    console.log("filtering");
    const newDisplayBooks = allBooks.filter((b) => isBookValid(b, filters));
    setDisplayBooks(newDisplayBooks);
  }, [allBooks, filters]);
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex gap-3">
        <button
          className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32"
          onClick={() =>
            setModalState((prevState) => {
              return { ...prevState, add: true };
            })
          }>
          Add Book
        </button>
        <button
          className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32"
          onClick={() =>
            setModalState((prevState) => {
              return { ...prevState, filter: true };
            })
          }>
          Filter books
        </button>
        <button
          className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32"
          onClick={onClear}>
          Clear filters
        </button>
      </div>

      <BookList books={displayBooks} />

      <div>
        <Modal
          closeOnOutsideClick={true}
          onClose={() =>
            setModalState((prevState) => {
              return { ...prevState, add: false };
            })
          }
          open={modalState.add}>
          <AddBook onAddBook={onAddBook} />
        </Modal>

        <Modal
          closeOnOutsideClick={true}
          onClose={() =>
            setModalState((prevState) => {
              return { ...prevState, filter: false };
            })
          }
          open={modalState.filter}>
          <FilterBooks onFilter={onFilter} />
        </Modal>
      </div>
    </div>
  );
};

export default StockPage;
