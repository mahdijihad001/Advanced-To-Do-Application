import { envVars } from "../config/env";
import { Role, User } from "../modules/user/user.model";

export const seedAdmin = async () => {
    const existSuperAdmin = await User.findOne({ email: envVars.ADMIN_EMAIL });

    if (existSuperAdmin) {
        console.log("Admin already exist!");
        return;
    }

    await User.create({ email: envVars.ADMIN_EMAIL, password: envVars.ADMIN_PASS, role: Role.ADMIN });
    console.log("Admin created successfully");

};