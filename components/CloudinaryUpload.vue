<template>
  <div class="grid grid-cols-4 gap-4 p-4 mx-auto">
    <div
      v-for="img in data?.resources"
      class="cursor-pointer">
      <CldImage
        :src="img.public_id"
        width="400"
        height="400"
        :alt="img.public_id" />
    </div>
    <CldImage
      v-if="imageInfo"
      :src="imageInfo.public_id"
      width="400"
      height="400"
      :alt="imageInfo.public_id" />
    <CldUploadWidget
      v-slot="{ open }"
      :onError="() => {}"
      :onResult="() => {}"
      :onSuccess="onUpload"
      :onClose="onRefresh"
      uploadPreset="books-nuxt">
      <button
        type="button"
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        @click="open">
        Upload an Image
      </button>
    </CldUploadWidget>
  </div>
</template>

<script setup lang="ts">
  const { data, refresh } = await useFetch('/api/cloud')
  const imageInfo = ref<{ public_id: string } | null>(null)

  function onUpload(results: any) {
    imageInfo.value = results.info
    console.log(results.info)
    console.log(imageInfo.value)
  }

  function onRefresh() {
    refresh()
  }
</script>
