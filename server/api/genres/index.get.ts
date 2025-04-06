export default eventHandler(async (event) => {
  const genres: Genre[] = await useDrizzle().select().from(t.genres).all()

  return genres
})
