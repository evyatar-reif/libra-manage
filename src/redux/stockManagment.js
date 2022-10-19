function addBookToStock(book) {
  return {
    type: "ADD_BOOK_TO_STOCK",
    payload: book,
  };
}

const DEFAULT_STATE = { bookStock: [], currentId: 0 };

export default function accountReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "ADD_PROFILE": {
      const newBook = { ...action.payload, id: state.currentId };
      return {
        ...state,
        bookStock: {
          bookStock: [...state.bookStock, newBook],
          currentId: state.currentId + 1,
        },
      };
    }
    default:
      return state;
  }
}
