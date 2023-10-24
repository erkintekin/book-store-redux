import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState: initialState,

  reducers: {
    removeCart: (state, action) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload.id);
    },
    addToCart: (state, action) => {
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    },
  },
});

export const { removeCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
