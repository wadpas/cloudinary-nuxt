export default eventHandler(async () => {
  const users = await useDrizzle().query.users.findFirst({
    with: {
      profiles: true,
    },
  })
  return users
})
