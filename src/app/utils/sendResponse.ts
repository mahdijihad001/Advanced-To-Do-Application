import { Response } from "express";

interface IMeta {
    total?: number,
    page?: number,
    limit?: number,
    totalPage?: number
};

interface IResponse<T> {
    statusCode: number,
    success: boolean,
    message: string,
    meta?: IMeta
    data: T
};

export const sendResponse = <T>(res: Response, data: IResponse<T>) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
         meta: data.meta,
        data: data.data
    });
};