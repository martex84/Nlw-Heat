import { VscGithubInverted } from "react-icons/vsc"

import style from './styles.module.scss'

export function LoginBox() {
    return (
        <>
            <div className={style.loginBoxWrapper}>
                <strong>
                    Entre  e compartilhe sua mensagem
                </strong>
                <a href="#" className={style.signInWithGithub}>
                    <VscGithubInverted size="24" />
                    Entrar com GitHub
                </a>
            </div>
        </>
    );
}