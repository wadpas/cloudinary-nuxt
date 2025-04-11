import slugify from 'slugify'

export default eventHandler(async (event) => {
  const { name } = await readBody(event)

  const slug = slugify(name, { lower: true, locale: 'uk' })

  const genre: Genre = await useDrizzle()
    .insert(table.genres)
    .values({
      slug,
      name,
    })
    .returning()
    .get()

  return genre
})
