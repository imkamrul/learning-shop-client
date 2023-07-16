import { api } from "./apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: (token) => ({
        url: `/users/my-profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `/auth/register`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetMeQuery } = userApi;
