import { createSlice } from "@reduxjs/toolkit";
import { posts } from "../data/posts";

const slice = createSlice({
  initialState: {
    list: posts,
    loading: false,
    lastFetch: null,
  },
  name: "posts",
  reducers: {
    postCreated: (posts, action) => {
      return posts;
    },
  },
});

export const { postCreated } = slice.actions;
export default slice.reducer;
