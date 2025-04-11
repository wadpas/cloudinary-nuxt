import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

// User Schema
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  username: text('username').notNull(),
  password: text('password'),
  fullname: text('name'),
  avatar: text('avatar'),
  role: text('role').default('user'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date()),
})

export const usersRelations = relations(users, ({ one }) => ({
  profileInfo: one(oAuthAccounts),
}))

export const oAuthAccounts = sqliteTable('oauth_accounts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: integer('user_id').notNull(),
  providerId: text('provider_id').notNull(),
  providerUserId: text('provider_user_id').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date()),
})

export const oAuthAccountRelations = relations(oAuthAccounts, ({ one }) => ({
  user: one(users, { fields: [oAuthAccounts.userId], references: [users.id] }),
}))

// Book Schema
export const books = sqliteTable('books', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull(),
  title: text('name').notNull(),
  description: text('description').notNull(),
  year: integer('year').notNull(),
  pages: integer('pages').notNull(),
  price: integer('price').notNull(),
  creator: text('creator').default('admin-admin-com'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
})

export const booksRelations = relations(books, ({ many }) => ({
  genres: many(booksToGenres),
}))

export const genres = sqliteTable('genres', {
  slug: text('slug').primaryKey(),
  name: text('name').notNull(),
  creator: text('creator').default('admin-admin-com'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
})

export const genresRelations = relations(genres, ({ many }) => ({
  books: many(booksToGenres),
}))

export const booksToGenres = sqliteTable(
  'books_to_genres',
  {
    book: integer('book').notNull(),
    genre: integer('genre_slug').notNull(),
  },
  (t) => [primaryKey({ columns: [t.book, t.genre] })]
)

export const booksToGenresRelations = relations(booksToGenres, ({ one }) => ({
  book: one(books, {
    fields: [booksToGenres.book],
    references: [books.slug],
  }),
  genre: one(genres, {
    fields: [booksToGenres.genre],
    references: [genres.slug],
  }),
}))
