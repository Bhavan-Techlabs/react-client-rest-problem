import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, id) => {
      const user = state.users.find((user) => user.id === id);
      console.log(user);
      return user;
    },
    addUsers: (state, users) => {
      state.users = users.payload;
    },
  },
});

export const { getUser, addUsers } = counterSlice.actions;
export default counterSlice.reducer;
