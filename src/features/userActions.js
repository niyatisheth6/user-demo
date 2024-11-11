import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

//create actions
export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "https://64a3a3c9c3b509573b565930.mockapi.io/userdata",
                data
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

// get actions
export const getUser = createAsyncThunk(
    "getUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                "https://64a3a3c9c3b509573b565930.mockapi.io/userdata"
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

//detele actions
export const deleteUSer = createAsyncThunk(
    "deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.delete(
                `https://64a3a3c9c3b509573b565930.mockapi.io/userdata/${id}`
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

//update actions
export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `https://64a3a3c9c3b509573b565930.mockapi.io/userdata/${data.id}`,
                data
            );
            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);
