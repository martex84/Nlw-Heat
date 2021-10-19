import axios from "axios";


class AutheticateUserServices {
    async execute(code: string) {
        const url = 'https://github.com/login/oauth/access_token';

        const response = await axios.post(
            url,
            null,/*Possibilita devolver um valor, mas no caso seguirá como nulo*/
            {
                params: {
                    client_id: process.env.GITHUB_CLIENT_ID,
                    client_secret: process.env.GITHUB_CLIENT_SECRET,
                    code//Retorna codigo recebido durante a autenticação inicial
                },
                headers: {
                    "Accept": "application/json"
                }
            }
        )

        return response.data;
    }
}

export { AutheticateUserServices }