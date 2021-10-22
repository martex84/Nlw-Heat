import { useEffect, useState } from 'react'
import io from "socket.io-client";

import { api } from "../../services/api";

import style from "./styles.module.scss";
import logoImg from '../../assets/logo.svg';

type Message = {
    id: string;
    text: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

const messageQueue: Message[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage: Message) => {
    messageQueue.push(newMessage);
})

export function MessageList() {

    const [messagens, setMessagens] = useState<Message[]>([])

    useEffect(() => {
        const timer = setInterval(() => {
            if (messageQueue.length > 0) {
                setMessagens(prevState => {
                    const valorRetorno = [
                        messageQueue[0],
                        prevState[0],
                        prevState[1]
                    ].filter(Boolean)

                    return valorRetorno;
                });

                messageQueue.shift();
            }
        }, 3000)
    }, [])

    useEffect(() => {
        api.get<Message[]>("/messagens/last3").then(response => {
            setMessagens(response.data)
        })
    }, [])

    return (
        <>
            <div className={style.messageListWrapper}>
                <img src={logoImg} alt="DoWhite 2021" />

                <ul className={style.messageList}>
                    {messagens.map(data => {
                        return (
                            <li className={style.message} key={data.id}>
                                <p className={style.messageContent}>
                                    {data.text}
                                </p>

                                <div className={style.messageUser}>
                                    <div className={style.userImage}>
                                        <img src={data.user.avatar_url} alt={data.user.name} />
                                    </div>
                                    <span>
                                        {data.user.name}
                                    </span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}