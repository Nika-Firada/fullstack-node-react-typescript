// import { UserData } from './auth';
import { User } from "@prisma/client";
import { api } from "./api";

export type UserData = Omit<User, "id">;
type ResponseLoginData = User & { token: string };

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: '/user/login',
                method: 'POST',
                body: userData
            })
        }),
        register: builder.mutation<ResponseLoginData, UserData>({
            query: (userData) => ({
                url: '/user/register',
                method: 'POST',
                body: userData
            })
        }),
        current: builder.query<ResponseLoginData, void>({
            query: () => ({
                url: '/user/register',
                method: 'GET',
            })
        }),
    })
})

export const {useRegisterMutation, useCurrentQuery, useLoginMutation} = authApi;
export const {endpoints: {login, register, current}} = authApi;