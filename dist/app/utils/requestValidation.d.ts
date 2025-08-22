import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
export declare const requestalidation: (zodSchama: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=requestValidation.d.ts.map