import { customerServices } from '@/services/customers-service/customers-service'
import { useQuery, useMutation } from '@tanstack/vue-query'
import type { IGetCustomerParams } from '@/models/interfaces/customers/i-customer'
import { computed, type Ref } from 'vue'

export const useCustomersData = (params: Ref<IGetCustomerParams>) => {
  const queryKey = computed(() => ['customers-list', params.value])
  return useQuery({
    queryKey,
    queryFn: () => customerServices.getCustomers(params.value),
  })
}
