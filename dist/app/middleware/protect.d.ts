import { NextFunction, Request, Response } from "express";
export declare const protect: (...auth: string[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=protect.d.ts.map