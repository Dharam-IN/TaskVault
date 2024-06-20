'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import * as z from 'zod'
import { taskSchema } from '@/Schema/taskSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaCalendarAlt } from "react-icons/fa";
import { addDays, format, isBefore, isToday } from "date-fns"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ToastAction } from '../ui/toast';
import { useToast } from '../ui/use-toast';
import axios, { AxiosError } from 'axios';
import { ApiResponse } from '@/types/ApiResponse';
import { Loader2 } from 'lucide-react';

const TaskForm = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      category: "",
      dueDate: undefined
    }
  });

  const onSubmit = async (data: z.infer<typeof taskSchema>) => {
    
    setIsSubmitting(true)
    console.log("Form data:", data);
    try {
      const response = await axios.post<ApiResponse>(`/api/add-task`, data)
      if(response.data.success){
        form.reset();
        toast({
          title: "Success",
          description: response.data.message
        })
        setTimeout(() => {
          location.reload();
        }, 1000)
      }
      setIsSubmitting(false)
    } catch (error) {
      console.error("Error in Task Save", error);
      const axiosError = error as AxiosError<ApiResponse>;
      const errorMessage = axiosError.response?.data.message ?? "Unknown Error";
      toast({
        title: "Task Not Save",
        description: errorMessage,
        variant: "destructive",
      });
      setIsSubmitting(false)
    }
  };

  const isFutureOrToday = (selectedDate: Date): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDateWithoutTime = new Date(selectedDate);
    selectedDateWithoutTime.setHours(0, 0, 0, 0);
    return selectedDateWithoutTime >= today || isToday(selectedDate);
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Task Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Task Title</FormLabel>
                <FormControl>
                  <Input placeholder="Please Enter Your Task" className='bg-white dark:bg-transparent' {...field} />
                </FormControl>
                <FormMessage className='text-red-600' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger className="w-full hover:bg-gray-100 dark:hover:bg-gray-600">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-700">
                      <SelectGroup>
                        <SelectLabel>Select Options</SelectLabel>
                        <SelectItem value="Personal" className='hover:bg-gray-200 dark:hover:bg-gray-800'>Personal</SelectItem>
                        <SelectItem value="Work" className='hover:bg-gray-200 dark:hover:bg-gray-800'>Work</SelectItem>
                        <SelectItem value="Education" className='hover:bg-gray-200 dark:hover:bg-gray-800'>Education</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className='text-red-600' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Date</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <FaCalendarAlt className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      className="flex w-auto flex-col space-y-2 p-2 bg-white dark:bg-gray-700"
                    >
                      <Select
                        onValueChange={(value) =>
                          setDate(addDays(new Date(), parseInt(value)))
                        }
                      >
                        <SelectTrigger className="hover:bg-gray-100 dark:hover:bg-gray-600">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper" className="bg-white dark:bg-gray-700">
                          <SelectItem value="0">Today</SelectItem>
                          <SelectItem value="1">Tomorrow</SelectItem>
                          <SelectItem value="3">In 3 days</SelectItem>
                          <SelectItem value="7">In a week</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="rounded-md border bg-white dark:bg-gray-700">
                        <Calendar
                          mode="single"
                          onSelect={(newDate) => {
                            if (newDate && isFutureOrToday(newDate)) {
                              setDate(newDate);
                              form.setValue('dueDate', newDate); // Set form value for dueDate
                            }
                          }}
                          modifiers={{
                            disabled: { before: new Date() }
                          }}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage className='text-red-600' />
              </FormItem>
            )}
          />
          <Button type="submit" variant={'default'} className='px-6 py-2 text-white bg-indigo-600 rounded-md'>
          {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please Wait
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TaskForm;
