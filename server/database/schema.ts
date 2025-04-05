import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  fullName: text('full_name'),
  phone: text('phone').notNull().unique(),
  email: text('email').notNull().unique(),
  score: integer('score').default(0),
})

export const usersRelations = relations(users, ({ one }) => ({
  profiles: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
}))

export const profiles = sqliteTable('profiles', {
  id: integer('id').primaryKey(),
  bio: text('bio'),
  userId: integer('user_id').references(() => users.id),
})
