import { createNewDocument } from '@/services'
import { NextFunction, Request, Response } from 'express'


export async function createDocument(req: Request, res: Response, next: NextFunction) {
  try {
    const { userId } = req.body

    const documentId = await createNewDocument(userId)
    res.status(201).send({documentId})
  } catch (error) {
    next(error)
  }
} 