"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const AppError_1 = require("../utils/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
const user_model_1 = require("../modules/user/user.model");
const protect = (...auth) => async (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        throw new AppError_1.AppError(403, "User not authoraized.");
    }
    ;
    let decodedToken;
    try {
        decodedToken = jsonwebtoken_1.default.verify(token, env_1.envVars.ACCESS_SECRET);
    }
    catch (error) {
        throw new AppError_1.AppError(400, "User token not valid. Please login again.");
    }
    ;
    const existUser = await user_model_1.User.findOne({ email: decodedToken.email });
    if (!existUser) {
        throw new AppError_1.AppError(400, "User not valid. Please register");
    }
    ;
    if (auth.length && !auth.includes(decodedToken.role)) {
        throw new AppError_1.AppError(400, "You are not parmited access this route");
    }
    req.authUser = decodedToken;
    next();
};
exports.protect = protect;
//# sourceMappingURL=protect.js.map