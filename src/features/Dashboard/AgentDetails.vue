<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Properties1 from '@/assets/images/properties1.jpg'
import Properties2 from '@/assets/images/properties2.jpg'
import Properties3 from '@/assets/images/properties3.jpg'
import Properties4 from '@/assets/images/properties4.jpg'
import avt1 from '@/assets/images/avt1.jpg'
import avt2 from '@/assets/images/avt2.jpg'

const route = useRoute()
const router = useRouter()

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

const agentInfo = computed(() => {
  return listCard.value.find((item) => item.id === Number(route.params.id))
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="w-full box-border pb-10 min-h-screen">
    <div class="max-w-5xl mx-auto pt-6">
      <button
        @click="goBack"
        class="mb-6 flex items-center text-[#767A84] hover:text-black transition-colors font-medium"
      >
        <i class="pi pi-arrow-left mr-2"></i> Back to Dashboard
      </button>

      <div v-if="agentInfo">
        <!-- Agent Profile Section -->
        <div class="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex items-center gap-8 mb-8 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full z-0 opacity-70 border-none"></div>
          
          <img
            :src="agentInfo.avatar"
            alt="Agent Avatar"
            class="w-32 h-32 rounded-full object-cover relative z-10 border-4 border-white shadow-lg"
          />
          <div class="flex flex-col relative z-10 w-full">
            <div class="flex justify-between items-center w-full">
              <div>
                <h1 class="text-[32px] font-bold text-gray-900 mb-1">
                  {{ agentInfo.name }} Agent
                </h1>
                <p class="text-[16px] text-[#767A84] font-medium flex items-center gap-2">
                  <i class="pi pi-briefcase text-gray-400"></i>
                  Exclusive Listing Agent
                </p>
              </div>
              <div class="flex gap-3">
                <button class="px-8 py-3 bg-[#0F172B] text-white rounded-full text-[14px] font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                  <i class="pi pi-envelope mr-2"></i> Message
                </button>
                <button class="px-8 py-3 border border-gray-200 text-gray-700 bg-white rounded-full text-[14px] font-medium hover:bg-gray-50 transition-all duration-200">
                  <i class="pi pi-phone mr-2"></i> Call
                </button>
              </div>
            </div>
            
            <div class="flex gap-8 mt-6 pt-6 border-t border-gray-100">
              <div>
                <p class="text-[20px] font-bold text-gray-900">12</p>
                <p class="text-[12px] text-[#767A84] uppercase tracking-wider font-semibold">Active Listings</p>
              </div>
              <div>
                <p class="text-[20px] font-bold text-gray-900">48</p>
                <p class="text-[12px] text-[#767A84] uppercase tracking-wider font-semibold">Total Sold</p>
              </div>
              <div>
                <p class="text-[20px] font-bold text-gray-900">4.9 <i class="pi pi-star-fill text-yellow-400 text-sm"></i></p>
                <p class="text-[12px] text-[#767A84] uppercase tracking-wider font-semibold">Rating</p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-[24px] font-bold text-gray-900 mb-6 flex items-center gap-2">
          Current Assigned Property
        </h2>

        <!-- Property Detail Section -->
        <div class="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row mb-12 transform hover:shadow-md transition-shadow duration-300">
          <div class="md:w-[50%] h-[400px]">
            <img :src="agentInfo.image" alt="Property Image" class="w-full h-full object-cover" />
          </div>
          <div class="p-10 md:w-[50%] flex flex-col justify-center relative">
            
            <div
              class="inline-block px-4 py-1 mb-6 rounded-full text-sm font-semibold max-w-max border"
              :class="
                agentInfo.status === 'Sold'
                  ? 'bg-[#E5F1FF] text-[#2B7FFF] border-[#B3D4FF]'
                  : 'bg-[#E5F5EF] text-[#009966] border-[#B3E6D2]'
              "
            >
              {{ agentInfo.status }}
            </div>
            
            <h2 class="text-[36px] font-extrabold text-[#0F172B] leading-tight mb-3">
              {{ agentInfo.name }}
            </h2>
            
            <div class="flex items-center text-[#767A84] mb-8 gap-2">
              <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <i class="pi pi-map-marker text-gray-500"></i>
              </div>
              <span class="text-[18px]">{{ agentInfo.address }}</span>
            </div>
            
            <div class="text-[42px] font-extrabold text-[#009966] mb-8 flex items-baseline gap-2">
              {{ agentInfo.price }}
              <span class="text-[16px] text-gray-400 font-medium line-through" v-if="agentInfo.status === 'For Sale'">
                {{ agentInfo.name === 'Luxury Villa' ? '$1,35M' : '' }}
              </span>
            </div>
            
            <div class="border-t border-gray-100 pt-8 mt-auto">
              <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center text-[#0F172B] font-medium bg-gray-50 p-4 rounded-xl">
                  <i class="pi pi-check-circle text-[#009966] mr-3 text-lg"></i> Validated Title
                </div>
                <div class="flex items-center text-[#0F172B] font-medium bg-gray-50 p-4 rounded-xl">
                  <i class="pi pi-key text-[#009966] mr-3 text-lg"></i> Ready to Move
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Fallback when ID doesn't match -->
      <div v-else class="bg-white rounded-3xl p-16 text-center shadow-sm border border-gray-100">
        <i class="pi pi-exclamation-circle text-gray-300 text-6xl mb-4"></i>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Agent Not Found</h2>
        <p class="text-gray-500 mb-6">The agent or property details you are looking for do not exist or have been removed.</p>
        <button @click="goBack" class="px-8 py-3 bg-[#009966] text-white rounded-full font-medium hover:bg-green-700 transition">
          Go Back
        </button>
      </div>
    </div>
  </div>
</template>
