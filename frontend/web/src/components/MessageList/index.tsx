import style from "./styles.module.scss";

import logoImg from '../../assets/logo.svg';

export function MessageList() {
    return (
        <>
            <div className={style.messageListWrapper}>
                <img src={logoImg} alt="DoWhite 2021" />

                <ul className={style.messageList}>
                    <li className={style.message}>
                        <p className={style.messageContent}>
                            Mensagem
                        </p>

                        <div className={style.messageUser}>
                            <div className={style.userImage}>
                                <img src="https://github.com/martex84.png" alt="Martex" />
                            </div>
                            <span>
                                Martex
                            </span>
                        </div>
                    </li>

                    <li className={style.message}>
                        <p className={style.messageContent}>
                            Mensagem
                        </p>

                        <div className={style.messageUser}>
                            <div className={style.userImage}>
                                <img src="https://github.com/martex84.png" alt="Martex" />
                            </div>
                            <span>
                                Martex
                            </span>
                        </div>
                    </li>

                    <li className={style.message}>
                        <p className={style.messageContent}>
                            Mensagem
                        </p>

                        <div className={style.messageUser}>
                            <div className={style.userImage}>
                                <img src="https://github.com/martex84.png" alt="Martex" />
                            </div>
                            <span>
                                Martex
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}