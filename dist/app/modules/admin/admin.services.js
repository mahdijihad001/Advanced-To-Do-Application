"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminServices = void 0;
const constrain_1 = require("../../constrain/constrain");
const QueryBuilder_1 = require("../../utils/QueryBuilder");
const log_model_1 = require("../log/log.model");
const task_model_1 = require("../task/task.model");
const getAllTask = async (query) => {
    const queryModel = new QueryBuilder_1.QueryBuilder(task_model_1.Todo.find(), query);
    const data = await queryModel.filter().search(constrain_1.taskSearchableFild).sort().pagination().build();
    const meta = await queryModel.getMeta();
    return { data, meta };
};
const getAllLog = async (query) => {
    const queryModel = new QueryBuilder_1.QueryBuilder(log_model_1.Log.find(), query);
    const data = await queryModel.filter().sort().pagination().build();
    const meta = await queryModel.getMeta();
    return { data, meta };
};
exports.adminServices = {
    getAllTask,
    getAllLog
};
//# sourceMappingURL=admin.services.js.map