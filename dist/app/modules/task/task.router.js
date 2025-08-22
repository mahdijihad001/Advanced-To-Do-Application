"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("./task.controller");
const protect_1 = require("../../middleware/protect");
const user_model_1 = require("../user/user.model");
const requestValidation_1 = require("../../utils/requestValidation");
const task_zod_schema_1 = require("./task.zod.schema");
const taskRouter = (0, express_1.Router)();
// Create Task
taskRouter.post("/", (0, protect_1.protect)(...Object.values(user_model_1.Role)), (0, requestValidation_1.requestalidation)(task_zod_schema_1.createTaskZodSchema), task_controller_1.taskController.createTask);
// Get own All Task
taskRouter.get("/", (0, protect_1.protect)(...Object.values(user_model_1.Role)), task_controller_1.taskController.getOwnTask);
// Get Single Task
taskRouter.get("/:id", (0, protect_1.protect)(...Object.values(user_model_1.Role)), task_controller_1.taskController.getSingleTodo);
// Task Update
taskRouter.put("/:id", (0, protect_1.protect)(...Object.values(user_model_1.Role)), task_controller_1.taskController.updateTask);
// Soft Delete task
taskRouter.post("/:id", (0, protect_1.protect)(...Object.values(user_model_1.Role)), task_controller_1.taskController.softDeleteTask);
exports.default = taskRouter;
//# sourceMappingURL=task.router.js.map