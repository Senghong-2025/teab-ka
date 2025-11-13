import { useStore } from './../../stores/index';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type UserCredential } from "firebase/auth";
import type { IReguster } from "~/models/auth";

export default function useAuthentication() {
  const { $auth } = useNuxtApp();
  const store = useStore();
  const isLogin = ref(true);
  const authModel = reactive<IReguster>({
    email: '',
    password: "",
    confirmPassword: "",
    username: "",
    phone: ""
  });
  const registerWithEmail = async () => {
    try {
      const response = await createUserWithEmailAndPassword($auth, authModel.email, authModel.password);
      return response.user;
    } catch (error) {
      throw new Error(`Create account error: ${error}`);
    }
  };

  const loginWithEmail = async () => {
    try {
      const response = await signInWithEmailAndPassword($auth, authModel.email, authModel.password);
      const result = response as UserCredential;
      const token = await result.user.getIdToken();
      useCookie('token').value = token;
      store.user = result;
      navigateTo('/home');
      return response;
    } catch (error) {
      throw new Error(`Login error: ${error}`);
    }
  };


  const onSubmit = async () => {
    if (isLogin) {
      const result = await loginWithEmail();
      console.log('result', result);
    } else {
      registerWithEmail();
    }
  }

  const onLogout = () => {
    useCookie('token').value = null;
    store.user = {};
    navigateTo('/');
  };

  return {
    registerWithEmail,
    authModel,
    loginWithEmail,
    isLogin,
    onSubmit,
    onLogout,
  }
};