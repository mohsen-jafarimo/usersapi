import { apiSlice } from "../api/apiSlice";

export const AuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/api/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useDeleteUserMutation } = AuthApiSlice;
