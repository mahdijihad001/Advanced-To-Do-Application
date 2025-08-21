import { Response } from "express";

interface IMeta{
    total ?: number,
    page ?: number,
    limit ?: number,
    totalPage ?: number
};

interface IResponse<T>{
    statusCode : number,
    success : boolean,
    message : string,
    data : T,
    meta ?: IMeta 
};

export const sendResponse = <T>(res : Response, data : IResponse<T>) =>{
    res.status(data.statusCode).json({
        success : data.success,
        message : data.message,
        data : data.data,
        meta : data.meta
    });
};