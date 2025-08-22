import { Router } from "express";
import { protect } from "../../middleware/protect";
import { Role } from "../user/user.model";
import { adminController } from "./admin.controller";

const adminRouter = Router();

adminRouter.get("/tasks" , protect(Role.ADMIN) , adminController.getAllTask);
adminRouter.get("/logs" , protect(Role.ADMIN) , adminController.getAllLogs);


export default adminRouter;