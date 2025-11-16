import { reactive } from "vue";

export function useLoading(initial?: Record<string, boolean>) {
  const state = reactive<Record<string, boolean>>({ ...(initial || {}) });

  const setLoading = (key: string, value: boolean) => {
    state[key] = value;
  };

  const isLoading = (key: string) => !!state[key];

  return {
    setLoading,
    isLoading,
  };
}
