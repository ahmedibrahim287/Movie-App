import { combineReducers } from "redux";
import { languageReducer } from "./language";
import { loaderReducer } from "./loader";
import { moviesReducer } from "./movies";

export default combineReducers({
  language: languageReducer,
  loader: loaderReducer,
  movies: moviesReducer,
});
