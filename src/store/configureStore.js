import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import logger from "./middlewares/logger";

import api from "./middlewares/api";
export default function () {
  return configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger("console"), api],
  });
}
