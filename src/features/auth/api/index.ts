import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { saveToken, removeToken } from "../model/storage";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/",
        prepareHeaders: async (headers, { getState }) => {
            const token = (getState() as any).auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (body) => ({
                url: "user",
                method: "POST",
                body,
            }),
        }),
        login: builder.mutation({
            query: (body) => ({
                url: "auth/login",
                method: "POST",
                body,
            }),
        }),
        profile: builder.query({
            query: () => "auth/profile",
        }),
        saveToken: builder.mutation({
            query: (token: string) => {
                saveToken(token); 
                return token; 
            },
        }),
        removeToken: builder.mutation({
            query: () => {
                removeToken();
                return "";
            },
        }),
    }),
});

export const { 
    useRegisterMutation,
    useLoginMutation,
    useProfileQuery,
    useSaveTokenMutation,
    useRemoveTokenMutation
} = authApi;
