import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import fetchDataSlice from './fetchDataSlice';

const rootReducer = combineReducers({
    user: userReducer,
    fetchData: fetchDataSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
