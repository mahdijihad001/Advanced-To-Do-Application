"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandle = void 0;
const AppError_1 = require("../utils/AppError");
const env_1 = require("../config/env");
const zod_1 = require("zod");
const globalErrorHandle = (err, req, res, next) => {
    let statusCode = 500;
    let message = "Something went wrong!";
    let errorStore = [];
    // Zod Error handle
    if (err instanceof zod_1.ZodError) {
        err.issues.forEach((issue) => {
            errorStore.push({
                path: issue.path[issue.path.length - 1],
                message: issue.message
            });
        });
        statusCode = 400;
        message = "Zod Validation Error";
    }
    // ------- Mongoose duplicate Error
    else if (err.code === 11000) {
        const duplicate = err.message.match(/"([^"]*)"/);
        message = `${duplicate[1]} already exist!`;
        statusCode = 400;
    }
    // Custom App Error handle
    else if (err instanceof AppError_1.AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if (err instanceof Error) {
        message = err.message;
        statusCode = 500;
    }
    ;
    res.status(statusCode).json({
        success: false,
        message,
        errorStore,
        error: env_1.envVars.DEV_ENVIRONMENT === "development" ? err : null,
        stack: env_1.envVars.DEV_ENVIRONMENT === "development" ? err.stack : null
    });
};
exports.globalErrorHandle = globalErrorHandle;
//# sourceMappingURL=globalErrorHandle.js.map