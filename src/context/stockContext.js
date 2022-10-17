import { createContext, useState } from "react";

const stockContext = createContext();

function StockContextProvider(props) {
  const [stock, setStock] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  function addToStock(book) {
    const newBook = { ...book, id: currentId };
    setCurrentId((prevId) => prevId + 1);

    setStock((prevStock) => [...prevStock, newBook]);
  }

  return (
    <stockContext.Provider value={{ stock, addToStock }}>
      {props.children}
    </stockContext.Provider>
  );
}

export { StockContextProvider, stockContext };
