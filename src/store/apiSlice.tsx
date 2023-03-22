import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://newsapi.org/v2/top-headlines?country=us&apiKey=6d5a24f1a7f84d97bdb01545079421af

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2' }),
	tagTypes: ['News'],
	endpoints: (builder) => ({
		getAllNews: builder.query({
			query: (id: string) => ({
				url: `/top-headlines?country=${id}&apiKey=6d5a24f1a7f84d97bdb01545079421af`,
				method: 'GET',
			}),
			providesTags: [{ type: 'News', id: 'LIST' }],
		}),
	}),
});

export const { useGetAllNewsQuery } = newsApi;
