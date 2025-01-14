import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post/postSlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
