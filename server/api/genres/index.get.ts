export default eventHandler(async (event) => {
  const genres: Genre[] = await useDrizzle().select().from(table.genres).all()

  return genres
})
