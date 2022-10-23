import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TransactionTable from "../../components/TransactionTable";
import { borrowBook, returnBook, removeBook } from "../../redux/stockReducer";

const ViewBook = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.stock.stock);
  const book = stock.find((b) => b.id == bookId);

  function handleBorrow() {
    if (!book.isBorrowed) {
      const accountId = prompt("Account number?");
      if (accountId) {
        dispatch(borrowBook(bookId, accountId));
      }
    }
  }

  function handleReturn() {
    if (book.isBorrowed) {
      const accountId = prompt("Account number?");
      if (accountId) {
        dispatch(returnBook(bookId, accountId));
      }
    }
  }
  function handleRemove() {
    if (window.confirm("Are you sure?")) {
      dispatch(removeBook(bookId));
      navigate("/stock");
    }
  }

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
        </div>
        <div>
          <span className="text-lg">Author</span>
          <p>
            {book.authors.map((c) => (
              <span className="text-xl">{c}</span>
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
              <span className="text-xl">{c}</span>
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
          <button
            onClick={handleRemove}
            className="bg-secondaryOrange hover:bg-primaryOrange text-white p-3 font-bold rounded-full w-32">
            Remove
          </button>
        </div>
      </div>
      <div className="h-1/2">
        <TransactionTable history={book.actions} />
      </div>
    </div>
  );
};

export default ViewBook;
