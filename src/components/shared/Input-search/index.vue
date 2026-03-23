<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search',
  },
})

const keyword = defineModel<string>('keyword', {
  default: '',
})

const localKeyword = ref(keyword.value)
let timeoutId: ReturnType<typeof setTimeout> | null = null

// Watch local input changes and debounce the update to the parent model
const onUpdate = (value: string | undefined) => {
  if (timeoutId) clearTimeout(timeoutId)
  timeoutId = setTimeout(() => {
    keyword.value = value || ''
  }, 500)
}

// Keep local state in sync if parent changes the model directly
watch(keyword, (newVal) => {
  if (newVal !== localKeyword.value) {
    localKeyword.value = newVal
  }
})
</script>

<template>
  <IconField>
    <InputIcon class="pi pi-search" />
    <InputText v-model="localKeyword" @update:modelValue="onUpdate" :placeholder="placeholder" />
  </IconField>
</template>
