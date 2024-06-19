import mongoose, { Document, Schema } from "mongoose";

export interface Task extends Document{
    userId: mongoose.Types.ObjectId;
    title: string;
    createAt: Date;
    completed: boolean;
    category: string;
    dueDate: Date;
}


const TaskSchema: Schema<Task> = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "UserID is required"]
    },
    title: {
        type: String,
        required: [true, "Task Field is required"]
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: [true, "Due Date is Required"]
    }
})

const TaskModel = mongoose.models.Task as mongoose.Model<Task> || mongoose.model("Task", TaskSchema)

export default TaskModel;