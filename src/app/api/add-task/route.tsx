import dbConnect from "@/lib/dbConnect";
import TaskModel, { Tasks } from "@/model/task.model";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options"; // Correct the import path

export async function POST(request: Request) {
  await dbConnect();
  const session = await getServerSession(authOptions); // Use getServerSession and pass authOptions

  if (!session) {
    return new Response(JSON.stringify({ success: false, message: "Unauthorized" }), { status: 401 });
  }

  try {
    const { title, dueDate, category } = await request.json();
    console.log("User Session", session.user);
    const dueDateUTC = new Date(dueDate);
    dueDateUTC.setMinutes(dueDateUTC.getMinutes() - dueDateUTC.getTimezoneOffset()); // Convert to UTC

    const task = new TaskModel({
      userId: new mongoose.Types.ObjectId(session.user._id), // Set userId from session
      title,
      dueDate: dueDateUTC,
      category
    });

    await task.save();

    return new Response(JSON.stringify({ success: true, message: "Task Added Successfully" }), { status: 201 });

  } catch (error) {
    console.error("Error Task Save:", error);
    return new Response(JSON.stringify({ success: false, message: "Error Task Save" }), { status: 400 });
  }
}
