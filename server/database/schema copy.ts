import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

export const books = sqliteTable('books', {
  id: integer('id').primaryKey(),
  name: text('name'),
})

export const booksRelations = relations(books, ({ many }) => ({
  booksToGenres: many(booksToGenres),
}))

export const genres = sqliteTable('genres', {
  id: integer('id').primaryKey(),
  name: text('name'),
})

export const genresRelations = relations(genres, ({ many }) => ({
  booksToGenres: many(booksToGenres),
}))

export const booksToGenres = sqliteTable(
  'books_to_genres',
  {
    bookId: integer('book_id')
      .notNull()
      .references(() => books.id),
    genreId: integer('genre_id')
      .notNull()
      .references(() => genres.id),
  },
  (t) => [primaryKey({ columns: [t.bookId, t.genreId] })]
)

export const booksToGenresRelations = relations(booksToGenres, ({ one }) => ({
  genre: one(genres, {
    fields: [booksToGenres.genreId],
    references: [genres.id],
  }),
  book: one(books, {
    fields: [booksToGenres.bookId],
    references: [books.id],
  }),
}))
