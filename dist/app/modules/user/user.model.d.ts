import { IUser } from "./user.interfaces";
export declare enum Role {
    USER = "user",
    ADMIN = "admin"
}
export declare const User: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=user.model.d.ts.map