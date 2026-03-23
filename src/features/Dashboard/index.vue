<script setup lang="ts">
import { ref } from 'vue'
import icon2 from '@/assets/images/icon2.png'
import icon3 from '@/assets/images/icon3.png'
import icon4 from '@/assets/images/icon4.png'
import icon1 from '@/assets/images/icon1.png'

const searchInput = ref()
const handleSubmit = async () => {

}

const listCard = [
  {
    id: '1',
    title: 'Total Properties',
    value: '847',
    percent: '+12.5%',
  },
  {
    id: '2',
    title: 'Active Listings',
    value: '142',
    percent: '+12.5%',
  },
  {
    id: '3',
    title: 'Sold This Month',
    value: '67',
    percent: '+12.5%',
  },
  {
    id: '4',
    title: 'Total Revenue',
    value: '$12.4M',
    percent: '+12.5%',
  },
]
</script>

<template>
  <div class="w-full h-auto flex flex-col items-center rounded-2xl bg-[#FFFFFBB2] shadow">
    <div class="flex justify-between w-full p-4">
      <div class="flex flex-col gap-2">
        <span class="text-[14px] text-[#767A84]">Ready to close more deals?</span>
        <span class="text-[20px] font-semibold">Welcome Back, Sarah 👋</span>
      </div>
      <Button label="New Property" icon="pi pi-plus" class="h-10 w-40 text-[14px] rounded-2xl" @click="handleSubmit" />
    </div>

    <div class=" w-full grid grid-cols-4 gap-4 p-4">
        <div v-for="item in listCard" :key="item.id" class="flex flex-col gap-5 h-[164px] bg-[#FFFFFFB2] rounded-2xl p-4">
            <div class="flex justify-between items-center">
                <img :src="item.id === '1' ? icon1 : item.id === '2' ? icon2 : item.id === '3' ? icon3 : icon4" class="w-10 h-10" alt="icon2">
                <span class="h-7 w-15 flex items-center justify-center rounded-lg text-[12px] bg-white text-green-500">{{ item.percent }}</span>
            </div>
            <span class="text-[14px] text-[#767A84]">{{ item.title }}</span>
            <span class="text-[20px] font-semibold">{{ item.value }}</span>
        </div>
    </div>

  </div>
</template>
