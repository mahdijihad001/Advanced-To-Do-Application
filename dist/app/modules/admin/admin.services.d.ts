export declare const adminServices: {
    getAllTask: (query: Record<string, string>) => Promise<{
        data: (import("mongoose").Document<unknown, {}, import("../task/task.interfaces").ITask, {}, {}> & import("../task/task.interfaces").ITask & Required<{
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
    getAllLog: (query: Record<string, string>) => Promise<{
        data: (import("mongoose").Document<unknown, {}, import("../log/log.model").ILog, {}, {}> & import("../log/log.model").ILog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
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
//# sourceMappingURL=admin.services.d.ts.map