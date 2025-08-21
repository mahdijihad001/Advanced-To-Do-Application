import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { taskServices } from "./task.services";
import { sendResponse } from "../../utils/sendResponse";


const createTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authoreId: string = req.authUser.userId;

    const result = await taskServices.createTask(authoreId, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Todo Created Successfully.",
        data: result
    })

});


export const taskController = {
    createTask
}