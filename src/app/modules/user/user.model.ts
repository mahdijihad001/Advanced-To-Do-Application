import { model, Schema } from "mongoose";
import { IUser } from "./user.interfaces";
import bcrypt from "bcryptjs"

export enum Role {
    USER = "user",
    ADMIN = "admin"
}

const userSchema = new Schema<IUser>({
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
    };

    this.password = await bcrypt.hash(this.password, 10);
    next();
})

export const User = model<IUser>("user", userSchema);