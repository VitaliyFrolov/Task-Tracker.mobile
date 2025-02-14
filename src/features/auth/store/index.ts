import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

interface AuthState {
    token: string | null;
    isLoading: boolean;
}

const initialState: AuthState = {
    token: null,
    isLoading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        clearCredentials: (state) => {
            state.token = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setCredentials, clearCredentials, setLoading } = authSlice.actions;

export const loadToken = () => async (dispatch: any) => {
    dispatch(setLoading(true));

    const token = await SecureStore.getItemAsync("authToken");
    if (token) {
        dispatch(setCredentials(token));
    }
    
    dispatch(setLoading(false));
};

export const saveToken = async (token: string) => {
    await SecureStore.setItemAsync("authToken", token);
};

export const removeToken = async () => {
    await SecureStore.deleteItemAsync("authToken");
};

export const authReducer = authSlice.reducer;
