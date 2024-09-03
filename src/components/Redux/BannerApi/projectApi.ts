import { baseApi } from "../baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (data) => ({
        url: "/project/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["project"],
    }),
    getProject: builder.query({
      query: () => ({
        url: "/project",
        method: "GET",
      }),
      providesTags: ["project"],
    }),
    singleProject: builder.query({
      query: (id: string) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),

    updateProject: builder.mutation({
      query: (data) => {
        return {
          url: `/banner/update/${data.id}`,
          method: "PATCH",
          body: data.item,
        };
      },
      invalidatesTags: ["project"],
    }),
    deleteProject: builder.mutation({
      query: (id: string) => ({
        url: `/project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetProjectQuery,
  useDeleteProjectMutation,
  useSingleProjectQuery,
} = projectApi;
