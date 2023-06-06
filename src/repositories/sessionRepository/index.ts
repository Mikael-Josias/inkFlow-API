import { prisma } from '@/config'

export async function createSession(userId: string) {
  return prisma.session.create({
    data: {
      userId
    }
  })
}