import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api'

type User = {
    id: string;
    name: string;
    login: string;
    avatar_url: string;
}

type AuthContextData = {
    user: User | null;
    signInUrl: string;
}

type AuthProvider = {
    children: ReactNode;
}

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {

    const [user, SetUser] = useState<User | null>(null);

    const signInUrl = `http://github.com/login/oauth/authorize?client_id=df298856218628d2bcff`

    async function signIn(githubCode: string) {
        const respose = await api.post<AuthResponse>("/authenticate", {
            code: githubCode
        })

        const { token, user } = respose.data;

        localStorage.setItem('@dowhile:token', token);

        SetUser(user);
    }

    useEffect(() => {
        const url = window.location.href;
        const dividerUrl = '?code=';

        const hasGithubCode = url.includes(dividerUrl);

        if (hasGithubCode) {
            const [urlWithoutCode, githubCode] = url.split(dividerUrl);

            window.history.pushState({}, '', urlWithoutCode);

            signIn(githubCode);
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signInUrl, user }}>
            {props.children}
        </AuthContext.Provider>
    );
}