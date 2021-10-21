import { VscGithubInverted, VscSignOut } from "react-icons/vsc"
import { useState, useContext, ReactNode, ReactEventHandler, FormEvent } from 'react';

import { AuthContext } from "../../context/auth";

import style from './styles.module.scss'
import { api } from "../../services/api";

export function SendMessageForm() {

    const { user, signOut } = useContext(AuthContext);

    const [message, setMessage] = useState("");

    async function handleSendMessage(event: FormEvent) {
        event.preventDefault();

        if (!message.trim()) {
            return;
        }

        await api.post("messages", { message })

        setMessage("");
    }

    return (
        <>
            <div className={style.sendMessageFormWrapper}>
                <button className={style.signOutButton} onClick={signOut}>
                    <VscSignOut size="32" />
                </button>

                <header className={style.userInformation}>
                    <div className={style.userImage}>
                        <img src={user?.avatar_url} alt={user?.name} />
                    </div>

                    <strong className={style.userName}>
                        {user?.name}
                    </strong>

                    <span className={style.userGithub}>
                        <VscGithubInverted size="16" />
                        {user?.login}
                    </span>
                </header>

                <form className={style.sendMessageForm} onSubmit={event => handleSendMessage(event)}>
                    <label htmlFor="message">
                        Mensagem
                    </label>

                    <textarea
                        name="message"
                        id="message"
                        placeholder="Qual sua expectativa para o evento?"
                        onChange={event => setMessage(event.target.value)}
                        value={message}
                    />

                    <button type="submit">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </>
    );
}