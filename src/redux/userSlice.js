import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isAdmin: false,
  isLogin: false,
};

const userSlice = createSlice({
  name: "users",

  initialState: initialState,

  reducers: {
    logoutSuccess: (state, action) => {
      state.isLogin = action.payload;
      // if (state.isLogin === false) {
      //   navigate("/login");
      // }
    },

    loginSuccess: (state, action) => {
      state.isLogin = action.payload;
      //   if (state.isLogin === true) {
      //     navigate("/");
      //   }
      // },
    },
  },
});

export const { logoutSuccess, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
