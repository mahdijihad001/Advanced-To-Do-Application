import mongoose, { Schema, model } from "mongoose";
import { ITask } from "./task.interfaces";


const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    authore: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Author is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    dueDate: {
      type: Date,
      required: [true, "Due date is required"],
      validate: {
        validator: function (value: Date) {
          return value >= new Date();
        },
        message: "Due date cannot be in the past",
      },
    },
    isComplite: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// compound index
taskSchema.index({ title: 1, authore: 1 }, { unique: true });

export const Todo = model<ITask>("Task", taskSchema);
