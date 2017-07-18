import { combineReducers } from "redux";
import videoReducer from "./videoReducer";
import popularVideosReducer from "./popularVideosReducer";

const rootReducer = combineReducers({
  videos: videoReducer,
  popular: popularVideosReducer
});

export default rootReducer;
