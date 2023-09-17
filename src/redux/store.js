import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bannerSlice from "./bannerSlice";
import genresSlice from "./genresSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  banner: bannerSlice,
  genres: genresSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
