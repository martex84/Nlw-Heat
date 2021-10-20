import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string
}

function EnsureAutheticate(
    request: Request,
    response: Response,
    next: NextFunction
) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid"
        })
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

        request.user_id = sub;
    } catch (error) {
        return response.status(401).json({
            errorCode: "token.expired"
        })
    }

    return next();
}

export default EnsureAutheticate;