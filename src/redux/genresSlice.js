import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
  name: "genre",
  initialState: {
    movieList: [],
    tvList: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movieList = action.payload;
    },
    setTv: (state, action) => {
      state.tvList = action.payload;
    },
  },
});

export const { setMovies, setTv } = genreSlice.actions;
export default genreSlice.reducer;
