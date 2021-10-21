import { VscGithubInverted } from "react-icons/vsc"
import { useEffect } from 'react';

import { api } from "../../services/api";

import style from './styles.module.scss'

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name: string;
        login: string;
    }
}

export function LoginBox() {

    const signInUrl = `http://github.com/login/oauth/authorize?client_id=df298856218628d2bcff`

    async function signIn(githubCode: string) {
        const respose = await api.post<AuthResponse>("/authenticate", {
            code: githubCode
        })

        const { token, user } = respose.data;

        localStorage.setItem('@dowhile:token', token);

        console.log(user);
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
        <>
            <div className={style.loginBoxWrapper}>
                <strong>
                    Entre  e compartilhe sua mensagem
                </strong>
                <a href={signInUrl} className={style.signInWithGithub}>
                    <VscGithubInverted size="24" />
                    Entrar com GitHub
                </a>
            </div>
        </>
    );
}