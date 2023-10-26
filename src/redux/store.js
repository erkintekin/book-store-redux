import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import bookReducer from "./bookSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    book: bookReducer,
    cart: cartReducer,
    users: userReducer,
  },
});
