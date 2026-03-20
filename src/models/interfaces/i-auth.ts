export interface IAuth {
  email: string
  password: string
}

export interface IUserInfo {
  id: string
  userId: string
  fullName: string
  otherName: string
  avatar: string
  email: string
  phone: string
  themeColor?: string
  language?: string
  leadsPerPage?: number
  '2FA': boolean
}
