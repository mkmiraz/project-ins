import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../helpers/api";

/**
 * create post
 */
export const createPost = createAsyncThunk("post/createPost", async (data) => {
  try {
    const postTime = new Date();
    const res = await API.post("/post", {
      ...data,
      createAt: postTime,
      updatedAt: null,
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

/**
 * Get All Post
 */

export const getAllPost = createAsyncThunk("post/getAllPost", async () => {
  try {
    const res = await API.get("/post");
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

/**
 * Delete Post
 */

export const deletePost = createAsyncThunk("post/getAllPost", async (id) => {
  try {
    await API.delete(`/post/${id}`);
    return id;
  } catch (error) {
    throw new Error(error.message);
  }
});
