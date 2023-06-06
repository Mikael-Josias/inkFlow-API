import { ConflictError, InternalError } from '@/errors'
import { createUser, getByEmail } from '@/repositories'

export async function createNewUser(name: string, email: string, password: string) {
  const emailAlreadyExists = await getByEmail(email)
  if (emailAlreadyExists) throw ConflictError('Email already used!')
    
  try {
    await createUser(name, email, password, '')
  } catch (error) {
    throw InternalError('Unexpected error!')
  }
}