"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Role = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
})(Role || (exports.Role = Role = {}));
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Email must be required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password must be required"]
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    }
}, { timestamps: true, versionKey: false });
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    ;
    this.password = await bcryptjs_1.default.hash(this.password, 10);
    next();
});
exports.User = (0, mongoose_1.model)("user", userSchema);
//# sourceMappingURL=user.model.js.map