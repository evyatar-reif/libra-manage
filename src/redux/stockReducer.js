function addNewBook(book) {
  return {
    type: "ADD_STOCK",
    payload: book,
  };
}

const DEFAULT_STATE = { stock: [], currentId: 0 };

export default function stockReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "ADD_STOCK": {
      const newBook = {
        ...action.payload,
        id: state.currentId,
        isBorrowd: false,
      };
      return {
        stock: [...state.stock, newBook],
        currentId: state.currentId + 1,
      };
    }
    default: {
      return state;
    }
  }
}

export { addNewBook };
