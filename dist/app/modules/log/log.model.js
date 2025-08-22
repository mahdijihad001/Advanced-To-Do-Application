"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = exports.IAction = void 0;
const mongoose_1 = require("mongoose");
var IAction;
(function (IAction) {
    IAction["CREATE_TASK"] = "CREATE_TASK";
    IAction["UPDATE_TASK"] = "UPDATE_TASK";
    IAction["DELETE_TASK"] = "DELETE_TASK";
})(IAction || (exports.IAction = IAction = {}));
const logSchema = new mongoose_1.Schema({
    action: { type: String, required: true },
    taskId: { type: String, required: true },
    userId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
}, { versionKey: false });
exports.Log = (0, mongoose_1.model)("Log", logSchema);
//# sourceMappingURL=log.model.js.map