// api.js
import axios from 'axios'
import { useAuthStore } from '@/stores/auth-infos/auth-infos'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
})

api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  const token = authStore.getToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

export default api
