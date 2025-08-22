"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const env_1 = require("../../config/env");
const constrain_1 = require("../../constrain/constrain");
const AppError_1 = require("../../utils/AppError");
const jwt_1 = require("../../utils/jwt");
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const user_model_1 = require("./user.model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createUser = async (payload) => {
    const existUser = await user_model_1.User.findOne({ email: payload.email });
    if (existUser) {
        throw new AppError_1.AppError(400, "User already exist.");
    }
    ;
    const createUser = await user_model_1.User.create(payload);
    return createUser;
};
const logInUser = async (payload) => {
    const findUser = await user_model_1.User.findOne({ email: payload.email });
    if (!findUser) {
        throw new AppError_1.AppError(404, "User not valid. Please registraction");
    }
    ;
    const matchPassword = await bcryptjs_1.default.compare(payload.password, findUser.password);
    if (!matchPassword) {
        throw new AppError_1.AppError(400, "Invalid Password");
    }
    ;
    const { password, ...user } = findUser.toObject();
    const token = await (0, jwt_1.generateToken)(findUser, env_1.envVars.ACCESS_SECRET);
    return {
        user, token
    };
};
const getAllUser = async (query) => {
    const queryModel = new QueryBuilder_1.QueryBuilder(user_model_1.User.find(), query);
    const data = await queryModel.filter().search(constrain_1.userSearchableFilds).sort().pagination().build();
    const meta = await queryModel.getMeta();
    return { data, meta };
};
exports.userServices = {
    createUser,
    logInUser,
    getAllUser
};
//# sourceMappingURL=user.services.js.map