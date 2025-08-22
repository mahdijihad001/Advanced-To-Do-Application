import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { taskServices } from "./task.services";
import { sendResponse } from "../../utils/sendResponse";
import { AppError } from "../../utils/AppError";


const createTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authoreId: string = req.authUser.userId;

    const result = await taskServices.createTask(authoreId, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Task Created Successfully.",
        data: result
    })

});



const getSingleTodo = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    if (!id) {
        throw new AppError(400, "Todo id not found.");
    }
    const result = await taskServices.getSingleTask(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Task fetched successfully",
        data: result,
    });
}
);


const updateTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const userId = req.authUser.userId
    if (!id) {
        throw new AppError(400, "Task is not found");
    }
    const payload = req.body;

    const result = await taskServices.updateTask(id, payload, userId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Task updated successfully",
        data: result,
    });
}
);


const softDeleteTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
     const userId = req.authUser.userId

    if (!id) {
        throw new AppError(400, "Task id not found.");
    }

    const result = await taskServices.softDeleteTask(id , userId);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Task soft deleted successfully",
        data: result,
    });
}
);

const getOwnTask = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;
    const id = req.authUser.userId
    const result = await taskServices.getOwntask(id, query as Record<string, string>);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "All task Retrive successfully.",
        data: result.data,
        meta: result.meta
    })

});




export const taskController = {
    createTask,
    getSingleTodo,
    updateTask,
    softDeleteTask,
    getOwnTask
}