"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const requestValidation_1 = require("../../utils/requestValidation");
const user_zodSchema_1 = require("./user.zodSchema");
const protect_1 = require("../../middleware/protect");
const user_model_1 = require("./user.model");
const authRouter = (0, express_1.Router)();
authRouter.post("/register", (0, requestValidation_1.requestalidation)(user_zodSchema_1.createUserZodSchema), user_controller_1.userController.createUser);
authRouter.post("/login", user_controller_1.userController.logInUser);
authRouter.get("/allUser", (0, protect_1.protect)(user_model_1.Role.ADMIN), user_controller_1.userController.getAllUser);
exports.default = authRouter;
//# sourceMappingURL=user.router.js.map