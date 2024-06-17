import mongoose, { Document, Schema } from "mongoose";

export interface Task extends Document{
    userId: mongoose.Types.ObjectId;
    task: string;
    description: string;
    createAt: Date;
    completed: boolean;
    category: string
}


const TaskSchema: Schema<Task> = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "UserID is required"]
    },
    task: {
        type: String,
        required: [true, "Task Field is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
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
    }
})

const TaskModel = mongoose.models.Task as mongoose.Model<Task> || mongoose.model("Task", TaskSchema)

export default TaskModel;