import { validateBody } from '@/middlewares'
import { createUser } from '@/controllers'
import { Router } from 'express'
import { signUpSchema } from '@/schemas'

export const userRouter = Router()

userRouter.post('/', validateBody(signUpSchema), createUser)
