const users = table.users
const oAuthAccounts = table.oAuthAccounts

export default defineOAuthGitHubEventHandler({
  config: {
    emailRequired: true,
  },

  async onSuccess(event, { user }) {
    let currentUser: User | undefined
    let userOAuthAccount: OAuthAccount | undefined

    currentUser = await useDrizzle().query.users.findFirst({
      where: eq(users.email, user.email),
    })

    if (!currentUser) {
      currentUser = await useDrizzle()
        .insert(users)
        .values({
          email: user.email,
          username: user.email.split('@')[0],
          avatar: user.avatar_url,
        })
    }

    if (currentUser) {
      userOAuthAccount = await useDrizzle().query.oAuthAccounts.findFirst({
        where: eq(oAuthAccounts.userId, currentUser.id),
      })
    }

    if (!userOAuthAccount && currentUser) {
      await useDrizzle()
        .insert(oAuthAccounts)
        .values({
          userId: currentUser.id,
          providerId: 'github',
          providerUserId: user.id + '',
        })
    }

    if (currentUser) currentUser!.password = null

    await setUserSession(event, {
      user: currentUser!,
    })
    return sendRedirect(event, '/')
  },

  onError(event, error) {
    console.error('GitHub OAuth error:', error)
    return sendRedirect(event, '/')
  },
})
