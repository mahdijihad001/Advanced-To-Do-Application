import { Router } from "express";
import { taskController } from "./task.controller";
import { protect } from "../../middleware/protect";
import { Role } from "../user/user.model";
import { requestalidation } from "../../utils/requestValidation";
import { createTaskZodSchema } from "./task.zod.schema";

const taskRouter = Router();

taskRouter.post("/", protect(...Object.values(Role)), requestalidation(createTaskZodSchema), taskController.createTask);





export default taskRouter;