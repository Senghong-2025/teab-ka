import { defineNuxtPlugin } from '#app';
import axios from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = axios.create({
    baseURL: String(config.public.API_URL || ''),
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use(
    (config) => {
      // Example: add token if needed
      // const token = nuxtApp.$auth.token;
      // if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.error('API Error:', error);
      return Promise.reject(error);
    }
  );

  return {
    provide: {
      api,
    },
  };
});
