import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import EnsureAutheticate from "./middleware/EnsureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", EnsureAutheticate, new AuthenticateUserController().handle);

export { router };