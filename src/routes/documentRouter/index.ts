import { createDocument } from '@/controllers'
import { validateBody } from '@/middlewares'
import { documentSchema } from '@/schemas'
import { Router } from 'express'

export const documentRouter = Router()

documentRouter.post('/', validateBody(documentSchema), createDocument)