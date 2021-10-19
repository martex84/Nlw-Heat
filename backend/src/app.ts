import "dotenv/config";
import express from 'express';

const app = express();

app.get('/github', (request, response) => {
    response.redirect(`http://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
})

app.get('/signin/callback', (request, response) => {
    const { code } = request.query;

    response.json(code);
})

app.listen(4000, () => console.log('Início Server'))