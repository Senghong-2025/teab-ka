<template>
  <div class="space-y-2">
    <div v-for="(invite, index) in inviteList" :key="index" class="bg-gray-100 p-4 rounded-md flex justify-between items-center">
      <span>{{ invite.title }}</span>
      <div class="flex gap-3">
        <button @click="onClickPreviewSend(invite)">
          <Send :size="20" class="text-indigo-500" />
        </button>
        <button @click="onClickDelete(invite.id)">
          <Trash :size="20" class="text-red-400" />
        </button>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="isLoading && (!inviteList || inviteList.length === 0)" class="text-center py-8 text-gray-600">
      <span>{{ $t('Getting') }}</span>
    </div>

    <!-- Empty state -->
    <div v-else-if="!inviteList || inviteList.length === 0" class="text-center py-8 text-gray-500">
      <span>{{ $t('No invitations yet') }}</span>
    </div>

    <BaseDialog v-model:is-show-dialog="isShowDialog">
      <div class="text-center my-6 flex items-center gap-2 justify-center">
        <TriangleAlert :size="20" class="text-yellow-500" />
        <span>Are you sure you want to delete this member?</span>
      </div>
      <div class="border-b my-2" />
      <div class="flex justify-end gap-2">
        <BaseButton name="No" :is-loading="isLoading" @click="isShowDialog = false" />
        <BaseButton name="Yes" type="btn-primary" :is-loading="isLoading" @click="onCofirmDelete" />
      </div>
    </BaseDialog>
  </div>
</template>

<script lang="ts" setup>
import type { IInviteMember } from '~/models/invite';
import BaseButton from '~/components/common/BaseButton.vue';
import BaseDialog from '~/components/common/BaseDialog.vue';
import { TriangleAlert,Trash, Send } from 'lucide-vue-next';

const isShowDialog = ref(false);
defineProps<{
  inviteList: IInviteMember[]
  isLoading: boolean
}>();

const inviteId = ref();
const emit = defineEmits<{
  (e: "delete", id: string): Promise<void>
}>();

const { t } = useI18n();

const onClickDelete = (id?: string) => {
  isShowDialog.value = true;
  inviteId.value = id;
}

const onCofirmDelete = async () => {
  await emit('delete', inviteId.value);
  isShowDialog.value = false;
}


const onClickPreviewSend = async (invite: IInviteMember) => {
  const inviteBgColor = localStorage.getItem('inviteBgColor');
  const params = new URLSearchParams({
    event_id: String(invite.eventId),
    type: "2",
    to: invite.title,
    bc: String(inviteBgColor)
  });

  const url = `/wedding/share?${params.toString()}`;
  if (navigator.share) {
    try {
      await navigator.share({
        title: t('Wedding Invitation'),
        url
      });
    } catch (err) {
      console.error('Share cancelled', err);
    }
  } else {
    window.open(url, "_blank");
  }
};

</script>

<style scoped></style>