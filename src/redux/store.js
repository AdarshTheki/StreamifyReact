import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import bannerSlice from "./bannerSlice";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  banner: bannerSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
