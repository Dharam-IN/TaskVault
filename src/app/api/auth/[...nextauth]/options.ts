import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any): Promise <any>{
                await dbConnect();
                console.log(credentials)
                try {
                    const user = await UserModel.findOne({
                        $or: [
                            {email: credentials.identifier},
                            {username: credentials.identifier}
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
        },
    )],
    callbacks: {
        async signIn({ user, account, profile }) {
            await dbConnect();
            console.log("Google User", user)
            console.log("Google Account", account)
            console.log("Google Profile", profile)
            try {
                // Check if user already exists in database
                const existingUser = await UserModel.findOne({ email: user.email });

                if (!existingUser) {
                    // If user doesn't exist, create a new user
                    const newUser = new UserModel({
                        username: profile?.name || user.name, // Use Google profile name or fallback to user.name
                        email: user.email,
                        isVerified: true, // Assume verified through social login
                        provider: account?.provider // Save provider info if needed
                    });

                    await newUser.save();
                }

                return true;
            } catch (error) {
                console.error("Error during sign in:", error);
                return false;
            }
        },
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
    secret: process.env.AUTH_SECRET
}
