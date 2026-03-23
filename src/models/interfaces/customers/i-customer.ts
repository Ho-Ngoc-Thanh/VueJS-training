export interface IGetCustomerParams {
  keyword?: string
  from?: string
  to?: string
  page?: number
  size?: number
  sorts?: string
}

export interface GetCustomerBody {
  viewerIds: string[]
  memberIds: string[]
  groupIds: string[]
}

export interface LeadDetails {
  id: string
  leadId: string
  avatar: string
  fullName: string
  otherName: string
  cellPhone: string
  cellPhone2: string
  homePhone: string
  workPhone: string
  email: string
  gender: string
  dateOfBirth: string
  maritalStatus: string
  contactPhone: string
  city: string
  state: string
  zipCode: string
  mailingAddressLine: string
  mailingCity: string
  mailingState: string
  mailingZipCode: string
  contactName: string
  contactCellPhone: string
  contactCellPhone2: string
  contactHomePhone: string
  contactEmail: string
  contactWorkPhone: string
}
