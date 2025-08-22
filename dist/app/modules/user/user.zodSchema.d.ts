import z from "zod";
export declare const createUserZodSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const updateUserZodSchema: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<[string]>>;
}, "strip", z.ZodTypeAny, {
    email?: string | undefined;
    password?: string | undefined;
    role?: string | undefined;
}, {
    email?: string | undefined;
    password?: string | undefined;
    role?: string | undefined;
}>;
//# sourceMappingURL=user.zodSchema.d.ts.map