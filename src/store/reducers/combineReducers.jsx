import { combineReducers } from "redux";
import { languageReducer } from "./language";
import { moviesReducer } from "./movies";
import favouriteListSliceReducer from "../slices/FavouritesSlice";

export default combineReducers({
  language: languageReducer,
  movies: moviesReducer,
  favouriteList: favouriteListSliceReducer,
});
