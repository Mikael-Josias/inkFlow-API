import { IUser } from '@/common/types'
import { prisma } from '@/config'

type CreateUserProps = Pick<IUser, 'name' | 'email' | 'password' | 'profilePicture'>
type GetByEmailProps = Pick<IUser, 'email'>

export async function createUser({ name, email, password, profilePicture }: CreateUserProps): Promise<void> {
    await prisma.user.create({
        data: {
            name,
            email,
            password,
            profilePicture,
        }
    })
}

export async function getByEmail({ email }: GetByEmailProps): Promise<IUser | null> {
    return prisma.user.findUnique({
        where: {
            email,
        }
    })
}
