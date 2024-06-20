"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDebounceCallback } from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { signInSchema } from "@/Schema/signinSchema"
import { signIn } from "next-auth/react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { FaGoogle } from "react-icons/fa6"
import { useTheme } from "next-themes"
import * as z from 'zod'

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const { theme } = useTheme()

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
    })
    if (result?.error) {
      if (result.error === 'CredentialsSignin') {
        toast({
          title: 'Login Failed',
          description: 'Incorrect username or password',
          variant: 'destructive',
        })
      } else {
        toast({
          title: 'Error',
          description: result.error,
          variant: 'destructive',
        })
      }
    }
    setIsSubmitting(false)
    if (result?.url) {
      router.replace('/dashboard')
    }
  }

  return (
    <div className={`flex justify-center items-center md:min-h-screen min-h-[70vh] md:px-0 px-5 bg-gray-100 dark:bg-gray-900`}>
      <div className={`w-full max-w-md p-8 space-y-4 bg-white text-gray dark:bg-gray-800 dark:text-white rounded-lg shadow-md`}>
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600"/>
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
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="bg-gray-900 dark:text-white text-white w-full">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>
        </Form>
        <Separator />
        <button
          className={`flex items-center justify-center py-2 px-20 bg-white text-gray-700 dark:bg-gray-700 dark:text-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`}
          onClick={() => signIn('google')}
        >
          <FaGoogle />
          <span className="ml-2">Sign in with Google</span>
        </button>
        <div className="text-center mt-4">
          <p>
            Already a member?{' '}
            <Link href="/signup" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
                Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
