"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envVars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
;
const loadEnvironmentVariables = () => {
    const requiredEnvironment = ["PORT", "DEV_ENVIRONMENT", "MONGO_URI", "ACCESS_SECRET", "ADMIN_EMAIL", "ADMIN_PASS"];
    requiredEnvironment.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable!`);
        }
    });
    return {
        PORT: process.env.PORT,
        DEV_ENVIRONMENT: process.env.DEV_ENVIRONMENT,
        MONGO_URI: process.env.MONGO_URI,
        ACCESS_SECRET: process.env.ACCESS_SECRET,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        ADMIN_PASS: process.env.ADMIN_PASS
    };
};
exports.envVars = loadEnvironmentVariables();
//# sourceMappingURL=env.js.map