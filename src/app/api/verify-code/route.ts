import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";

async function POST(request: Request){
    await dbConnect();
    try {
        const {username, code} = await request.json();

        const user = await UserModel.findOne({username});

        if(!user){
            return Response.json({
                success: false,
                message: "User Not Found"
            }, {status: 401});
        }

        const isValidCode = user.verifyCode === code;
        const isCodeNotExpire = new Date(user.verifyCodeExpiry) > new Date()

        if(isValidCode && isCodeNotExpire){
            return Response.json({
                success: true,
                message: "Account Verify Successfully!"
            }, {status: 200});
        }else if(!isCodeNotExpire){
            return Response.json({
                success: false,
                message: "Verify Code Expire! | Please Signup Again"
            }, {status: 500});
        }

        return Response.json({
            success: false,
            message: "Incorrect Verification Code"
        }, {status: 401});

        

    } catch (error) {
        console.log("Error in Verify Code:- ", error);
        return Response.json({
            success: false,
            message: "Error User Verify"
        }, {status: 500})
    }
}