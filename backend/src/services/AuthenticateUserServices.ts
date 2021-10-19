import axios from "axios";


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

        return response.data;
    }
}

export { AutheticateUserServices }