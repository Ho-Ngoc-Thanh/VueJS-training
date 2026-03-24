<script setup lang="ts">
const props = defineProps<{
  totalProperties: number
  percent: string
  progressPercent: number
}>()

const propertyTypes = [
  { name: 'Luxury Villa', count: 124, color: '#22c55e' },
  { name: 'Beach House', count: 67, color: '#a855f7' },
  { name: 'Modern Condo', count: 89, color: '#3b82f6' },
  { name: 'Penthouse', count: 45, color: '#ef4444' },
]
</script>

<template>
  <div class="bg-white rounded-2xl border border-gray-100 p-5 w-full">
    <!-- Header -->
    <div class="flex justify-between items-center mb-3">
      <span class="text-[20px] font-semibold">Statistics</span>
      <span class="text-gray-400 text-lg tracking-widest">⋮</span>
    </div>

    <!-- Banner -->
    <div class="rounded-xl p-4 mb-4" style="background: linear-gradient(135deg, #f9e4f7 0%, #e8d5f5 40%, #d4e8f5 100%)">
      <div class="flex justify-between items-start">
        <span class="text-[13px] text-gray-500">Total Properties</span>
        <span class="text-[12px] font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-md">
          {{ percent }}
        </span>
      </div>
      <p class="text-[28px] font-medium mt-1">{{ totalProperties }}</p>
      <div class="h-1.5 rounded-full bg-gray-200 mt-3 overflow-hidden">
        <div
          class="h-full rounded-full bg-green-500"
          :style="{ width: progressPercent + '%' }"
        />
      </div>
    </div>

    <!-- Property Types -->
    <p class="text-[14px] font-medium mb-3">Property Types</p>
    <div class="grid grid-cols-2 gap-3">
      <div v-for="item in propertyTypes" :key="item.name">
        <div class="flex justify-between">
          <span class="text-[13px] text-gray-500">{{ item.name }}</span>
          <span class="text-[13px] font-medium">{{ item.count }}</span>
        </div>
        <div class="h-1 rounded-full mt-1.5 w-[60%]" :style="{ background: item.color }" />
      </div>
    </div>
  </div>
</template>