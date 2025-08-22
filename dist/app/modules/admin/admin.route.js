"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const protect_1 = require("../../middleware/protect");
const user_model_1 = require("../user/user.model");
const admin_controller_1 = require("./admin.controller");
const adminRouter = (0, express_1.Router)();
adminRouter.get("/tasks", (0, protect_1.protect)(user_model_1.Role.ADMIN), admin_controller_1.adminController.getAllTask);
adminRouter.get("/logs", (0, protect_1.protect)(user_model_1.Role.ADMIN), admin_controller_1.adminController.getAllLogs);
exports.default = adminRouter;
//# sourceMappingURL=admin.route.js.map