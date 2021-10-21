import style from './styles.module.scss'

export function LoginBox() {
    return (
        <>
            <div className={style.loginBoxWrapper}>
                <strong>
                    Entre  e compartilhe sua mensagem
                </strong>
                <a href="#" className={style.signInWithGithub}>

                </a>
            </div>
        </>
    );
}