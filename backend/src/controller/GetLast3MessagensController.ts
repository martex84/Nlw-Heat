import { Request, Response } from 'express';
import { GetLast3MessagensServices } from '../services/GetLast3MessagensServices'

class GetLast3MessagensController {
    async handle(request: Request, response: Response) {

        const service = new GetLast3MessagensServices();

        const result = await service.execute();

        return response.json(result);

    }
}

export { GetLast3MessagensController };