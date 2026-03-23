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
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('@/features/Dashboard/index.vue'),
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/features/Customers-management/Customer-list/index.vue'),
          alias: 'customers',
        },
        {
          path: 'calendar',
          name: 'calendar',
          // component: () => import('@/features/Calendar/index.vue'),
          component: () => import('@/features/User/index.vue'),
        },
        {
          path: 'chart',
          name: 'chart',
          // component: () => import('@/features/Chart/index.vue'),
          component: () => import('@/features/User/index.vue'),
        },
        {
          path: 'star',
          name: 'star',
          // component: () => import('@/features/Star/index.vue'),
          component: () => import('@/features/User/index.vue'),
        },
        {
          path: 'bell',
          name: 'bell',
          // component: () => import('@/features/Bell/index.vue'),
          component: () => import('@/features/User/index.vue'),
        },
        {
          path: 'setting',
          name: 'setting',
          // component: () => import('@/features/Setting/index.vue'),
          component: () => import('@/features/User/index.vue'),
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
