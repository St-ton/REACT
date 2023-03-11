import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; //userReducer - это userSlice.reducer из userSlice.js;

// export const store = configureStore({
//тогда в index.js - import { store } from './redux/store';

// export default configureStore({
//тогда в index.js - import store from './redux/store';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
