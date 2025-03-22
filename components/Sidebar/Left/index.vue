<template>
  <div class="flex flex-col h-screen">
    <NuxtLink to="/">
      <div class="flex items-center justify-center py-4 rounded lg:justify-start">
        <NuxtImg
          width="28"
          height="28"
          class="lg:mx-4"
          src="/logo.svg" />
        <h1 class="hidden text-lg font-extrabold lg:block">Social</h1>
      </div>
    </NuxtLink>
    <SidebarLeftTab
      active
      icon-name="hugeicons:home-09"
      title="Home" />
    <SidebarLeftTab
      icon-name="hugeicons:search-01"
      title="Explore" />
    <SidebarLeftTab
      icon-name="hugeicons:mail-01"
      title="Messages" />
    <SidebarLeftTab
      icon-name="hugeicons:bookmark-03"
      title="Bookmarks" />
    <SidebarLeftTab
      icon-name="hugeicons:google-doc"
      title="Lists" />
    <SidebarLeftTab
      icon-name="hugeicons:user-square"
      title="Profile" />
    <SidebarLeftTab
      icon-name="hugeicons:more-horizontal-square-02"
      title="More" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
