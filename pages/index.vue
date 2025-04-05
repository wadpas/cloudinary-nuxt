<template>
  <div>
    {{ users }}
  </div>
</template>

<script setup lang="ts">
  const { data: users } = await useFetch(`/api/users`, {})
</script>

<style scoped></style>
