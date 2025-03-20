<template>
  <div class="flex flex-col h-screen">
    <NuxtLink to="/">
      <div class="flex items-center p-2 rounded text-magento-950">
        <LogoSocial />
        <h1 class="ml-2 text-xl font-bold">Social</h1>
      </div>
    </NuxtLink>
    <SidebarLeftTab
      icon-name="hugeicons:home-09"
      title="Home" />
    <SidebarLeftTab
      active
      icon-name="hugeicons:home-09"
      title="Home" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
