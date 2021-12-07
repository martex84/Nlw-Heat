import { Request, Response } from 'express';
import { UserProfileServices } from '../services/UserProfileServices'

class UserProfileController {
    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const service = new UserProfileServices();

        const result = await service.execute(user_id);

        return response.json(result);

    }
}

export { UserProfileController };