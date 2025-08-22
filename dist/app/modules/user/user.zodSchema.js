"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserZodSchema = exports.createUserZodSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const user_model_1 = require("./user.model");
exports.createUserZodSchema = zod_1.default.object({
    email: zod_1.default.string().email({ message: "Invalid email address formate." }).toLowerCase().trim(),
    password: zod_1.default.string().min(8, { message: "Password to short. Minimun 8 character long." })
        .regex(/\d/, { message: "Password must be contain at least one number" })
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { message: "Password must be at last one speacil character" })
        .regex(/[A-Z]/, { message: "Password must be contain must be one uppercase chacacter" })
        .regex(/[a-z]/, { message: "Password must be contain at last one lowarcast character" })
});
exports.updateUserZodSchema = zod_1.default.object({
    email: zod_1.default.string().email({ message: "Invalid email address formate." }).toLowerCase().trim().optional(),
    password: zod_1.default.string().min(8, { message: "Password to short. Minimun 8 character long." })
        .regex(/\d/, { message: "Password must be contain at least one number" })
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { message: "Password must be at last one speacil character" })
        .regex(/[A-Z]/, { message: "Password must be contain must be one uppercase chacacter" })
        .regex(/[a-z]/, { message: "Password must be contain at last one lowarcast character" }).optional(),
    role: zod_1.default.enum(Object.values(user_model_1.Role)).optional()
});
//# sourceMappingURL=user.zodSchema.js.map