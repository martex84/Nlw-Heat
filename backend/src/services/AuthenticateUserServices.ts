import axios from "axios";
import prismaClient from "../prisma";
import { sign } from "jsonwebtoken";


interface IAccessTokenResponse {
    access_token: string
}

interface IUserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string
}

class AutheticateUserServices {
    async execute(code: string) {
        const url = 'https://github.com/login/oauth/access_token';

        const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(
            url,
            null,/*Possibilita devolver um valor, mas no caso seguirá como nulo*/
            {
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                    code//Retorna codigo recebido durante a autenticação inicial
                },
                headers: {
                    Accept: "application/json"
                }
            }
        )

        const response = await axios.get<IUserResponse>("https://api.github.com/user", {
            headers: {
                authorization: `bearer ${accessTokenResponse.access_token}`,/* Envia Tipo do Token e o Token*/
            }
        })

        const { login, avatar_url, id, name } = response.data;

        let user = await prismaClient.user.findFirst({
            where: {
                github_id: id
            }
        });

        if (!user) {
            user = await prismaClient.user.create({
                data: {
                    github_id: id,
                    name,
                    avatar_url,
                    login
                }
            })
        }

        const token = sign(
            {
                user: { //Valor que irá ser mostrado no tokien
                    name: user.name,
                    avatar_url: user.avatar_url,
                    id: user.id,
                },
            },
            process.env.JWT_SECRET, //Chave de MD5
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );

        return { token, user };
    }
}

export { AutheticateUserServices }