<script setup lang="ts">
import loginBgUrl from '../../assets/images/login-bg.svg'
import { reactive, ref, computed } from 'vue'
import { useLoginMutation } from './useAuthHooks'

const loginMutation = useLoginMutation()
const typePassword = ref('password')
const form = reactive({
  userName: '',
  passWord: '',
  rememberMe: false,
})

const errors = reactive({
  userName: '',
  passWord: '',
})

const togglePassword = () => {
  typePassword.value = typePassword.value === 'password' ? 'text' : 'password'
}

const iconPassword = computed(() => {
  return typePassword.value === 'password' ? 'pi pi-eye-slash' : 'pi pi-eye'
})

const handleSubmit = async () => {
  const data = {
    email: form.userName,
    password: form.passWord,
  }
  loginMutation.mutate(data)
}
</script>

<template>
  <div
    class="flex w-screen h-screen justify-center items-center bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${loginBgUrl})` }"
  >
    <div
      class="w-[374px] h-[500px] bg-white rounded-3xl shadow-md flex flex-col px-8 py-15 justify-between items-center"
    >
      <h1 class="text-5xl font-bold">CRM Home</h1>

      <IconField class="w-full">
        <InputText v-model="form.userName" placeholder="User name" class="w-full border-0" />
        <InputIcon class="pi pi-user" />
      </IconField>

      <IconField class="w-full">
        <InputText
          v-model="form.passWord"
          placeholder="Password"
          :type="typePassword"
          class="w-full"
        />
        <InputIcon :class="iconPassword" class="cursor-pointer" @click="togglePassword" />
      </IconField>

      <div class="flex items-center gap-2 w-full justify-start">
        <Checkbox v-model="form.rememberMe" inputId="ingredient2" :binary="true" />
        <label for="ingredient2"> Remember me </label>
      </div>

      <Button label="Submit" class="w-full" rounded @click="handleSubmit" />
    </div>
  </div>
</template>

<style scoped>
.p-button {
  background-color: #009966;
}
.p-inputtext {
  border: none;
  border-bottom: 1px solid #ccc;
}
</style>
