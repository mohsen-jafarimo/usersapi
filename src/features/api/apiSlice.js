import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://reqres.in",
});

export const apiSlice = createApi({
  reducerPath: "User",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/api/users?page=2",
    }),
  }),
});

export const { useGetUsersQuery, useLoginMutation } = apiSlice;
