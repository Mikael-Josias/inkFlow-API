import { BadRequestError } from '@/errors'
import { v4 as uuidv4} from 'uuid'
import { IUser } from './types'
import bcrypt from 'bcrypt'

type BuildUserProps = Pick<IUser, 'name' | 'email'> & { password: string }
const SALT_ROUNDS = 10

export const BuildUserObject = ({name, email, password }: BuildUserProps): Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> => {
  if (
    !/^[A-Za-z\s]+$/.test(name) || 
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ||
    !/^(?!.*\s).{8,}$/.test(password)
  ) throw BadRequestError('Incorrect data!')

  const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS)
  const profilePicture = ''

  return {
    name,
    email,
    hashedPassword,
    profilePicture,
  }
}