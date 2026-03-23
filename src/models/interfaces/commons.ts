import type { IUserInfo } from './i-auth'

export interface ResponseApi<T> {
  data: T
  error: any
  code: string
}

export type ResponseListApi<T> = ResponseApi<{
  content: T[]
  page: number
  size: number
  total: number
}>

export interface ResponseLogin {
  token: string
  userInfo: IUserInfo
  refreshToken: string
}
