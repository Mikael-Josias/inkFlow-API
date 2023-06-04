import { ConflictError } from '@/errors'
import { InternalError } from '@/errors/internalError'
import { createUser, getByEmail } from '@/repositories'

interface ICreateUserProps {
    name: string,
    email: string,
    password: string,
    profilePicture: string,
}

export async function createNewUser({name, email, password, profilePicture}: ICreateUserProps) {
    const emailAlreadyExists = await getByEmail({email})
    if (emailAlreadyExists) throw ConflictError('Email already used!')
    
    try {
        await createUser({name, email, password, profilePicture})
    } catch (error) {
        throw InternalError('Unexpected error!')
    }
}