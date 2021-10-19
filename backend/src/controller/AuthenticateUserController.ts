import { Request, Response } from 'express';
import { AutheticateUserServices } from '../services/AuthenticateUserServices';

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { code } = request.body;

        const authenticateUserServices = new AutheticateUserServices;

        try {
            const result = await authenticateUserServices.execute(code);

            return response.json(result);
        } catch (err) {
            response.json({ error: err.message })
        }
    }
}

export { AuthenticateUserController };