import { ITask } from "./task.interfaces";
import { Todo } from "./task.model";



const createTask = async (authoreId: string, payload: Partial<ITask>) => {
    const result = await Todo.create({ ...payload, authore: authoreId });
    return result;
};



export const taskServices = {
    createTask
}