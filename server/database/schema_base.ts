import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  fullName: text('full_name'),
  phone: text('phone').notNull().unique(),
  email: text('email').notNull().unique(),
  score: integer('score').default(0),
})

export const usersRelations = relations(users, ({ one, many }) => ({
  profiles: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
  posts: many(posts),
}))

export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  text: text('text').notNull(),
  authorId: integer('user_id'),
})

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
  postCategories: many(postsToCategories),
}))

export const categories = sqliteTable('categories', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  categoryPosts: many(postsToCategories),
}))

export const postsToCategories = sqliteTable(
  'posts_to_categories',
  {
    postId: integer('post_id').notNull(),
    categoryId: integer('category_id').notNull(),
  },
  (t) => [primaryKey({ columns: [t.postId, t.categoryId] })]
)

export const postsToCategoriesRelations = relations(postsToCategories, ({ one }) => ({
  post: one(posts, {
    fields: [postsToCategories.postId],
    references: [posts.id],
  }),
  category: one(categories, {
    fields: [postsToCategories.categoryId],
    references: [categories.id],
  }),
}))

export const profiles = sqliteTable('profiles', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  bio: text('bio'),
  userId: integer('user_id'),
})
