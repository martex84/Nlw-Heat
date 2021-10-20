import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { GetLast3MessagensController } from "./controller/GetLast3MessagensController";
import { MessagensController } from "./controller/MessagensController";
import EnsureAutheticate from "./middleware/EnsureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", EnsureAutheticate, new MessagensController().handle);

router.get("/messagens/last3", new GetLast3MessagensController().handle);

export { router };