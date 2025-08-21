import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const requestalidation = (zodSchama: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
    try {

        req.body = await zodSchama.parseAsync(req.body);

        next();

    } catch (error) {
        next(error);
    }
}