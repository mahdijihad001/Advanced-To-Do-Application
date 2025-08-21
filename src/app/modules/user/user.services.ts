import { envVars } from "../../config/env";
import { userSearchableFilds } from "../../constrain/constrain";
import { AppError } from "../../utils/AppError";
import { generateToken } from "../../utils/jwt";
import { QueryBuilder } from "../../utils/QueryBuilder";
import { IUser } from "./user.interfaces";
import { User } from "./user.model";
import bcrypt from "bcryptjs";

const createUser = async (payload: IUser) => {
    const existUser = await User.findOne({ email: payload.email });

    if (existUser) {
        throw new AppError(400, "User already exist.");
    };

    const createUser = await User.create(payload);

    return createUser;

};


const logInUser = async (payload: Partial<IUser>) => {
    const findUser = await User.findOne({ email: payload.email });

    if (!findUser) {
        throw new AppError(404, "User not valid. Please registraction");
    };

    const matchPassword = await bcrypt.compare(payload.password as string, findUser.password);

    if (!matchPassword) {
        throw new AppError(400, "Invalid Password");
    };

    const { password, ...user } = findUser.toObject();

    const token = await generateToken(findUser, envVars.ACCESS_SECRET)

    return {
        user, token
    }

};

const getAllUser = async (query: Record<string, string>) => {
    const queryModel = new QueryBuilder(User.find(), query);

    const data = await queryModel.filter().search(userSearchableFilds).sort().pagination().build();
    const meta = await queryModel.getMeta();

    return { data, meta }
}

export const userServices = {
    createUser,
    logInUser,
    getAllUser
}