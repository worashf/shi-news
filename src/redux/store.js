import { configureStore, combineReducers } from '@reduxjs/toolkit';
import articleSlice from './articles/articles';
/* eslint-disable */

const rootReducer = combineReducers({
  articles: articleSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
