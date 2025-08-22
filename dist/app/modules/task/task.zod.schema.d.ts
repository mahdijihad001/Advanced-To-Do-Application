import { z } from "zod";
export declare const createTaskZodSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["pending", "in-progress", "completed"]>>>;
    priority: z.ZodDefault<z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>>;
    dueDate: z.ZodEffects<z.ZodDate, Date, Date>;
    isComplite: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isDeleted: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    status: "pending" | "in-progress" | "completed";
    priority: "low" | "medium" | "high";
    dueDate: Date;
    isComplite: boolean;
    isDeleted: boolean;
}, {
    title: string;
    description: string;
    dueDate: Date;
    status?: "pending" | "in-progress" | "completed" | undefined;
    priority?: "low" | "medium" | "high" | undefined;
    isComplite?: boolean | undefined;
    isDeleted?: boolean | undefined;
}>;
export declare const updateTaskZodSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["pending", "in-progress", "completed"]>>;
    priority: z.ZodOptional<z.ZodEnum<["low", "medium", "high"]>>;
    dueDate: z.ZodOptional<z.ZodEffects<z.ZodDate, Date, Date>>;
    isComplite: z.ZodOptional<z.ZodBoolean>;
    isDeleted: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    description?: string | undefined;
    status?: "pending" | "in-progress" | "completed" | undefined;
    priority?: "low" | "medium" | "high" | undefined;
    dueDate?: Date | undefined;
    isComplite?: boolean | undefined;
    isDeleted?: boolean | undefined;
}, {
    title?: string | undefined;
    description?: string | undefined;
    status?: "pending" | "in-progress" | "completed" | undefined;
    priority?: "low" | "medium" | "high" | undefined;
    dueDate?: Date | undefined;
    isComplite?: boolean | undefined;
    isDeleted?: boolean | undefined;
}>;
//# sourceMappingURL=task.zod.schema.d.ts.map