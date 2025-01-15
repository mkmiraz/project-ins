import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post/postSlice";
import storyReducer from "./features/story/storySlice";

const store = configureStore({
  reducer: {
    posts: postReducer,
    story: storyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
