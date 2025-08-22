export declare enum IAction {
    CREATE_TASK = "CREATE_TASK",
    UPDATE_TASK = "UPDATE_TASK",
    DELETE_TASK = "DELETE_TASK"
}
export interface ILog {
    action: IAction;
    taskId: string;
    userId: string;
    timestamp: Date;
}
export declare const Log: import("mongoose").Model<ILog, {}, {}, {}, import("mongoose").Document<unknown, {}, ILog, {}, {}> & ILog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=log.model.d.ts.map