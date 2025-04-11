<script setup lang="ts">
  import * as z from 'zod'
  import type { FormSubmitEvent } from '@nuxt/ui'

  const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
  })

  type Schema = z.output<typeof schema>

  const state = reactive<Partial<Schema>>({
    email: undefined,
    password: undefined,
  })

  const toast = useToast()
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
  }
</script>

<template>
  <div class="flex h-screen">
    <UCard class="m-auto shadow w-sm">
      <div class="flex flex-col gap-2 mb-4">
        <h1 class="text-2xl font-bold">Реєстрація</h1>
        <p class="text-sm text-gray-500">Введіть пошту і пароль, щоб створити акаунт</p>
      </div>
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit">
        <UFormField
          label="Пошта"
          name="email">
          <UInput
            v-model="state.email"
            placeholder="you@example.com"
            class="w-full shadow-xs" />
        </UFormField>

        <UFormField
          label="Пароль"
          name="password">
          <UInput
            v-model="state.password"
            placeholder="Введіть пароль"
            class="w-full shadow-xs"
            type="password" />
        </UFormField>

        <UButton
          type="submit"
          class="justify-center w-full shadow-xs"
          color="neutral">
          Реєстрація
        </UButton>

        <div class="flex justify-center text-sm">
          <p>Вже маєте акаунт?</p>
          <p></p>
          <NuxtLink
            to="/auth/login"
            class="ml-1 underline">
            Увійти
          </NuxtLink>
        </div>
      </UForm>
    </UCard>
  </div>
</template>
