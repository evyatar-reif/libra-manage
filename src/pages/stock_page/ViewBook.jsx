import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TransactionTable from "../../components/TransactionsTable";
import { borrowBook, returnBook } from "../../redux/stockReducer";
import QRCode from "react-qr-code";
import Modal from "../../components/Modal";

const ViewBook = () => {
  // const navigate = useNavigate();
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stock.allBooks);
  const book = stock.find((b) => b.id == bookId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleBorrow() {
    if (!book.isBorrowed) {
      const accountId = prompt("Enter Account Number");
      if (accountId) dispatch(borrowBook(bookId, accountId));
    } else {
      alert("Book is already borrowed");
    }
  }

  function handleReturn() {
    if (book.isBorrowed) {
      const accountId = prompt("Enter Account Number");
      if (accountId) dispatch(returnBook(bookId, accountId));
    } else {
      alert("Book is already returned");
    }
  }

  console.log(book.isBorrowed);

  return (
    <div className="flex p-3 bg-white">
      <img
        className="w-1/4 h-3/4 rounded-lg border-black border-2"
        src={book.imageLinks.thumbnail}
        alt="cover"
      />
      <div className="flex flex-col ml-4 gap-5 mr-4">
        <h1 className="text-3xl font-bold">{book.title}</h1>
        <div>
          <span className="text-lg">Id</span>
          <p className="text-xl">{book.id}</p>
          <span
            onClick={() => setIsModalOpen(true)}
            className="font-bold  hover:underline cursor-pointer">
            {" "}
            open QR
          </span>
        </div>
        <div>
          <span className="text-lg">Author</span>
          <p>
            {book.authors.map((c) => (
              <span
                key={c}
                className="text-xl">
                {c}
              </span>
            ))}
          </p>{" "}
        </div>
        <div>
          <span className="text-lg">Published</span>
          <p className="text-xl">
            {book.publishedDate}/{book.publisher}
          </p>
        </div>
        <div>
          <span className="text-lg">Catrgories</span>
          <p>
            {book.categories.map((c) => (
              <span
                key={c}
                className="text-xl">
                {c}
              </span>
            ))}
          </p>
        </div>
        <div>
          <span className="text-lg">Description</span>
          <p className="text-md max-w-sm">{book.description}</p>
        </div>
        <div>
          <span className="text-lg">ISBN</span>
          <p className="text-xl">
            {book.industryIdentifiers[0].identifier}/
            {book.industryIdentifiers[1].identifier}
          </p>
        </div>
        <p
          className={`bg-${
            book.isBorrowed ? "error" : "success"
          } rounded-full text-center w-1/2`}>
          {book.isBorrowed ? "Out of stock" : "In stock"}
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleBorrow}
            className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
            Borrow
          </button>
          <button
            onClick={handleReturn}
            className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
            Return
          </button>
          {/* <button
            onClick={handleRemove}
            className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
            Make Unavailable
          </button> */}
        </div>
      </div>
      <div className="h-1/2">
        <TransactionTable
          id={bookId}
          type="b"
        />
      </div>

      <Modal
        open={isModalOpen}
        closeOnOutsideClick={true}
        onClose={() => setIsModalOpen(false)}>
        <div className="bg-white p-3">
          <QRCode value={book.id} />
        </div>
      </Modal>
    </div>
  );
};

export default ViewBook;
