import express, { Request, Response } from "express";
import cors from "cors"
import cookieParser from 'cookie-parser'
import authRouter from "./app/modules/user/user.router";
import { globalErrorHandle } from "./app/middleware/globalErrorHandle";
import { notFoundRoute } from "./app/middleware/notFoundRoute";
import taskRouter from "./app/modules/task/task.router";
const app = express();

// Default Middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(cookieParser());

// Router
app.use("/auth" , authRouter);
app.use("/tasks" , taskRouter);


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Server runing successfully!" });
});


app.use(globalErrorHandle);
app.use(notFoundRoute);

export default app