import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";
import {z} from 'zod'
import {usernameValidation} from '@/Schema/signUpSchema'


const UsernameQuerySchema = z.object({
    username: usernameValidation
})

export async function GET(request: Request){
    await dbConnect();
    try {

        const {searchParams} = new URL(request.url);
        const queryParam = {
            username: searchParams.get('username')
        };

        // Validate Username with ZOD
        const result = UsernameQuerySchema.safeParse(queryParam)
        console.log("ZOD Username:- ", result);

        if(!result.success){
            const usernameErrors = result.error.format().username?._errors || [];
            return Response.json({
                success: false,
                message: usernameErrors?.length > 0 ? usernameErrors.join('') : "Invalid Username"
            }, {status: 400})
        }

        const {username} = result.data;

        const existingVerifiedUser = await UserModel.findOne({username, isVerified: true});

        if(existingVerifiedUser){
            return Response.json({
                success: false,
                message: "Username has been Allready taken"
            }, {status: 500});
        }

        return Response.json({
            success: true,
            message: "Username Is Unique"
        }, {status: 200});
        
    } catch (error) {
        console.log("Error Checking Username:- ", error);
        return Response.json({
            success: false,
            message: "Error Checking Username"
        }, {status: 500})
    }
}