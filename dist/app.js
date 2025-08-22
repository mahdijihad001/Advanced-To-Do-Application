"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const user_router_1 = __importDefault(require("./app/modules/user/user.router"));
const globalErrorHandle_1 = require("./app/middleware/globalErrorHandle");
const notFoundRoute_1 = require("./app/middleware/notFoundRoute");
const task_router_1 = __importDefault(require("./app/modules/task/task.router"));
const admin_route_1 = __importDefault(require("./app/modules/admin/admin.route"));
const app = (0, express_1.default)();
// Default Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later.",
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);
// Router
app.use("/auth", user_router_1.default);
app.use("/tasks", task_router_1.default);
app.use("/admin", admin_route_1.default);
app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "Server runing successfully!" });
});
app.use(globalErrorHandle_1.globalErrorHandle);
app.use(notFoundRoute_1.notFoundRoute);
exports.default = app;
//# sourceMappingURL=app.js.map