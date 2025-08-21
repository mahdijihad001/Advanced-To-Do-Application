import { IUser } from "../modules/user/user.interfaces";
import jwt from "jsonwebtoken";

export const generateToken = async (payload: Partial<IUser>, jwtSecrate: string) => {
    const data = {
        userId: payload._id,
        email: payload.email,
        role: payload.role
    };

    const token = jwt.sign(data, jwtSecrate, { expiresIn: "7d" });
    return token
};