import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { userServices } from "./user.services";
import { sendResponse } from "../../utils/sendResponse";
import { AppError } from "../../utils/AppError";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const result = await userServices.createUser(req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User registraction successfully.",
        data: result
    })
});

const logInUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body;

    if (!email || !password) {
        throw new AppError(400, "Email & Password required");
    };

    const result = await userServices.logInUser(req.body);

    res.cookie("accessToken" , result.token , {httpOnly : true , secure : false})

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Login successfully.",
        data: result.user
    })
})

export const userController = {
    createUser,
    logInUser
}