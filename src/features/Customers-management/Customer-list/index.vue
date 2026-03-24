<script setup lang="ts">
import InputSearch from '@/components/shared/Input-search/index.vue'
import { ref, onMounted, watch, watchEffect, computed } from 'vue'
import { useCustomersData } from './useData'
import type { IGetCustomerParams } from '@/models/interfaces/customers/i-customer'

const params = ref<IGetCustomerParams>({ page: 0, size: 10 })

const { data, isLoading } = useCustomersData(params)

const products = computed(() => {
  return (
    data.value?.data.content?.map((item) => ({
      owner: item.contactName,
      lead: item.fullName,
      leadType: item.city,
      status: item.cellPhone2,
      leadStage: item.cellPhone,
      contactName: item.contactName,
      cellPhone: item.cellPhone,
    })) ?? []
  )
})

const totalRecords = computed(() => {
  return data.value?.data.total ?? 0
})

const keyword = ref<string>('')

watch(keyword, (value) => {
  params.value = {
    ...params.value,
    page: 0,
    keyword: value,
  }
})

const columns = [
  { field: 'owner', header: 'Owner' },
  { field: 'lead', header: 'Lead' },
  { field: 'leadType', header: 'Lead type' },
  { field: 'status', header: 'Status' },
  { field: 'leadStage', header: 'Lead stage' },
  { field: 'contactName', header: 'Contact name' },
  { field: 'cellPhone', header: 'Cell phone' },
]

const handlePageChange = (event: any) => {
  params.value = {
    ...params.value,
    page: event.page,
    size: event.rows,
  }
}
</script>

<template>
  <div class="w-full h-full overflow-y-auto flex flex-col gap-4 bg-white p-4 rounded-2xl">
    <h1 class="text-xl font-semibold">Customer List</h1>
    <div class="flex justify-between items-center">
      <InputSearch v-model:keyword="keyword" placeholder="Search by name or ID"></InputSearch>
      <div class="flex gap-2 items-center">
        <Button label="Filter" icon="pi pi-filter" size="small" severity="secondary" />
        <Button label="Import" size="small" severity="secondary" />

        <Button label="Create" icon="pi pi-plus-circle" size="small" />
      </div>
    </div>

    <DataTable :value="products" :loading="isLoading" tableStyle="min-width: 50rem">
      <Column
        v-for="column in columns"
        :key="column.field"
        :field="column.field"
        :header="column.header"
      >
      </Column>
    </DataTable>
    <Paginator
      :first="(params.page || 0) * (params.size || 10)"
      :rows="params.size"
      :totalRecords="totalRecords"
      :rowsPerPageOptions="[10, 20, 30]"
      @page="handlePageChange"
    >
      <template #start="slotProps">
        Page: {{ slotProps.state.page + 1 }} First: {{ slotProps.state.first + 1 }} Rows:
        {{ slotProps.state.rows }}
      </template>
    </Paginator>
  </div>
</template>
