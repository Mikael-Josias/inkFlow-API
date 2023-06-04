import { createUser } from '@/controllers'
import { Router } from 'express'

export const userRouter = Router()

userRouter.post('/', createUser)
