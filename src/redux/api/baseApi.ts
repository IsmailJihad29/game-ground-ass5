import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
// import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api",
  baseUrl: "http://localhost:3000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState)?.user?.token;
    if (token && token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["facility", "availability", "userBooking"],
  endpoints: () => ({}),
});
