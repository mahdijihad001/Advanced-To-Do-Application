"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = async (payload, jwtSecrate) => {
    const data = {
        userId: payload._id,
        email: payload.email,
        role: payload.role
    };
    const token = jsonwebtoken_1.default.sign(data, jwtSecrate, { expiresIn: "7d" });
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=jwt.js.map