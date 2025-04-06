import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  slug: text('slug').primaryKey(),
  email: text('email').notNull().unique(),
  username: text('username').notNull(),
  password: text('password').notNull(),
  name: text('name'),
  avatar: text('avatar'),
  role: text('role').default('user'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
})

export const books = sqliteTable('books', {
  slug: text('slug').primaryKey(),
  title: text('name').notNull(),
  description: text('description').notNull(),
  year: integer('year').notNull(),
  pages: integer('pages').notNull(),
  price: integer('price').notNull(),
  creator: text('creator').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
})
