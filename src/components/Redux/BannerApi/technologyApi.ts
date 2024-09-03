import { baseApi } from "../baseApi";

const technologyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createTechnology: builder.mutation({
      query: (data) => ({
        url: "/tech/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["technology"],
    }),
    getTechnology: builder.query({
      query: () => ({
        url: "/tech",
        method: "GET",
      }),
      providesTags: ["technology"],
    }),
    updateTechnology: builder.mutation({
      query: (data) => ({
        url: `/tech/update/${data?.id}`,
        method: "PATCH",
        body: data.item,
      }),
      invalidatesTags: ["technology"],
    }),
    deleteTech: builder.mutation({
      query: (id: string) => ({
        url: `/tech/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["technology"],
    }),
  }),
});

export const {
  useCreateTechnologyMutation,
  useGetTechnologyQuery,
  useUpdateTechnologyMutation,
  useDeleteTechMutation,
} = technologyApi;
