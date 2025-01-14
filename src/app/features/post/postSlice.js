import { createSlice } from "@reduxjs/toolkit";
import { createPost, deletePost, getAllPost, updatePost } from "./postApiSlice";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.loading = false;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((data) => data.id != action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((item) => {
          if (item.id == action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        });
      });
  },
});

// export the reducer
export default postSlice.reducer;
