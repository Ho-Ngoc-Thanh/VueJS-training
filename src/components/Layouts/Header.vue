<script setup lang="ts">
import { ref } from 'vue'

const searchInput = ref()
</script>

<template>
  <div class="w-full h-18.5 flex justify-between items-center rounded-2xl bg-white px-5 shadow">
    <span class="text-xl font-semibold">Properties</span>
    <div class="flex gap-2.5 items-center justify-center">
      <IconField>
        <InputText v-model="searchInput" placeholder="Type Client Name or ID" class="h-12" />
        <InputIcon class="pi pi-search" />
      </IconField>

      <div class="flex gap-1 items-center bg-white shadow rounded pr-0.5">
        <Avatar icon="pi pi-user" size="large" style="background-color: #ece9fc; color: #2a1261" />
        <div class="flex flex-col justify-between h-full">
          <span>Sarah Johnson</span>
          <span>sarah.j@example.com</span>
        </div>
      </div>
    </div>
  </div>
</template>
