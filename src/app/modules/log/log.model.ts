import { Schema, model } from "mongoose";

export enum IAction {
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

const logSchema = new Schema<ILog>({
    action: { type: String, required: true },
    taskId: { type: String, required: true },
    userId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
}, { versionKey: false });

export const Log = model<ILog>("Log", logSchema);
