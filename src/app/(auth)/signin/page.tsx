'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {useDebounceValue, useDebounceCallback} from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { signupSchema } from "@/Schema/signUpSchema"
import axios, { AxiosError } from 'axios'
import { ApiResponse } from "@/types/ApiResponse"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { signInSchema } from "@/Schema/signinSchema"
import { signIn } from "next-auth/react"


const page = () => {
  const [username, setUsername] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false)

  const debounced = useDebounceCallback(setUsername, 300)
  const { toast } = useToast()
  const router = useRouter();

  // ZOD Implementation
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: '',
      password: ''
    }
  })
  

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    setIsSubmitting(true)
    const result = await signIn('credentials', {
      redirect: false,
      identifier: data.identifier,
      password: data.password
    });

    if(result?.error){
      toast({
        title: "Login Failed",
        description: "Incorrect Username and Pasword",
        variant: "destructive"
      })
    }
    
    if(result?.url){
      router.replace("/dashboard")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Join TaskVault
          </h1>
          <p className="mb-4">Sign in to Save Your Time</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email/Username</FormLabel>
                  <FormControl>
                    <Input placeholder="email/username"
                     {...field}
                     />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="email"
                     {...field}
                     />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait</>) : ('Signup')}
              </Button>
          </form>
        </Form>
        <div className="text-center mt-4">
          <p>
            Already a member?{' '}
            <Link href="/signup" className="text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default page