import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/posts";

const slice = createSlice({
  initialState: {
    list: users,
    loading: false,
    lastFetch: null,
  },
  name: "users",
  reducers: {
    userCreated: (users, action) => {
      console.log(action);
      return users;
    },
  },
});

export const { userCreated } = slice.actions;
export default slice.reducer;
