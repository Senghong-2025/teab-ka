<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  const encodedRoute = route.query.route
  if (encodedRoute) {
    try {
      const decodedPath = atob(encodedRoute.toString())
      router.replace(decodedPath)
    } catch (err) {
      console.error("Invalid route", err)
    }
  } else {
    console.warn("No route to redirect to")
  }
})
</script>

<template>
  <p>Redirecting...</p>
</template>
