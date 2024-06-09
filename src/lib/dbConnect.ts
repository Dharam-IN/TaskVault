import mongoose from "mongoose";

type ConnectionObject = {
    isConnection?: number
}

const connection: ConnectionObject = {};

async function dbConnect(){
    if(connection.isConnection){
        console.log("Allready Connected to database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI || "");
        connection.isConnection = db.connections[0].readyState;
        // console.log("MongoDB Response:- ", db);
        // console.log("DB Connections:- ", db.connections);
        console.log("Database Connected Successfully!");
    } catch (error) {
        console.log("Database Connection failed", error)
        process.exit(1)
    }
}

export default dbConnect;