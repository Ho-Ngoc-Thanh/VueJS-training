import type { IUserInfo } from '@/models/interfaces/i-auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authInfos', {
  state: () => ({
    userInfos: {} as IUserInfo,
    token: '' as string,
  }),

  getters: {
    getUserInfos: (state) => state.userInfos,
    getToken: (state) => state.token,
  },

  actions: {
    setUserInfos(userInfos: IUserInfo) {
      this.userInfos = userInfos
    },
    setToken(token: string) {
      this.token = token
    },
  },
  persist: true,
})
