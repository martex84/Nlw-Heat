import "dotenv/config";
import express, { json } from 'express';
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { router } from "./routes";

const app = express();

app.use(cors());

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*"/*Possibilita utilizar qualquer origem*/
    }
});

io.on("connection", socket => {
    console.log(`Usuário conectado ao socket ${socket.id}`);
})/*Possibilta escutar qualquer envento como emitir um evento*/

app.use(express.json());

app.use(router);

export { serverHttp, io };