function addNewBook(book) {
  return {
    type: "ADD_STOCK",
    payload: book,
  };
}
function returnBook(bookId, accountId) {
  return {
    type: "RETURN_BOOK",
    payload: { bookId, accountId },
  };
}
function borrowBook(bookId, accountId) {
  return {
    type: "BORROW_BOOK",
    payload: { bookId, accountId },
  };
}
function removeBook(bookId) {
  return { type: "REMOVE_BOOK", payload: bookId };
}

const DEFAULT_STATE = { stock: [], currentId: 0, transactionId: 0 };

export default function stockReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "ADD_STOCK": {
      const newBook = {
        ...action.payload,
        id: state.currentId,
        isBorrowed: false,
        actions: [],
      };
      return {
        ...state,
        stock: [...state.stock, newBook],
        currentId: state.currentId + 1,
      };
    }
    case "RETURN_BOOK": {
      const newAction = {
        account: action.payload.accountId,
        transaction: "Return",
        date: new Date().toLocaleDateString(),
        id: state.transactionId,
      };
      const foundBook = state.stock.find((b) => b.id == action.payload.bookId);
      const index = state.stock.indexOf(foundBook);

      const newBook = {
        ...foundBook,
        actions: [...foundBook.actions, newAction],
        isBorrowed: false,
      };

      let newStock = [...state.stock];
      newStock[index] = newBook;
      return {
        ...state,
        stock: newStock,
        transactionId: state.transactionId + 1,
      };
    }
    case "BORROW_BOOK": {
      const newAction = {
        account: action.payload.accountId,
        transaction: "Borrow",
        date: new Date().toLocaleDateString(),
        id: state.transactionId,
      };
      const foundBook = state.stock.find((b) => b.id == action.payload.bookId);
      const index = state.stock.indexOf(foundBook);

      const newBook = {
        ...foundBook,
        actions: [...foundBook.actions, newAction],
        isBorrowed: true,
      };

      let newStock = [...state.stock];
      newStock[index] = newBook;
      return {
        ...state,
        stock: newStock,
        transactionId: state.transactionId + 1,
      };
    }
    case "REMOVE_BOOK": {
      const foundBook = state.stock.find((b) => b.id == action.payload);
      const index = state.stock.indexOf(foundBook);
      let newStock = [...state.stock];
      newStock.splice(index, 1);

      return {
        ...state,
        stock: newStock,
      };
    }
    default: {
      return state;
    }
  }
}

export { addNewBook, borrowBook, returnBook, removeBook };
