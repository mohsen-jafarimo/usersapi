import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setCreditional: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCreditional, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
