export default eventHandler(async (event) => {
  const { email, password, name, avatar, role } = await readBody(event)

  const user = await useDrizzle()
    .insert(tables.books)
    .values({
      id: 2,
      name: 'test',
    })
    .returning()
    .get()

  return user
})
