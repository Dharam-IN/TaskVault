'use client'
import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from 'next/link'
import { useDebounceValue } from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { signupSchema } from '@/Schema/signUpSchema'
import axios, { AxiosError } from 'axios'
import { ApiResponse } from '@/types/ApiResponse'
import dbConnect from '@/lib/dbConnect'

const page = () => {

  const [username, setUsername] = useState('');
  const [usernameMessage, setUsernameMessage] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const debouncedUsername = useDebounceValue(username, 300)
  const { toast } = useToast()
  const router = useRouter();

  // ZOD Implemention
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  })

  useEffect(() => {
    const checkUsernameUnique = async() => {
      if(debouncedUsername){
        setUsernameMessage('');
        setIsCheckingUsername(true);
        try {
          const response = await axios.get(`api/check-username-unique?username=${debouncedUsername}`)
          setUsername(response.data.message);
        } catch (error) {
          const axiosError = error as AxiosError<ApiResponse>;
          setUsernameMessage(
            axiosError.response?.data.message ?? "Error Checking Username"
          )
        }finally{
          setIsCheckingUsername(false)
        }
      }
    }
  },[debouncedUsername])

  const onSubmit = async (data: z.infer<typeof signupSchema>) => {
    setIsSubmitting(true)
    try {
      const response = await axios.post("/api/signup", data);
      toast({
        title: "Success",
        description: response.data.message
      })
    } catch (error) {
      
    }
  }

  return (
    <div>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
    </div>
  )
}

export default page
