import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62e2c4f2b54fc209b8802fa4.mockapi.io/todo/',
  }),
  endpoints: builder => ({
    getToDoItems: builder.query({
      query: () => '/todo',
    }),
  }),
});

export const { useGetToDoItemsQuery } = todoApi;
