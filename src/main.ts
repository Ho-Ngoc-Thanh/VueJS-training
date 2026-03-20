import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(VueQueryPlugin)
app.use(router)
app.use(pinia)
app.use(PrimeVue, {
  // ripple: true ,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: false || 'none',
    },
  },
})

app.mount('#app')
