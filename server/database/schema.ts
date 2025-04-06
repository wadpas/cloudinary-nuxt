import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

export const books = sqliteTable('books', {
  slug: text('slug').primaryKey(),
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
