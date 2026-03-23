import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '@/components/Layouts/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth-infos/auth-infos'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: AuthLayout,
      children: [
        {
          path: 'customers',
          name: 'customers',
          component: () => import('@/features/Customers-management/Customer-list/index.vue'),
        },
      ],
      alias: '/dashboard',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/features/Auth/index.vue'),
    },
  ],
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  const isLoggedIn = !!authStore.getToken

  if (!isLoggedIn && to.path !== '/login') {
    return '/login'
  }
})

export default router
