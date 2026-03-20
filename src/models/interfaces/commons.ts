import type { IUserInfo } from './i-auth'

export interface ResponseApi<T> {
  data: T
  error: any
  code: string
}

export interface ResponseLogin {
  token: string
  userInfo: IUserInfo
  refreshToken: string
}
