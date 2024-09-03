import { baseApi } from "../baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/order/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),
    getBanner: builder.query({
      query: () => ({
        url: "/banner",
        method: "GET",
      }),
      providesTags: ["banner"],
    }),
    updateBanner: builder.mutation({
      query: (data) => {
        return {
          url: `/banner/update/${data.id}`,
          method: "PATCH",
          body: data.item,
        };
      },
      invalidatesTags: ["banner"],
    }),
  }),
});

export const { useGetBannerQuery, useUpdateBannerMutation } = bannerApi;
