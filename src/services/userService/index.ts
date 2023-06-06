import { IUser } from '@/common/types'
import { ConflictError } from '@/errors'
import { InternalError } from '@/errors/internalError'
import { createUser, getByEmail } from '@/repositories'

type ICreateUserProps = Pick<IUser, 'name' | 'email' | 'profilePicture'> & {hashedPassword: string}

export async function createNewUser({name, email, hashedPassword, profilePicture}: ICreateUserProps) {
  const emailAlreadyExists = await getByEmail({email})
  if (emailAlreadyExists) throw ConflictError('Email already used!')
    
  try {
    await createUser({name, email, hashedPassword, profilePicture})
  } catch (error) {
    throw InternalError('Unexpected error!')
  }
}