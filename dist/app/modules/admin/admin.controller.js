"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const admin_services_1 = require("./admin.services");
const getAllTask = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const query = req.query;
    const result = await admin_services_1.adminServices.getAllTask(query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "All Task retrived successfully.",
        data: result.data,
        meta: result.meta
    });
});
const getAllLogs = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const query = req.query;
    const result = await admin_services_1.adminServices.getAllLog(query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: 200,
        success: true,
        message: "All Logs retrived successfully.",
        data: result.data,
        meta: result.meta
    });
});
exports.adminController = {
    getAllTask,
    getAllLogs
};
//# sourceMappingURL=admin.controller.js.map