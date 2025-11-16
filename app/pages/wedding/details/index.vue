<template>
  <InviteList :invite-list="inviteList" :is-loading="isLoading" @delete="deleteInviteMember" />
</template>

<script lang="ts" setup>
import InviteList from './invite-list.vue';

const {
  getInviteByEventId,
  inviteList,
  isLoading,
  deleteInviteMember,
} = useInviteMember();

onMounted(() => {
  getInviteByEventId();
})
</script>

<style></style>