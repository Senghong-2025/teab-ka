export default defineNuxtRouteMiddleware((to) => {
  if (!import.meta.client) return;

  const cookie = useCookie('token') ?? null;
  const token = cookie.value;
  if (!token && to.path !== '/auth' && to.path !== '/') {
    return navigateTo('/auth', {replace: true});
  }

  if (token && to.path === '/auth') {
    return navigateTo('/home', {replace: true});
  }
})
