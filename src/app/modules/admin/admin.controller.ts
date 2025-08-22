import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { adminServices } from "./admin.services";

const getAllTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;
    const result = await adminServices.getAllTask(query as Record<string, string>);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "All Task retrived successfully.",
        data: result.data,
        meta: result.meta
    })

});


const getAllLogs = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;
    const result = await adminServices.getAllLog(query as Record<string, string>);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "All Logs retrived successfully.",
        data: result.data,
        meta: result.meta
    })

})

export const adminController = {
    getAllTask,
    getAllLogs
}