import mongoose from "mongoose";
import { ITask } from "./task.interfaces";
export declare const Todo: mongoose.Model<ITask, {}, {}, {}, mongoose.Document<unknown, {}, ITask, {}, {}> & ITask & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=task.model.d.ts.map