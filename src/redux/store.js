import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bannerSlice from "./bannerSlice";
import genresSlice from "./genresSlice";

const rootReducer = combineReducers({
  user: userReducer,
  banner: bannerSlice,
  genres: genresSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
