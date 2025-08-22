import { taskSearchableFild } from "../../constrain/constrain";
import { QueryBuilder } from "../../utils/QueryBuilder";
import { Log } from "../log/log.model";
import { Todo } from "../task/task.model";

const getAllTask = async (query: Record<string, string>) => {
    const queryModel = new QueryBuilder(Todo.find(), query);

    const data = await queryModel.filter().search(taskSearchableFild).sort().pagination().build();
    const meta = await queryModel.getMeta();

    return { data, meta }

};

const getAllLog = async (query: Record<string, string>) => {
    const queryModel = new QueryBuilder(Log.find(), query);

    const data = await queryModel.filter().sort().pagination().build();
    const meta = await queryModel.getMeta();

    return { data, meta }
}

export const adminServices = {
    getAllTask,
    getAllLog
}