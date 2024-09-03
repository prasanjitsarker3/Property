import { baseApi } from "../baseApi";

const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProfile: builder.mutation({
      query: (data) => ({
        url: "/profile/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
    getProfile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/profile/${data.id}`,
        method: "PATCH",
        body: data.item,
      }),
      invalidatesTags: ["profile"],
    }),

    createContact: builder.mutation({
      query: (data) => ({
        url: "/contact/create",
        method: "POST",
        body: data,
      }),
    }),
    getContact: builder.query({
      query: () => ({
        url: "/contact",
        method: "GET",
      }),
    }),

    createBlog: builder.mutation({
      query: (data) => ({
        url: "/blog/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id: string) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useCreateProfileMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useCreateContactMutation,
  useGetContactQuery,
  useCreateBlogMutation,
  useGetBlogQuery,
  useDeleteBlogMutation,
} = profileApi;
