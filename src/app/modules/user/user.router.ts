import { Router } from "express";
import { userController } from "./user.controller";
import { requestalidation } from "../../utils/requestValidation";
import { createUserZodSchema } from "./user.zodSchema";
import { protect } from "../../middleware/protect";
import { Role } from "./user.model";

const authRouter = Router();

authRouter.post("/register" , requestalidation(createUserZodSchema) ,userController.createUser);
authRouter.post("/login" , userController.logInUser);
authRouter.get("/allUser" , protect(Role.ADMIN) ,userController.getAllUser);


export default authRouter