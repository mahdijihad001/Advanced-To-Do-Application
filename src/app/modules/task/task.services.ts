import { AppError } from "../../utils/AppError";
import { QueryBuilder } from "../../utils/QueryBuilder";
import { ITask } from "./task.interfaces";
import { Todo } from "./task.model";



const createTask = async (authoreId: string, payload: Partial<ITask>) => {
    const result = await Todo.create({ ...payload, authore: authoreId });
    return result;
};


const getSingleTask = async (id: string) => {
    const todo = await Todo.findById(id).populate("authore", "email");
    if (!todo) {
        throw new AppError(404, "Todo not found");
    }
    return todo;
};


const updateTask = async (id: string, payload: Partial<ITask>) => {
    const updateTask = await Todo.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });

    if (!updateTask) {
        throw new AppError(404, "Task not updated.");
    }

    return updateTask;
};


const softDeleteTask = async (id: string) => {
    const deletedTask = await Todo.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true }
    );

    if (!deletedTask) {
        throw new AppError(400, "Task not deleted.");
    }

    return deletedTask;
};

const getOwntask = async (id: string, query: Record<string, string>) => {

    const queryModel = new QueryBuilder(Todo.find(), query);

    const data = await queryModel.filter().sort().pagination().build();
    const meta = await queryModel.getMeta();

    return { data, meta };

}


export const taskServices = {
    createTask,
    getSingleTask,
    updateTask,
    softDeleteTask,
    getOwntask
}