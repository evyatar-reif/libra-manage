import React, { useState } from "react";
import Modal from "../../components/Modal.tsx";
import AddBook from "../../components/AddBook";

const StockPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => {
        if (isOpen) setIsOpen(false);
      }}>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-3 w-auto text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add Book
      </button>
      <Modal
        open={isOpen}
        closeOnOutSideClick={true}>
        <AddBook onClose={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
};

export default StockPage;
