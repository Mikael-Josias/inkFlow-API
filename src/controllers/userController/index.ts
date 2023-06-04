import { createNewUser } from '@/services'
import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const userSchema = z.object({
            name: z.string().regex(/^[A-Za-z\s]+$/),
            email: z.string().email(),
            password: z.string().min(8),
            profilePicture: z.string().default(''),
        })
    
        const userData = userSchema.parse(req.body)
    
        await createNewUser(userData)
        res.sendStatus(201)
    } catch (error) {
        next(error)
    }
}