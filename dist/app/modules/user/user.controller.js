"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const user_services_1 = require("./user.services");
const sendResponse_1 = require("../../utils/sendResponse");
const AppError_1 = require("../../utils/AppError");
const createUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const result = await user_services_1.userServices.createUser(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "User registraction successfully.",
        data: result
    });
});
const logInUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new AppError_1.AppError(400, "Email & Password required");
    }
    ;
    const result = await user_services_1.userServices.logInUser(req.body);
    res.cookie("accessToken", result.token, { httpOnly: true, secure: false });
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 201,
        success: true,
        message: "Login successfully.",
        data: result.user
    });
});
const getAllUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const query = req.query;
    const result = await user_services_1.userServices.getAllUser(query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "All user retrived successfully.",
        data: result.data,
        meta: result.meta
    });
});
exports.userController = {
    createUser,
    logInUser,
    getAllUser
};
//# sourceMappingURL=user.controller.js.map