import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://api.themoviedb.org/3";
const CENTER_URL = "/movie/upcoming?api_key=";
const API_KEY = "aef1d66a58269885e6bf92bc2e46ed15";

const fetchUpComing = createAsyncThunk("movies/fetchUpComing", async () => {
  const response = await fetch(BASE_URL + CENTER_URL + API_KEY);
  const data = await response.json();
  return data.results;
});

const bannerSlice = createSlice({
  name: "upComing",
  initialState: {
    banner: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpComing.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUpComing.fulfilled, (state, action) => {
        state.banner = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUpComing.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false;
      });
  },
});

export { fetchUpComing };

export default bannerSlice.reducer;
