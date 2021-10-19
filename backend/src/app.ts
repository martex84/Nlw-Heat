import "dotenv/config";
import express, { json } from 'express';
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.get('/github', (request, response) => {
    response.redirect(`http://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
})

app.get('/signin/callback', (request, response) => {
    const { code } = request.query;

    response.json(code);
})

app.listen(4000, () => console.log('Início Server'))