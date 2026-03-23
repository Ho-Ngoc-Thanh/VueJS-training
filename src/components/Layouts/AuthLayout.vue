<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './Header.vue'
import SiderBar from './SiderBar.vue'
</script>

<template>
  <div
    class="flex w-screen h-screen justify-center bg-gradient-to-b from-pink-100 via-purple-100 to-white pb-3"
  >
    <div class="flex w-full max-w-400 gap-2 pt-3">
      <div class="sideBar">
        <SiderBar></SiderBar>
      </div>
      <div class="flex flex-col w-full gap-2">
        <Header></Header>
        <RouterView />
      </div>
    </div>
  </div>
</template>
