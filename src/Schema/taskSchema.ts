import {z} from 'zod';

export const taskSchema = z.object({
    title: z.string().min(3, "Task must be atleast 3 characters"),
    dueDate: z.date().optional(),
    completed: z.boolean().optional(),
    category: z.string().min(0, "Please Choose Category").optional()
})
