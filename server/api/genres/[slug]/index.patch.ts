import slugify from 'slugify'

export default eventHandler(async (event) => {
  const { slug } = getRouterParams(event)
  const { name } = await readBody(event)

  const genre = await useDrizzle()
    .update(t.genres)
    .set({
      name,
      slug: slugify(name, { lower: true, locale: 'uk' }),
    })
    .where(eq(t.genres.slug, slug))
    .returning()
    .get()

  return genre
})
