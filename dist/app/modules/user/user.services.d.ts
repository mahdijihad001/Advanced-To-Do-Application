import { IUser } from "./user.interfaces";
export declare const userServices: {
    createUser: (payload: IUser) => Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    logInUser: (payload: Partial<IUser>) => Promise<{
        user: {
            _id: string;
            email: string;
            role?: string;
            __v: number;
        };
        token: string;
    }>;
    getAllUser: (query: Record<string, string>) => Promise<{
        data: (import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
            _id: string;
        }> & {
            __v: number;
        })[];
        meta: {
            page: number;
            limit: number;
            totalDocument: number;
            totalPage: number;
        };
    }>;
};
//# sourceMappingURL=user.services.d.ts.map