import { NextFunction, Request, Response } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    var token: string | undefined = req.headers.authorization as string
    token = token.split(" ") [1]

    if (token) {
        next()
        return;
    }
    res.status(401).json({message: "No autorizado por falta de token"})
}