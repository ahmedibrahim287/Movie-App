import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../components/api/axiosInstance";

export const getAllMovies = createAsyncThunk(
  "3/movie/popular",
  ({currentPage, language}) =>
    axiosInstance
      .get("3/movie/popular", {
        params: { page: currentPage, language: language },
      })
      .then((response) => response.data)
      .catch((error) => error)
);

const initialState = {
  moviesList: [],
};

export const moviesListSlice = createSlice({
  name: "moviesList",
  initialState,
  reducers: {
    // getAllMovies: (state) => {
    //   return axiosInstance.get("3/movie/popular").then((result) => {
    //     state.moviesList = result.data.results;
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.moviesList = action.payload.results;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { getAllMovies } = moviesListSlice.actions;

export default moviesListSlice.reducer;
