<template>
  <InviteList
    v-model:dialog-model="confirmDeleteVisible"
    :invite-list="inviteList"
    :is-loading="isLoading"
    @delete="deleteInviteMember"
    @update-is-invited="updateIsInvited"
  />
</template>

<script lang="ts" setup>
import InviteList from './invite-list.vue';

const {
  getInviteByEventId,
  inviteList,
  isLoading,
  deleteInviteMember,
  confirmDeleteVisible,
  updateIsInvited,
} = useInviteMember();

onMounted(() => {
  getInviteByEventId();
})
</script>

<style></style>