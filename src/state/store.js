import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiSlice } from "../features/api/apiSlice";
export const Store =configureStore({
    reducer:{
[apiSlice.reducerPath]:apiSlice.reducer
    },
 middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:true
})
 setupListeners(Store.dispatch)