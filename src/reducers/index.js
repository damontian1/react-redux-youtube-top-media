import { combineReducers } from "redux";
import videoReducer from "./videoReducer";
import topMusicReducer from "./topMusicReducer";
import topMoviesReducer from "./topMoviesReducer";

const rootReducer = combineReducers({
  videos: videoReducer,
  topMusic: topMusicReducer,
  topMovies: topMoviesReducer
});

export default rootReducer;
