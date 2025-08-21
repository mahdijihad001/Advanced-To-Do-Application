import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import jwt, { JwtPayload } from "jsonwebtoken";
import { envVars } from "../config/env";
import { User } from "../modules/user/user.model";

export const protext = (...auth: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken;

    if (!token) {
        throw new AppError(403, "User not authoraized.");
    };

    let decodedToken: JwtPayload;

    try {

        decodedToken = jwt.verify(token, envVars.ACCESS_SECRET as string) as JwtPayload

    } catch (error) {
        throw new AppError(400, "User token not valid. Please login again.");
    };

    const existUser = await User.findOne({ email: decodedToken.email });

    if (!existUser) {
        throw new AppError(400, "User not valid. Please register");
    };

    if (auth.length && !auth.includes(decodedToken.role)) {
        throw new AppError(400, "ou are not parmited access this route")
    }

    req.authUser = decodedToken

    next();

}