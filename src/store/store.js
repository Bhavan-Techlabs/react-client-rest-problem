import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/userReducer";

export const store = configureStore({
  //TODO: Config the reducer
  reducer: {
    users: userReducer,
  },
});
