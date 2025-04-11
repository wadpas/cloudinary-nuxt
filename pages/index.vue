<template>
  <div class="h-screen">
    <div>Books</div>
    <NuxtLink to="/auth/login">login</NuxtLink>
    <NuxtLink to="/auth/register">register</NuxtLink>
    {{ user }}
  </div>
</template>

<script setup lang="ts">
  const user = useUserSession()
</script>
