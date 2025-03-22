<template>
  <div class="grid grid-cols-12 gap-4">
    <!-- Left sidebar -->
    <div class="hidden sm:block lg:col-span-2">
      <div class="sticky top-0">
        <SidebarLeft />
      </div>
    </div>
    <!-- Center content -->
    <main class="col-span-12 sm:col-span-8 lg:col-span-6">Center</main>
    <!-- Right sidebar -->
    <div class="hidden sm:block sm:col-span-3 lg:col-span-4">
      <SidebarRight />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
<section></section>
і
