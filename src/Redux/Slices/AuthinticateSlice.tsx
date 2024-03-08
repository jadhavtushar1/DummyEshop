import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authUrl: string | undefined = process.env.REACT_APP_API_USER_AUTH || '';

export const authenticateUser = createAsyncThunk('getUserData', async (query: { username: string, password: string }) => {
    const resp = await axios.post(authUrl, query);
    return resp.data;
});

export interface UserState {
    authData: UserDataFormat;
    error: number | null; // New field to store authentication error message
}

export interface UserDataFormat {
    id: number | null;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}

const initialState: UserState = {
    authData: {
        id: null,
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        image: '',
        token: ''
    },
    error: null // Initial error state is null
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(authenticateUser.fulfilled, (state, action) => {
            const userData: any = action.payload;
            return {
                ...state,
                authData: userData,
                error: 0 // Reset error state on successful authentication
            };
        });
        builder.addCase(authenticateUser.rejected, (state, action) => {
            state.error = action.error.message ? 1 : 0 ; // Store the error message in the state, or a fallback message if not available
        });
    },
});

export default authSlice.reducer;
