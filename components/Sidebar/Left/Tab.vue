<template>
  <NuxtLink to="#">
    <div class="flex items-center p-2 rounded hover:font-bold hover:bg-zinc-50 hover:scale-105">
      <Icon
        name="hugeicons:home-09"
        size="26"></Icon>
      <h2
        class="hidden ml-2 text-xl lg:block"
        :class="active">
        {{ title }}
      </h2>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps<{
    iconName: string
    title: string
    active?: boolean
  }>()

  const active = computed(() => {
    return props.active ? 'font-bold' : 'font-normal'
  })
</script>

<style scoped></style>
