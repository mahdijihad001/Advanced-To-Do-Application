import { NextFunction, Request, Response } from "express";
export declare const taskController: {
    createTask: (req: Request, res: Response, next: NextFunction) => void;
    getSingleTodo: (req: Request, res: Response, next: NextFunction) => void;
    updateTask: (req: Request, res: Response, next: NextFunction) => void;
    softDeleteTask: (req: Request, res: Response, next: NextFunction) => void;
    getOwnTask: (req: Request, res: Response, next: NextFunction) => void;
};
//# sourceMappingURL=task.controller.d.ts.map