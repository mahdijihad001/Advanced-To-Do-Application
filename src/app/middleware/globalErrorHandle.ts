import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { envVars } from "../config/env";
import { ZodError } from "zod";
import { IErrorSourse } from "../interfaces/errorInterfaces";

export const globalErrorHandle = (err: any, req: Request, res: Response, next: NextFunction) => {

    let statusCode = 500;
    let message = "Something went wrong!";
    let errorStore : IErrorSourse[] = []

    if (err instanceof ZodError) {
        err.issues.forEach((issue) =>{
            errorStore.push({
                path : issue.path[issue.path.length -1] as string,
                message : issue.message
            })
        })
    }
    else if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    } else if (err instanceof Error) {
        message = err.message;
        statusCode = 500
    };

    res.status(statusCode).json({
        success: false,
        message,
        errorStore,
        error: envVars.DEV_ENVIRONMENT === "development" ? err : null,
        stack: envVars.DEV_ENVIRONMENT === "development" ? err.stack : null
    })


}