import { Request, Response } from 'express';
import { MessagensServices } from '../services/MessagensServices'

class MessagensController {
    async handle(request: Request, response: Response) {
        const { message } = request.body;
        const { user_id } = request;

        const service = new MessagensServices();

        const result = await service.execute(message, user_id);

        console.log(result)

        return response.json(result);


    }
}

export { MessagensController };