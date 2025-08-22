"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundRoute = void 0;
const notFoundRoute = (req, res, next) => {
    res.status(404).json({ success: false, message: "Route not found" });
};
exports.notFoundRoute = notFoundRoute;
//# sourceMappingURL=notFoundRoute.js.map