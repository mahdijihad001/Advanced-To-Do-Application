import z from "zod";
import { Role } from "./user.model";

export const createUserZodSchema = z.object({
    email: z.string().email({ message: "Invalid email address formate." }).toLowerCase().trim(),
    password: z.string().min(8, { message: "Password to short. Minimun 8 character long." })
        .regex(/\d/, { message: "Password must be contain at least one number" })
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { message: "Password must be at last one speacil character" })
        .regex(/[A-Z]/, { message: "Password must be contain must be one uppercase chacacter" })
        .regex(/[a-z]/, { message: "Password must be contain at last one lowarcast character" })
});

export const updateUserZodSchema = z.object({
    email: z.string().email({ message: "Invalid email address formate." }).toLowerCase().trim().optional(),
    password: z.string().min(8, { message: "Password to short. Minimun 8 character long." })
        .regex(/\d/, { message: "Password must be contain at least one number" })
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { message: "Password must be at last one speacil character" })
        .regex(/[A-Z]/, { message: "Password must be contain must be one uppercase chacacter" })
        .regex(/[a-z]/, { message: "Password must be contain at last one lowarcast character" }).optional(),
    role: z.enum(Object.values(Role) as [string]).optional()
});