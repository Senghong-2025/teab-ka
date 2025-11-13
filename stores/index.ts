import { defineStore } from 'pinia'

export const useStore = defineStore('app', {
  state: () => {
    return {
      count: 0,
      name: 'Havmk',
      isAdmin: true,
      items: [],
      hasChanged: true,
      user: {}
    }
  },
})