import { createSlice } from '@reduxjs/toolkit';

const newsViewSlice = createSlice({
	name: 'newsView',
	initialState: {
		view: 'blocks',
	},
	reducers: {
		changeView(state, action) {
			state.view = action.payload;
		},
	},
});

export default newsViewSlice.reducer;
export const { changeView } = newsViewSlice.actions;
export const lastUsedView = (state: any) => state.viewStyle.view;
