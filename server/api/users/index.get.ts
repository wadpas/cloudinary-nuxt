export default eventHandler(async () => {
  const users = await useDrizzle().query.books.findFirst({})
  return users
})
