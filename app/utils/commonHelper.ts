export const useShareBackground = () => {
  const route = useRoute();
  const bg = computed(() => {
    const value = route.query.bc;
    if (!value) return '#ffc310eb'; 
    return String(value);
  });
  return bg;
};