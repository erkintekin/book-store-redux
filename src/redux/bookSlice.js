import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};
const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { setBooks, addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
