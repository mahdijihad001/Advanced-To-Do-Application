"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAdmin = void 0;
const env_1 = require("../config/env");
const user_model_1 = require("../modules/user/user.model");
const seedAdmin = async () => {
    const existSuperAdmin = await user_model_1.User.findOne({ email: env_1.envVars.ADMIN_EMAIL });
    if (existSuperAdmin) {
        console.log("Admin already exist!");
        return;
    }
    await user_model_1.User.create({ email: env_1.envVars.ADMIN_EMAIL, password: env_1.envVars.ADMIN_PASS, role: user_model_1.Role.ADMIN });
    console.log("Admin created successfully");
};
exports.seedAdmin = seedAdmin;
//# sourceMappingURL=seedAdmin.js.map