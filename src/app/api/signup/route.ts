import UserModel from "@/model/user.model";
import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";


export async function POST(request: Request){
    await dbConnect();
    try {
        // console.log("Console Register Request Json:- ", request.json());
        const {username, email, password} = await request.json();

        const existingUserByUsernameVerified = await UserModel.findOne({username, isVerified: true})

        if(existingUserByUsernameVerified){
            return Response.json({
                success: false,
                message: "Username Allready Taken"
            })
        }

        const existingUserByEmail = await UserModel.findOne({email});

        // Verify Code Generate

        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()

        if(existingUserByEmail){
            if(existingUserByEmail.isVerified){
                return Response.json({
                    success: false,
                    message: "This Email Allready Exists"
                }, {status: 401}); 
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            existingUserByEmail.password = hashedPassword;
            existingUserByEmail.verifyCode = verifyCode;
            existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);

            await existingUserByEmail.save();

        }else{
            const hashedPassword = await bcrypt.hash(password, 10);
            const expiryDate = new Date();
            console.log("Check Current Hour:- ", expiryDate)
            expiryDate.setHours(expiryDate.getHours() + 1);
            console.log("Check Hour Updated:-", expiryDate)

            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false
            });

            await newUser.save();

        }
        
        // Send Verification Code on Email
        const emailResponse = await sendVerificationEmail(
            email,
            username,
            verifyCode
        )

        if(!emailResponse.success){
            return Response.json({
                success: false,
                message: emailResponse.message
            }, {status: 500});
        }

        return Response.json({
            success: true,
            message: "User Register Successfully. please verify your email"
        }, {status: 201});

    } catch (error) {
        console.log("Error Registering User", error)
        return Response.json({
            success: false,
            message: "User Registering Failed"
        }, {status: 500});
    }
}
