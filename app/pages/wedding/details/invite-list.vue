<template>
  <div>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse bg-gray-100">
        <thead>
          <tr class="bg-gray-200 text-gray-500">
            <th class="border border-gray-300 px-4 py-2 text-left">Number</th>
            <th class="border border-gray-300 px-4 py-2 text-left">Invite Name</th>
            <th class="border border-gray-300 px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(invite, index) in inviteList" :key="index" class="hover:bg-gray-50">
            <td class="border border-gray-300 px-4 py-2">{{ index + 1 }}</td>
            <td class="border border-gray-300 px-4 py-2">{{ invite.title }}</td>
            <td class="border border-gray-300 px-4 py-2">
              <div class="flex gap-3 justify-center">
                <button @click="onClickPreviewSend(invite)">
                  <Send :size="20" class="text-indigo-500" />
                </button>
               <input type="checkbox" style="width: 16px;" :checked="invite.isInvited" @change="onUpdateIsInvited(invite.id, !invite.isInvited)">
                <button @click="onClickDelete(invite.id)">
                  <Trash :size="20" class="text-red-400" />
                </button>
              </div>
            </td>
          </tr>
          <tr v-if="isLoading('get') && !inviteList.length">
            <td colspan="3" class="border border-gray-300 px-4 py-8 text-center text-gray-500">
              <span>{{ $t('Getting data..') }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <BaseDialog v-model:is-show-dialog="model">
      <div class="text-center my-6 flex items-center gap-2 justify-center">
        <TriangleAlert :size="20" class="text-yellow-500" />
        <span>Are you sure you want to delete this member?</span>
      </div>
      <div class="border-b my-2" />
      <div class="flex justify-end gap-2">
        <BaseButton name="No" @click="model = false" />
        <BaseButton name="Yes" type="btn-primary" :is-loading="isLoading(`delete${inviteId}`)" @click="$emit('delete', inviteId)" />
      </div>
    </BaseDialog>
  </div>
</template>

<script lang="ts" setup>
import type { IInviteMember } from '~/models/invite';
import BaseButton from '~/components/common/BaseButton.vue';
import BaseDialog from '~/components/common/BaseDialog.vue';
import { TriangleAlert,Trash, Send } from 'lucide-vue-next';

const props = defineProps<{
  inviteList: IInviteMember[]
  isLoading: (key: string) => boolean
  dialogModel: boolean
}>();

const inviteId = ref();
const emit = defineEmits<{
  (e: "delete", id: string): void
  (e: "update:dialogModel", val: boolean): void
  (e: "updateIsInvited", id: string, isInvited: boolean): void
}>();

const model = computed({
  get: () => props.dialogModel,
  set: (val) => emit('update:dialogModel', val)
});

const { t } = useI18n();

const onClickDelete = (id?: string) => {
  model.value = true;
  inviteId.value = id;
}

const onUpdateIsInvited = (id: string | undefined, isInvited: boolean) => {
  if (!id) return;
  emit('updateIsInvited', id, isInvited);
};

const onClickPreviewSend = async (invite: IInviteMember) => {
  const inviteCardColor = localStorage.getItem('inviteCardColor');
  const params = new URLSearchParams({
    event_id: String(invite.eventId),
    type: "2",
    to: invite.title,
    bc: String(inviteCardColor)
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