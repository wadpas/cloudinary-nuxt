<template>
  <div class="m-2 border rounded-2xl">
    <h1 class="px-4 py-4 text-lg font-bold">What’s happening</h1>
    <div v-for="trend in trends">
      <div class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-zinc-100">
        <div>
          <p class="text-sm text-zinc-500">{{ trend.category }}</p>
          <h2 class="font-semibold">{{ trend.name }}</h2>
          <p class="text-sm text-zinc-700">{{ trend.posts }}</p>
        </div>
        <Icon
          name="mdi:dots-horizontal"
          class="text-zinc-500" />
      </div>
    </div>
    <div class="px-4 py-4 text-sm cursor-pointer text-sky-500 hover:bg-sky-100 rounded-b-2xl">Show more</div>
  </div>
</template>

<script setup lang="ts">
  interface Trends {
    category: string
    name: string
    posts: string
  }

  defineProps<{
    trends: Trends[]
  }>()
</script>
