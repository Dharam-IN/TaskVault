import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
    providers:[
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any): Promise <any>{
                await dbConnect();
                try {
                    const user = await UserModel.findOne({
                        $or: [
                            {email: credentials.idenetifier},
                            {username: credentials.idenetifier}
                        ]
                    });

                    if(!user){
                        throw new Error("No User Found This Email");
                    }

                    if(!user.isVerified){
                        throw new Error("Please Verify Before Login!");
                    }

                    // Compare Password
                    const comparePassword = await bcrypt.compare(credentials.password, user.password);

                    if(comparePassword){
                        return user
                    }else{
                        throw new Error("Password Incorrect!");
                    }



                } catch (err: any) {
                    throw new Error(err)
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if(user){
                token._id = user._id?.toString(),
                token.isVerified = user.isVerified,
                token.username = user.username
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id;
                session.user.isVerified = token.isVerified;
                session.user.username = token.username;
              }
            return session
        },
    },
    pages: {
        signIn: "/signin"
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}
