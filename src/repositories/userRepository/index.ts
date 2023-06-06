import { prisma } from '@/config'

export async function createUser(name: string, email: string, password: string, profilePicture: string): Promise<void> {
  await prisma.user.create({
    data: {
      name,
      email,
      password,
      profilePicture,
    }
  })
}

export async function getByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    }
  })
}
