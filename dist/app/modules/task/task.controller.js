"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const task_services_1 = require("./task.services");
const sendResponse_1 = require("../../utils/sendResponse");
const AppError_1 = require("../../utils/AppError");
const createTask = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const authoreId = req.authUser.userId;
    const result = await task_services_1.taskServices.createTask(authoreId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Task Created Successfully.",
        data: result
    });
});
const getSingleTodo = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        throw new AppError_1.AppError(400, "Todo id not found.");
    }
    const result = await task_services_1.taskServices.getSingleTask(id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Task fetched successfully",
        data: result,
    });
});
const updateTask = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.authUser.userId;
    if (!id) {
        throw new AppError_1.AppError(400, "Task is not found");
    }
    const payload = req.body;
    const result = await task_services_1.taskServices.updateTask(id, payload, userId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Task updated successfully",
        data: result,
    });
});
const softDeleteTask = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { id } = req.params;
    const userId = req.authUser.userId;
    if (!id) {
        throw new AppError_1.AppError(400, "Task id not found.");
    }
    const result = await task_services_1.taskServices.softDeleteTask(id, userId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "Task soft deleted successfully",
        data: result,
    });
});
const getOwnTask = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const query = req.query;
    const id = req.authUser.userId;
    const result = await task_services_1.taskServices.getOwntask(id, query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "All task Retrive successfully.",
        data: result.data,
        meta: result.meta
    });
});
exports.taskController = {
    createTask,
    getSingleTodo,
    updateTask,
    softDeleteTask,
    getOwnTask
};
//# sourceMappingURL=task.controller.js.map