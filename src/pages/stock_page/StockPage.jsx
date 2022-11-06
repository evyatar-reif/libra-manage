import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { isBookValid } from "../../utils/bookUtils";
import { addToStock } from "../../redux/stockReducer";

import FilterBooks from "./FilterBooks";
import AddBook from "./AddBook";
import BookList from "../../components/BookList";

import SideNav from "./SideNav";
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
    const newDisplayBooks = allBooks.filter((b) => isBookValid(b, filters));
    setDisplayBooks(newDisplayBooks);
  }, [allBooks, filters]);

  return (
    <div className='flex'>
      <SideNav
        onAddBook={() =>
          setModalState((prevState) => {
            return { ...prevState, add: true };
          })
        }
        onFilterBooks={() =>
          setModalState((prevState) => {
            return { ...prevState, filter: true };
          })
        }
        onClear={onClear}
      />

      <Outlet context={displayBooks} />
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
