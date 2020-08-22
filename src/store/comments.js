import { createSlice } from "@reduxjs/toolkit";
import { comments } from "../data/posts";

const slice = createSlice({
  initialState: {
    list: comments,
    loading: false,
    lastFetch: null,
  },
  name: "comments",
  reducers: {
    commentCreated: (comments, action) => {
      console.log(action);
    },
  },
});

export const { commentCreated } = slice.actions;
export default slice.reducer;
