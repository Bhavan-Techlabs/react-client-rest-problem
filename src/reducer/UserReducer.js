import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: '',
            name: '',
            avatar: '',
            email: '',
            address: '',
        },
    ],
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { getUsers, addUsers } = counterSlice.actions;

export default counterSlice.reducer;
