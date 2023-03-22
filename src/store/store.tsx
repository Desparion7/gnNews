import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from './apiSlice';
import newsViewSlice from './newsViewSlice';

export const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
		viewStyle: newsViewSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(newsApi.middleware),
	devTools: false,
});
