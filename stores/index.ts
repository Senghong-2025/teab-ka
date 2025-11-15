/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineStore } from 'pinia'
import type { IUserResponse } from '~/models/auth';

export const useStore = defineStore('app', {
  state: () => {
    return {
      count: 0,
      name: 'Havmk',
      isAdmin: true,
      items: [],
      hasChanged: true,
      user: {} as IUserResponse
    }
  },
  actions: {
    setUser (user: any) {
      this.user = user;
    }
  }
})