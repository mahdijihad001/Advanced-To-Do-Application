import { ITask } from "./task.interfaces";
export declare const taskServices: {
    createTask: (authoreId: string, payload: Partial<ITask>) => Promise<import("mongoose").Document<unknown, {}, ITask, {}, {}> & ITask & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    getSingleTask: (id: string) => Promise<import("mongoose").Document<unknown, {}, ITask, {}, {}> & ITask & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    updateTask: (id: string, payload: Partial<ITask>, userId: string) => Promise<import("mongoose").Document<unknown, {}, ITask, {}, {}> & ITask & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    softDeleteTask: (id: string, userId: string) => Promise<import("mongoose").Document<unknown, {}, ITask, {}, {}> & ITask & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    getOwntask: (id: string, query: Record<string, string>) => Promise<{
        data: (import("mongoose").Document<unknown, {}, ITask, {}, {}> & ITask & Required<{
            _id: string;
        }> & {
            __v: number;
        })[];
        meta: {
            page: number;
            limit: number;
            totalDocument: number;
            totalPage: number;
        };
    }>;
};
//# sourceMappingURL=task.services.d.ts.map