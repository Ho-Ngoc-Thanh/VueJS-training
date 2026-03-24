<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Properties1 from '@/assets/images/properties1.jpg'
import Properties2 from '@/assets/images/properties2.jpg'
import Properties3 from '@/assets/images/properties3.jpg'
import Properties4 from '@/assets/images/properties4.jpg'
import avt1 from '@/assets/images/avt1.jpg'
import avt2 from '@/assets/images/avt2.jpg'
// import avt3 from '@/assets/images/avt3.jpg'
// import avt4 from '@/assets/images/avt4.jpg'

const router = useRouter()

const handleSubmit = (id: number) => {
  router.push(`/dashboard/agent/${id}`)
}

const tabs = ['All Properties', 'For Sale', 'Sold']
const activeTab = ref('All Properties')

const listCard = ref([
  {
    id: 1,
    name: 'Luxury Villa',
    address: 'Beverly Hills, CA',
    price: '$1,2M',
    status: 'For Sale',
    image: Properties1,
    avatar: avt1,
  },
  {
    id: 2,
    name: 'Beach House',
    address: 'Beverly Hills, CA',
    price: '$1M',
    status: 'Sold',
    image: Properties2,
    avatar: avt2,
  },
  {
    id: 3,
    name: 'Modern Condo',
    address: 'Manhattan, NY',
    price: '$2M',
    status: 'Sold',
    image: Properties3,
    avatar: avt1,
  },
  {
    id: 4,
    name: 'Penthouse',
    address: 'Manhattan, NY',
    price: '1,200,000 đ',
    status: 'Sold',
    image: Properties4,
    avatar: avt2,
  },
])

const filteredProperties = computed(() => {
  if (activeTab.value === 'All Properties') {
    return listCard.value
  }
  return listCard.value.filter((item) => item.status === activeTab.value)
})
</script>

<template>
  <div class="w-full box-border">
    <div class="flex justify-between items-center bg-[#FFFFFFB2] rounded-2xl p-4 w-full box-border">
      <div class="flex flex-col gap-2">
        <span class="text-[20px] font-semibold">Featured Properties</span>
        <span class="text-[14px] text-[#767A84]">Explore our exclusive listings</span>
      </div>
      <div class="flex gap-2">
        <div class="inline-flex items-center gap-1 bg-gray-100 rounded-full p-1">
          <button
            v-for="tab in tabs"
            :key="tab"
            @click="activeTab = tab"
            :class="[
              'px-4 py-1.5 rounded-full text-[14px] font-medium transition-all',
              activeTab === tab
                ? 'bg-[#009966] text-white'
                : 'text-gray-500 hover:bg-white hover:text-gray-800',
            ]"
          >
            {{ tab }}
          </button>
        </div>
      </div>
    </div>
    <div class="p-2 grid grid-cols-4 gap-4">
      <div
        v-for="item in filteredProperties"
        :key="item.id"
        class="border border-gray-100 rounded-2xl h-[380px] bg-white relative z-0"
      >
        <img :src="item.image" alt="" class="w-full h-1/2 object-cover rounded-t-2xl" />
        <div class="absolute top-3 left-3 px-2 py-1 rounded-xl z-10 bg-[#FFFFFFB2]">
          Residential
        </div>
        <div
          class="absolute top-3 right-3 text-white px-2 py-1 rounded-xl z-10"
          :class="item.status === 'Sold' ? 'bg-[#2B7FFF]' : 'bg-[#009966]'"
        >
          {{ item.status }}
        </div>
        <div
          class="absolute top-32 h-10.5 text-[20px] font-semibold left-3 px-2 py-1 rounded-xl z-10 bg-white"
        >
          {{ item.price }}
        </div>
        <div class="p-4">
          <p class="text-[20px] font-semibold">{{ item.name }}</p>
          <div class="flex gap-1 item-center">
            <i class="pi pi-map-marker text-[#767A84] pt-1 flex item-center"></i>
            <p class="text-[14px] text-[#767A84]">{{ item.address }}</p>
          </div>
        </div>
        <div class="p-4 flex justify-between items-center">
          <div class="flex gap-2">
            <div
              class="w-9 h-9 rounded-lg bg-cover"
              :class="item.avatar === 'avt1' ? 'bg-start' : 'bg-right'"
              :style="{ backgroundImage: `url(${item.avatar})` }"
            />
            <div class="flex flex-col">
              <p class="text-[14px]">{{ item.name }}</p>
              <p class="text-[12px] text-[#767A84]">Listing Agent</p>
            </div>
          </div>

          <Button
            class="h-10 w-10 text-[14px] rounded-2xl"
            icon="pi pi-arrow-up-right"
            style="background-color: #0F172B;"
            @click="handleSubmit(item.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
