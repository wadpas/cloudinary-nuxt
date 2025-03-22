<template>
  <div class="m-2 border rounded-2xl">
    <h1 class="px-4 py-4 text-lg font-bold">Who to follow</h1>
    <div v-for="creator in creators">
      <div class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-zinc-100">
        <div class="flex">
          <NuxtImg
            class="mr-2 rounded-full"
            width="44"
            height="44"
            src="/avatar.jpg" />
          <div>
            <h2 class="font-semibold">{{ creator.name }}</h2>
            <p class="text-sm font-thin text-zinc-500">{{ creator.username }}</p>
          </div>
        </div>
        <Button class="rounded-full">Follow</Button>
      </div>
    </div>
    <div class="px-4 py-4 text-sm cursor-pointer text-sky-500 hover:bg-sky-100 rounded-b-2xl">Show more</div>
  </div>
</template>

<script setup lang="ts">
  import Button from '~/components/ui/button/Button.vue'

  interface Creators {
    name: string
    username: string
  }

  defineProps<{
    creators: Creators[]
  }>()
</script>
