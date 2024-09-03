import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://backend-templeted.vercel.app/dev/v1",
    credentials: "include",
  }),
  tagTypes: ["technology", "banner", "project", "profile", "blog"],
  endpoints: () => ({}),
});
