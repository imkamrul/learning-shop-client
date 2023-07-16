import { api } from "./apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["singleBook", "reviews"],
    }),

    postBook: builder.mutation({
      query: ({ data, token }) => ({
        url: `/books`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateBook: builder.mutation({
      query: ({ data, token, id }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["singleBook"],
    }),
    deleteBook: builder.mutation({
      query: ({ id, token }) => ({
        url: `/books/${id}`,
        method: "DELETE",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["books"],
    }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ["reviews"],
    // }),
    postReview: builder.mutation({
      query: ({ id, data, token }) => ({
        url: `/books/review/${id}`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["reviews"],
    }),
    AddList: builder.mutation({
      query: ({ data, token }) => ({
        url: `/whish-list`,
        method: "POST",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getList: builder.query({
      query: ({ id, token }) => ({
        url: `/whish-list/${id}`,
        method: "GET",

        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateStatus: builder.mutation({
      query: ({ id, data, token }) => ({
        url: `/whish-list/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  usePostReviewMutation,
  useAddListMutation,
  useGetListQuery,
  useUpdateStatusMutation,
} = bookApi;
