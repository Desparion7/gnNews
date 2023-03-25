import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://newsapi.org/v2/top-headlines?country=us&apiKey=6d5a24f1a7f84d97bdb01545079421af

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	tagTypes: ['News'],
	endpoints: (builder) => ({
		getAllNews: builder.query({
			query: (id: string) => ({
				url: `https://newsapi.org/v2/top-headlines?country=${id}&apiKey=a9377c1afb1b4a96aa070641c6289409`,
				method: 'GET',
			}),
			providesTags: [{ type: 'News', id: 'LIST' }],
		}),
	}),
});

export const { useGetAllNewsQuery } = newsApi;
