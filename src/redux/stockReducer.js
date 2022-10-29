const DEFAULT_STATE = { allBooks: [], bookTransactions: [] };

function borrowBook(bookId, accountId) {
  return { type: "BORROW_BOOK", payload: bookId };
}
function returnBook(bookId, accountId) {
  return { type: "RETURN_BOOK", payload: bookId };
}

function makeAvailable(bookId) {
  return { type: "MAKE_AVAILABLE", payload: bookId };
}
function makeUnavailable(bookId) {
  return { type: "MAKE_UNAVAILABLE", payload: bookId };
}
function addToStock(book) {
  return { type: "ADD_TO_STOCK", payload: book };
}

export default function stockReducer(state = DEFAULT_STATE, action) {
  const generateId = (type) => {
    if (type == "book") {
      let newId = "B" + Math.floor(100000000 + Math.random() * 900000000);
      let isFound = state.allBooks.find((b) => b.id == newId);
      while (isFound) {
        newId = "B" + Math.floor(100000000 + Math.random() * 900000000);
        isFound = state.allBooks.find((b) => b.id == newId);
      }
      return newId;
    } else if (type == "transaction") {
      let newId = "T" + Math.floor(100000000 + Math.random() * 900000000);
      let isFound = state.bookTransactions.find((t) => t.id == newId);
      while (isFound) {
        newId = "T" + Math.floor(100000000 + Math.random() * 900000000);
        isFound = state.bookTransactions.find((t) => t.id == newId);
      }
      return newId;
    }
  };

  const generateAction = (type) => {
    const newAction = {
      type: type,
      id: generateId("transaction"),
      bookId: action.payload,
      accountId: action.payload.accountId ? action.payload.accountId : "SYSTEM",
      date: new Date().toLocaleDateString(),
    };

    return newAction;
  };

  switch (action.type) {
    case "BORROW_BOOK": {
      const foundBook = state.allBooks.find((b) => b.id == action.payload);
      const index = state.allBooks.indexOf(foundBook);
      const newBook = { ...foundBook, isBorrowed: true };

      let newAllBooks = [...state.allBooks];
      newAllBooks[index] = newBook;

      const newTransaction = generateAction("Borrow");
      const newBookTransaction = [...state.bookTransactions, newTransaction];
      return {
        ...state,
        allBooks: newAllBooks,
        bookTransactions: newBookTransaction,
      };
    }
    case "RETURN_BOOK": {
      const foundBook = state.allBooks.find((b) => b.id == action.payload);
      const index = state.allBooks.indexOf(foundBook);
      const newBook = { ...foundBook, isBorrowed: false };

      let newAllBooks = [...state.allBooks];
      newAllBooks[index] = newBook;

      const newTransaction = generateAction("Return");
      const newBookTransaction = [...state.bookTransactions, newTransaction];
      return {
        ...state,
        allBooks: newAllBooks,
        bookTransactions: newBookTransaction,
      };
    }
    case "MAKE_AVAILABLE": {
      const foundBook = state.allBooks.find((b) => b.id == action.payload);
      const index = state.allBooks.indexOf(foundBook);
      const newBook = { ...foundBook, isAvailable: true };
      const newAllBooks = [...state.allBooks].splice(index, 1, newBook);

      const newTransaction = generateAction("Available");
      const newBookTransaction = [...state.bookTransactions, newTransaction];
      return {
        ...state,
        allBooks: newAllBooks,
        bookTransactions: newBookTransaction,
      };
    }
    case "MAKE_UNAVAILABLE": {
      const foundBook = state.allBooks.find((b) => b.id == action.payload);
      const index = state.allBooks.indexOf(foundBook);
      const newBook = { ...foundBook, isAvailable: false };
      const newAllBooks = [...state.allBooks].splice(index, 1, newBook);

      const newTransaction = generateAction("UnAvailable");
      const newBookTransaction = [...state.bookTransactions, newTransaction];
      return {
        ...state,
        allBooks: newAllBooks,
        bookTransactions: newBookTransaction,
      };
    }
    case "ADD_TO_STOCK": {
      const newBook = {
        ...action.payload,
        id: generateId("book"),
        isAvailable: true,
        isBorrowed: false,
        publishedDate: action.payload.publishedDate.slice(0, 4),
      };

      const newTransaction = {
        type: "Add to Stock",
        id: generateId("transaction"),
        bookId: newBook.id,
        accountId: action.payload.accountId
          ? action.payload.accountId
          : "SYSTEM",
        date: new Date().toLocaleDateString(),
      };
      const newBookTransactions = [...state.bookTransactions, newTransaction];

      return {
        ...state,
        allBooks: [...state.allBooks, newBook],
        bookTransactions: newBookTransactions,
      };
    }
    default: {
      return state;
    }
  }
}

export { borrowBook, returnBook, makeAvailable, makeUnavailable, addToStock };
