import { NextFunction, Request, Response } from 'express'
import { BuildUserObject } from '@/domain/user'
import { createNewUser } from '@/services'

export async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, password } = req.body

    const userObject = BuildUserObject({name, email, password})

    await createNewUser(userObject)
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
}