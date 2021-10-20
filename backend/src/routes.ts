import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { MessagensController } from "./controller/MessagensController";
import EnsureAutheticate from "./middleware/EnsureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", EnsureAutheticate, new MessagensController().handle);

export { router };