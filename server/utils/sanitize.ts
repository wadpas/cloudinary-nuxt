import { type User } from '@prisma/client'

export const sanitizeUser = (user: User) => {
  user.password = null
  return user
}
