import { drizzle } from 'drizzle-orm/d1'
export { sql, eq, and, or, ne, gt } from 'drizzle-orm'

import * as schema from '../database/schema'

export const table = schema

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema })
}

export type Genre = typeof schema.genres.$inferSelect
export type Book = typeof schema.books.$inferSelect
export type User = typeof schema.users.$inferSelect
export type OAuthAccount = typeof schema.oAuthAccounts.$inferSelect
