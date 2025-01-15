import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../helpers/api";

/**
 * create story
 */
export const createStory = createAsyncThunk(
  "story/createStory",
  async (data) => {
    try {
      const postTime = new Date();
      const res = await API.post("/story", {
        ...data,
        createAt: postTime,
        updatedAt: null,
      });
      return res.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getAllStory = createAsyncThunk("story/getAllStory", async () => {
  try {
    const res = await API.get("/story");
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
