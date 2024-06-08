import mongoose, { Document, Schema } from "mongoose";

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    createAt: Date;
}

const User: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is Required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please Enter Valid Email Address"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify Code is required"]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify Code Expiry is required"],
        default: Date.now,
    },
    isVerified: {
        type: Boolean,
        default: false
    }

})



const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", User);

export default UserModel;