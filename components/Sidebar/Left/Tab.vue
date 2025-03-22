<template>
  <NuxtLink to="#">
    <div
      class="flex items-center justify-center py-4 rounded lg:justify-start hover:font-bold hover:bg-zinc-50 hover:scale-105">
      <Icon
        class="lg:mx-4"
        :name="iconName"
        size="28"></Icon>
      <h2
        class="hidden overflow-hidden text-lg lg:block"
        :class="active">
        {{ title }}
      </h2>
    </div>
  </NuxtLink>
</template>
Z

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
