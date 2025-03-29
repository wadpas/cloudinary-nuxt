import { z } from 'zod'

export const authSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    repeatPassword: z.string().min(8),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Паролі не співпадають',
    path: ['repeatPassword'],
  })

export const genreSchema = z.object({
  name: z.string().min(1, { message: 'Введіть назву жанру' }),
})

export const authorSchema = z.object({
  name: z.string().min(1, { message: `Введіть ім'я автора` }),
})

export const bookSchema = z.object({
  title: z.string().min(1, { message: 'Введіть назву книги' }),
  authorIds: z.string().array().min(1, { message: 'Додайте автора книги' }),
  genreIds: z.string().array().min(1, { message: 'Додайте жанр книги' }),
  description: z.string().min(1, { message: 'Введіть опис книги' }),
  coverPath: z.string().min(1, { message: 'Додайте зображення книги' }),
  filePath: z.string().min(1, { message: 'Додайте файл книги' }),
  year: z.coerce.number().min(4, { message: 'Введіть рік видання' }),
  pages: z.coerce.number().min(1, { message: 'Введіть кількість сторінок' }),
  price: z.coerce.number().min(1, { message: 'Введіть ціну книги' }),
  isFeatured: z.boolean().default(true).optional(),
  isAvailable: z.boolean().default(true).optional(),
})
