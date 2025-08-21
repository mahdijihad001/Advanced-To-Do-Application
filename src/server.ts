import express, { Request, Response } from "express";
import { envVars } from "./app/config/env";
const app = express();


app.get("/" , (req : Request , res : Response) =>{
    res.status(200).json({success : true , message : "Server runing successfully!"});
});


app.listen(envVars.PORT , () =>{
    console.log("Server successfully runign!");
})