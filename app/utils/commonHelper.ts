export const useShareBackground = () => {
  const route = useRoute();
  const bg = computed(() => {
    const value = route.query.bc;
    if (!value) return '#ffc310eb';
    return String(value);
  });
  return bg;
};

export const useShareTextColor = () => {
  const route = useRoute();
  const tc = computed(() => {
    const value = route.query.tc;
    if (!value) return '#78350f'; // Default to amber-900
    return String(value);
  });
  return tc;
};