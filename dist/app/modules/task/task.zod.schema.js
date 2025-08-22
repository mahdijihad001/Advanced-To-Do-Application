"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskZodSchema = exports.createTaskZodSchema = void 0;
const zod_1 = require("zod");
const StatusEnum = zod_1.z.enum(["pending", "in-progress", "completed"]);
const PriorityEnum = zod_1.z.enum(["low", "medium", "high"]);
const futureDate = zod_1.z.coerce
    .date()
    .refine((d) => d.getTime() >= new Date().setSeconds(0, 0), {
    message: "Due date must be past",
});
exports.createTaskZodSchema = zod_1.z.object({
    title: zod_1.z
        .string({ required_error: "Title is required" })
        .min(1, "Title is required")
        .trim(),
    description: zod_1.z
        .string({ required_error: "Description is required" })
        .min(1, "Description is required"),
    status: StatusEnum.optional().default("pending"),
    priority: PriorityEnum.optional().default("medium"),
    dueDate: futureDate,
    isComplite: zod_1.z.boolean().optional().default(false),
    isDeleted: zod_1.z.boolean().optional().default(false),
});
exports.updateTaskZodSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title cannot be empty").trim().optional(),
    description: zod_1.z
        .string()
        .min(1, "Description cannot be empty")
        .optional(),
    status: StatusEnum.optional(),
    priority: PriorityEnum.optional(),
    dueDate: futureDate.optional(),
    isComplite: zod_1.z.boolean().optional(),
    isDeleted: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=task.zod.schema.js.map