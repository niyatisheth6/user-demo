import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUSer, getUser, updateUser } from "./userActions";

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: []
    },
    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            //create user
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // get user
            .addCase(getUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // delete user
            .addCase(deleteUSer.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteUSer.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload
                if (id) {
                    state.users = state.users.filter((user) => user.id !== id)
                }
            })
            .addCase(deleteUSer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //update user
            .addCase(updateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = state.users.map((user) =>
                    user.id === action.payload.id ? action.payload : user
                );

            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default userDetail.reducer;

export const { searchUser } = userDetail.actions;