import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    token: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.error = null;
        },
        clearCredentials: (state) => {
            state.token = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

export const { setCredentials, clearCredentials, setLoading, setError } = authSlice.actions;

export const authReducer = authSlice.reducer;
