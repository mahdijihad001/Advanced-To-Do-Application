import { Router } from "express";
import { taskController } from "./task.controller";
import { protect } from "../../middleware/protect";
import { Role } from "../user/user.model";
import { requestalidation } from "../../utils/requestValidation";
import { createTaskZodSchema } from "./task.zod.schema";

const taskRouter = Router();

// Create Task
taskRouter.post("/", protect(...Object.values(Role)), requestalidation(createTaskZodSchema), taskController.createTask);

// Get own All Task
taskRouter.get("/", protect(...Object.values(Role)), taskController.getOwnTask);

// Get Single Task
taskRouter.get("/:id", protect(...Object.values(Role)), taskController.getSingleTodo);

// Task Update
taskRouter.put("/:id", protect(...Object.values(Role)), taskController.updateTask);

// Soft Delete task
taskRouter.post("/:id", protect(...Object.values(Role)), taskController.softDeleteTask);



export default taskRouter;