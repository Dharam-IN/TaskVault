import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/verifyEmail";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'TodoVault | Verification Code!',
            react: VerificationEmail({username, otp: verifyCode}),
        });

        return {success: true, message: "Verification Code Send Successfully!"}
    } catch (error) {
        return {success: false, message: "Error Send Verification Code"}
    }
}
