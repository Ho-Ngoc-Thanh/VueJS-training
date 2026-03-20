import api from '@/configs/api-config-axios/axios-config'
import type { IAuth } from '@/models/interfaces/i-auth'
import type { ResponseApi, ResponseLogin } from '@/models/interfaces/commons'

export const login = async (data: IAuth) => {
  try {
    const response = await api.post<ResponseApi<ResponseLogin>>('/crm/auth/login', data)
    return response.data
  } catch (error) {
    throw error
  }
}
