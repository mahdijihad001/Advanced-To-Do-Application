import express, { Request, Response } from "express";
import cors from "cors"
import cookieParser from 'cookie-parser'
import rateLimit from "express-rate-limit"
import authRouter from "./app/modules/user/user.router";
import { globalErrorHandle } from "./app/middleware/globalErrorHandle";
import { notFoundRoute } from "./app/middleware/notFoundRoute";
import taskRouter from "./app/modules/task/task.router";
import adminRouter from "./app/modules/admin/admin.route";
const app = express();

// Default Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});

app.use(limiter);

// Router
app.use("/auth", authRouter);
app.use("/tasks", taskRouter);
app.use("/admin", adminRouter);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Server runing successfully!" });
});


app.use(globalErrorHandle);
app.use(notFoundRoute);

export default app