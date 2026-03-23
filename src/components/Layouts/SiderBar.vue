<script setup lang="ts">
import { ref } from 'vue'
import { PrimeIcons } from '@primevue/core/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const itemSelected = ref('1')

const handleSelectItem = (id: string, path: string) => {
  itemSelected.value = id
  if (id === '7') {
    localStorage.removeItem('token')
    router.push('/login')
  } else {
    router.push(`/${path}`)
  }
}

const items = [
  {
    id: '1',
    icon: PrimeIcons.BUILDING,
    path: 'dashboard',
  },
  {
    id: '2',
    icon: PrimeIcons.USERS,
    path: 'user',
  },
  {
    id: '3',
    icon: PrimeIcons.CALENDAR,
    path: 'calendar',
  },
  {
    id: '4',
    icon: PrimeIcons.CHART_BAR,
    path: 'chart',
  },
  {
    id: '5',
    icon: PrimeIcons.STAR_HALF_FILL,
    path: 'star',
  },

  {
    id: '6',
    icon: PrimeIcons.BELL,
    path: 'bell',
  },
  {
    id: '7',
    icon: `${PrimeIcons.COG} pi-spin`,
    path: 'setting',
  },
]
</script>

<template>
  <div
    class="max-w-30 w-full h-full flex flex-col gap-7 items-center rounded-2xl bg-white px-5 shadow py-5"
  >
    <div v-for="value in items" :key="value.id" @click="handleSelectItem(value.id, value.path)">
      <div
        class="flex justify-center items-center size-14 rounded-xl cursor-pointer"
        :class="
          itemSelected === value.id ? 'bg-[#009966] text-white' : 'transition-colors duration-1000 '
        "
      >
        <i :class="value.icon" style="font-size: 1.5rem"></i>
      </div>
    </div>
  </div>
</template>
