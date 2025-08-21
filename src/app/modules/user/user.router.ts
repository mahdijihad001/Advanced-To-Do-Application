import { Router } from "express";
import { userController } from "./user.controller";
import { requestalidation } from "../../utils/requestValidation";
import { createUserZodSchema } from "./user.zodSchema";

const authRouter = Router();

authRouter.post("/register" , requestalidation(createUserZodSchema) ,userController.createUser);
authRouter.post("/login" , userController.logInUser);


export default authRouter