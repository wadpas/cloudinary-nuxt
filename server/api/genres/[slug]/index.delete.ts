export default eventHandler(async (event) => {
  const { slug } = getRouterParams(event)

  const genre: Genre | undefined = await useDrizzle().delete(t.genres).where(eq(t.genres.slug, slug)).returning().get()

  return genre
})
