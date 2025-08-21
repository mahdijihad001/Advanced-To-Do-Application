import { z } from "zod";

const StatusEnum = z.enum(["pending", "in-progress", "completed"]);
const PriorityEnum = z.enum(["low", "medium", "high"]);

const futureDate = z.coerce
    .date()
    .refine((d) => d.getTime() >= new Date().setSeconds(0, 0), {
        message: "Due date must be past",
    });


export const createTaskZodSchema = z.object({
    title: z
        .string({ required_error: "Title is required" })
        .min(1, "Title is required")
        .trim(),
    description: z
        .string({ required_error: "Description is required" })
        .min(1, "Description is required"),
    status: StatusEnum.optional().default("pending"),
    priority: PriorityEnum.optional().default("medium"),
    dueDate: futureDate,
    isComplite: z.boolean().optional().default(false),
    isDeleted: z.boolean().optional().default(false),
});

export const updateTaskZodSchema = z.object({
    title: z.string().min(1, "Title cannot be empty").trim().optional(),
    description: z
        .string()
        .min(1, "Description cannot be empty")
        .optional(),
    status: StatusEnum.optional(),
    priority: PriorityEnum.optional(),
    dueDate: futureDate.optional(),
    isComplite: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
});