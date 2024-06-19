import dbConnect from "@/lib/dbConnect";
import TaskModel, { Tasks } from "@/model/task.model";
import mongoose from "mongoose";
import { getSession } from "next-auth/react";

export async function POST(request: Request){
    await dbConnect();
    const Session = await getSession()
    console.log("session", Session)
    try {
        console.log("Frontend Response:- ", await request.json())
        const {title, dueDate, category} = await request.json();

        const dueDateUTC = new Date(dueDate);
        dueDateUTC.setMinutes(dueDateUTC.getMinutes() - dueDateUTC.getTimezoneOffset()); // Convert to UTC

        const Task = new TaskModel({
            title,
            dueDate: dueDateUTC,
            category
        });

        await Task.save();
        
        return Response.json({
            success: true,
            message: "Task Added Successfully",
        }, {status: 201});

    } catch (error) {
        console.log("Error Task Save:- ", error);
        return Response.json({
            success: false,
            message: "Error Task Save"
        }, {status: 400});
    }
}
