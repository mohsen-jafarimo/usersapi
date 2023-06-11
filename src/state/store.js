import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../features/api/apiSlice";
import AuthSliceReducer from "../features/auth/authSlice";
export const Store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
setupListeners(Store.dispatch);
