"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskServices = void 0;
const AppError_1 = require("../../utils/AppError");
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const log_model_1 = require("../log/log.model");
const task_model_1 = require("./task.model");
const createTask = async (authoreId, payload) => {
    const result = await task_model_1.Todo.create({ ...payload, authore: authoreId });
    await log_model_1.Log.create({ action: log_model_1.IAction.CREATE_TASK, taskId: result._id, userId: authoreId });
    return result;
};
const getSingleTask = async (id) => {
    const todo = await task_model_1.Todo.findById(id).populate("authore", "email");
    if (!todo) {
        throw new AppError_1.AppError(404, "Todo not found");
    }
    return todo;
};
const updateTask = async (id, payload, userId) => {
    const updateTask = await task_model_1.Todo.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
    if (!updateTask) {
        throw new AppError_1.AppError(404, "Task not updated.");
    }
    await log_model_1.Log.create({ action: log_model_1.IAction.UPDATE_TASK, taskId: id, userId: userId });
    return updateTask;
};
const softDeleteTask = async (id, userId) => {
    const deletedTask = await task_model_1.Todo.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!deletedTask) {
        throw new AppError_1.AppError(400, "Task not deleted.");
    }
    await log_model_1.Log.create({ action: log_model_1.IAction.DELETE_TASK, taskId: id, userId: userId });
    return deletedTask;
};
const getOwntask = async (id, query) => {
    const queryModel = new QueryBuilder_1.QueryBuilder(task_model_1.Todo.find(), query);
    const data = await queryModel.filter().sort().pagination().build();
    const meta = await queryModel.getMeta();
    return { data, meta };
};
exports.taskServices = {
    createTask,
    getSingleTask,
    updateTask,
    softDeleteTask,
    getOwntask
};
//# sourceMappingURL=task.services.js.map