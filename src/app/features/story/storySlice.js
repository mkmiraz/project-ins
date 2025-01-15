import { createSlice } from "@reduxjs/toolkit";
import { createStory, getAllStory } from "./storyApiSlice";

const storySlice = createSlice({
  name: "story",
  initialState: {
    story: [],
    loading: false,
    error: false,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStory.fulfilled, (state, action) => {
        state.story = action.payload;
        state.loading = false;
      })
      .addCase(createStory.pending, (state) => {
        state.loading = false;
      })
      .addCase(createStory.fulfilled, (state, action) => {
        state.story.push(action.payload);
        state.loading = false;
      });
  },
});

// export
export default storySlice.reducer;
