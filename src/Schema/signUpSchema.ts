import { z } from 'zod';

export const usernameValidation = z
    .string()
    .min(3, "Username Must be atleast 2 characters")
    .max(20, "Username must be no more then 20 characters")
    .regex(/^[a-zA-Z0-9_-]{3,20}$/, "Username must not contain special characters and should be between 3 to 20 characters")


export const signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Email is invalid"}),
    password: z.string().min(6, "Password must be atleast 6 characters")
})