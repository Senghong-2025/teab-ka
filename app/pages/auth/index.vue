<template>
  <div class="grid place-content-center justify-center">
    <form class="w-[350px] bg-gray-200 rounded-md p-4 py-10 mt-[40%]"  @submit.prevent="onSubmit">
      <div class="text-[40px] text-indigo-500 font-bold text-center">
        {{ isLogin ? 'Login' : "Register" }}
      </div>
      <TheInputField
        v-model="authModel.email"
        :label="$t('Email')"
        type="email"
        required
      />
      <TheInputField
        v-model="authModel.password"
        :label="$t('Password')"
        type="password"
        required
      />
      <template v-if="!isLogin">
        <TheInputField
          v-model="authModel.confirmPassword"
          :label="$t('Password')"
          type="password"
        />
      </template>
      <button class="btn-primary w-full my-2">
        <span>{{ isLogin ? 'Login' : 'Register' }}</span>
      </button>
      <div class="flex justify-end my-2">
        Already have an account ?
        <span class="text-blue-500 ml-2 cursor-pointer hover:underline" @click="isLogin = !isLogin">
          {{ isLogin ? 'Register' : 'Login' }}
        </span> 
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import TheInputField from '~/components/common/TheInputField.vue';

const { authModel, onSubmit, isLogin } = useAuthentication();

definePageMeta({
  layout: 'auth'
})
</script>