import { api } from "./apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["reviews"],
    }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ["reviews"],
    // }),
  }),
});

export const { useGetBooksQuery, usePostCommentMutation, useSingleBookQuery } =
  bookApi;
