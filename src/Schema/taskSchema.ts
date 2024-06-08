import {z} from 'zod';

export const taskSchema = z.object({
    task: z.string().min(3, "Task must be atleast 3 characters"),
    description: z.string(),
    completed: z.boolean()
})
