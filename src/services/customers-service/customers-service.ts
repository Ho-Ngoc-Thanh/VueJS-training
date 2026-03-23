import api from '@/configs/api-config-axios/axios-config'
import type { ResponseListApi } from '@/models/interfaces/commons'
import type {
  GetCustomerBody,
  IGetCustomerParams,
  LeadDetails,
} from '@/models/interfaces/customers/i-customer'

export const customerServices = {
  async getCustomers(params: IGetCustomerParams) {
    const currentBody: GetCustomerBody = { memberIds: [], viewerIds: [], groupIds: [] }
    const { data } = await api.post<ResponseListApi<LeadDetails>>(
      '/crm/leads/search',
      currentBody,
      {
        params,
      },
    )
    return data
  },
}
