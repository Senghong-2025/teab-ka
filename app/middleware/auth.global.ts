export default defineNuxtRouteMiddleware((to) => {
  if (!import.meta.client) return;

  // Get token from localStorage instead of cookies
  const token = localStorage.getItem('token');

  if (!token && to.path !== '/auth' && to.path !== '/' && !to.path.includes('/share')) {
    return navigateTo('/auth', {replace: true});
  }

  if (token && to.path === '/auth') {
    return navigateTo('/home', {replace: true});
  }
})
