import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
	url: {},
	genres: {},
};

export const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		getMovies: (state, action) => {
			state.url = action.payload;
		},
		getGenres: (state, action) => {
			state.genres = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { getMovies, getGenres } = moviesSlice.actions;

export default moviesSlice.reducer;
