import { combineReducers } from "redux";
import posts from "./posts";
import comments from "./comments";
import users from "./users";

const entities = combineReducers({
  posts,
  users,
  comments,
});

export default entities;
