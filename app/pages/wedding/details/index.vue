<template>
  <InviteList
    v-model:dialog-model="confirmDeleteVisible"
    :invite-list="inviteList"
    :is-loading="isLoading"
    @delete="deleteInviteMember"
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
} = useInviteMember();

onMounted(() => {
  getInviteByEventId();
})
</script>

<style></style>