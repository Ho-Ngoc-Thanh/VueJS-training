import { useMutation } from '@tanstack/vue-query'
import { login } from '@/services/auth-service/auth-service'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth-infos/auth-infos'
import type { IAuth } from '@/models/interfaces/i-auth'

export const useLoginMutation = () => {
  const router = useRouter()
  const authStore = useAuthStore()
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      router.push('/dashboard')
      authStore.setToken(data.data.token)
      authStore.setUserInfos(data.data.userInfo)
    },
    onError: (error) => {
      console.log(error)
    },
  })
}
