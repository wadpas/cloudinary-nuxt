<template>
  <div class="flex flex-col">
    <SidebarRightTrends :trends="dataTrends" />
    <SidebarRightCreators :creators="dataCreators" />
  </div>
</template>

<script setup lang="ts">
  const dataTrends = [
    {
      category: 'Politics',
      name: 'Whitney Leon',
      posts: '42.8K',
    },
    {
      category: 'Technology',
      name: 'Minecraft Movie',
      posts: '12.5K',
    },
    {
      category: 'Entertainment',
      name: 'The Rock',
      posts: '11.2K',
    },
    {
      category: 'Sports',
      name: 'Easter eggs',
      posts: '9.3K',
    },
    {
      category: 'Games',
      name: 'The Grand Theft Auto Series',
      posts: '7.2K',
    },
  ]

  const dataCreators = [
    {
      name: 'John Doe',
      username: '@johndoe',
    },
    {
      name: 'Blake Lively',
      username: '@blakelively',
    },
    {
      name: 'MrReynolds',
      username: '@mrreynolds',
    },
  ]
</script>
