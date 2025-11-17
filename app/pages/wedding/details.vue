<template>
  <div class="p-4">
    <div class="flex gap-2 mb-2 justify-between">
      <div class="flex w-full justify-between text-gray-400">
        <div>
          <ArrowLeft class="sm:hidden text-gray-500"/>
          <BaseButton class="hidden sm:block" type="btn-primary" name="Back" @click="navigateTo('/wedding')"/>
        </div>
       <div class="flex justify-end w-full gap-2">
          <div
            class="rounded-md p-2 flex gap-2 cursor-pointer"
            :class="$route.path === '/wedding/details' ? 'bg-indigo-600 text-gray-50' : 'bg-gray-200'"
            @click="navigateTo({path: '/wedding/details', query: route.query  })"> 
            <span>Invited Member</span>
            <button v-if="$route.path === '/wedding/details'" @click="isDialogVisible = true">
              <Plus />
            </button>
          </div>
          <button
            class="bg-gray-200 rounded-md p-2 shrink-0"
            :class="$route.path === '/wedding/details/sample-card' ? 'bg-indigo-600 text-gray-50' : 'bg-gray-200'"
            @click="navigateTo({path: '/wedding/details/sample-card', query: route.query  })">
            <span> Sample Card </span>
          </button>
        </div>
      </div>
    </div>

    <NuxtPage />

    <BaseDialog v-model:is-show-dialog="isDialogVisible" title="Invite new member">
      <form @submit.prevent="createInviteMember">
        <TheInputField v-model="inviteModel.title" :label="$t('Invite To')" type="text" required />
        <div class="border-b border-gray-300 my-2" />
        <div class="flex justify-end">
          <BaseButton name="Submit" type="btn-primary" :is-loading="isLoading('create')" />
        </div>
      </form>
    </BaseDialog>
  </div>
</template>

<script lang="ts" setup>
import { Plus, ArrowLeft } from 'lucide-vue-next';
import BaseDialog from '~/components/common/BaseDialog.vue';
import TheInputField from '~/components/common/TheInputField.vue';
import BaseButton from '~/components/common/BaseButton.vue';

const {
  isDialogVisible,
  inviteModel,
  createInviteMember,
  getInviteByEventId,
  isLoading,
} = useInviteMember();

onMounted(() => {
  getInviteByEventId();
})

const route = useRoute();
</script>

<style>

</style>