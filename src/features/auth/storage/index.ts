import { setCredentials, setError, setLoading } from "../store";
import * as SecureStore from "expo-secure-store";

export const loadToken = () => async (dispatch: any) => {
    dispatch(setLoading(true));

    const token = await SecureStore.getItemAsync("authToken");

    if (token) {
        dispatch(setCredentials(token));
    } else {
        dispatch(setError("No token found"));
    }

    dispatch(setLoading(false));
};

export const getToken = async () => {
    return SecureStore.getItemAsync('authToken');
}

export const saveToken = async (token: string) => {
    await SecureStore.setItemAsync("authToken", token);
};

export const removeToken = async () => {
    await SecureStore.deleteItemAsync("authToken");
};
