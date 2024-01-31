import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { register, logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
