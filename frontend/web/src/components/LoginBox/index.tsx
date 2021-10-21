import { VscGithubInverted } from "react-icons/vsc"
import { useEffect, useContext } from 'react';

import { AuthContext } from "../../context/auth";

import style from './styles.module.scss'

export function LoginBox() {

    const { signInUrl } = useContext(AuthContext);

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