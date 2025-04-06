export default eventHandler(async (event) => {
  const { slug } = getRouterParams(event)

  const genre: Genre | undefined = await useDrizzle().select().from(t.genres).where(eq(t.genres.slug, slug)).get()

  return genre
})
