import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteList: [],
  counter:0
};

export const favouriteListSlice = createSlice({
  name: "favouriteList",
  initialState,
  reducers: {
    addToFavourites: (state, action) => {
      /**
       * if the entered movie id is found then don't add to favourite.
       * if its not found,add it the the favourite list state
       */
      let isMovieInFavourite = state.favouriteList.findIndex(
        (movie) => movie.id == action.payload.id
      );
      if (isMovieInFavourite === -1) {
        state.favouriteList.push({...action.payload,favourite:true});
        state.counter+=1
      }
    },
    removeFromFavourites: (state, action) => {
      /**
       * if the entered movie id is found in favourite, filter the list array
       * with this movie id and return a new list doesn't contain the favourite one
       */
      let newFavouriteListAfterRemoving = state.favouriteList.filter(
        (movie) => movie.id !== action.payload
      );

      state.favouriteList = newFavouriteListAfterRemoving;
      state.counter-=1
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavourites, removeFromFavourites } =
  favouriteListSlice.actions;

export default favouriteListSlice.reducer;
