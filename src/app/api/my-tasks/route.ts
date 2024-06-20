import dbConnect from "@/lib/dbConnect";
import TaskModel from "@/model/task.model";

export async function POST(request: Request){
    await dbConnect();
    try {
        const {userId} = await request.json()
        console.log("UserID", userId);

        const Tasks = await TaskModel.find({userId});
        
        console.log("Tasks", Tasks);
        return new Response(JSON.stringify({success: true, message: "Task Send", data: Tasks}), {status: 201});

    } catch (error) {
        console.log("Error in find Tasks", error)
        return new Response(JSON.stringify({ success: false, message: "Error Task Find" }), { status: 400 });
    }
}
