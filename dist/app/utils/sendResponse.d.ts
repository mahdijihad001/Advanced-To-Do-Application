import { Response } from "express";
interface IMeta {
    total?: number;
    page?: number;
    limit?: number;
    totalPage?: number;
}
interface IResponse<T> {
    statusCode: number;
    success: boolean;
    message: string;
    meta?: IMeta;
    data: T;
}
export declare const sendResponse: <T>(res: Response, data: IResponse<T>) => void;
export {};
//# sourceMappingURL=sendResponse.d.ts.map