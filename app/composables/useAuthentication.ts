import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type UserCredential } from "firebase/auth";
import type { IReguster, IUserResponse } from "~/models/auth";
import { useStore } from "../../stores/index";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export default function useAuthentication() {
  const { $auth, $db } = useNuxtApp();
  const store = useStore();
  const isLogin = ref(true);
  const isLoading = ref(false);
  
  const onSwitch = () => isLogin.value = !isLogin.value;
  const createRandomId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  const authModel = reactive<IReguster>({
    email: '',
    password: "",
    confirmPassword: "",
    username: "",
    phone: ""
  });
  const registerWithEmail = async () => {
    isLoading.value = true;
    try {
      const response = await createUserWithEmailAndPassword($auth, authModel.email, authModel.password);
      const colectdoc = collection($db, "users");
      const saveUser: IUserResponse = {
        username: authModel.username,
        phone: authModel.phone,
        password: authModel.password,
        email: authModel.email,
        id: response.user.uid,
        account_type: 1,
        random_id: createRandomId(),
      }
      await addDoc(colectdoc, saveUser);
      const token = await response.user.getIdToken();

      // Store in localStorage (no expiration)
      if (import.meta.client) {
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', response.user.uid);
      }

      await getUserById();
      window.location.href = '/home';
    } catch (error) {
      throw new Error(`Create account error: ${error}`);
    } finally {
      isLoading.value = false;
    }
  };

  const loginWithEmail = async () => {
    isLoading.value = true;
    try {
      const response = await signInWithEmailAndPassword($auth, authModel.email, authModel.password);
      const result = response as UserCredential;
      const token = await result.user.getIdToken();

      // Store in localStorage (no expiration)
      if (import.meta.client) {
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', response.user.uid);
      }

      await getUserById(result.user.uid);
      window.location.href = '/home';
      return response;
    } catch (error) {
      throw new Error(`Login error: ${error}`);
    } finally {
      isLoading.value = false;
    }
  };


  const onSubmit = async () => {
    if (isLogin.value) {
      await loginWithEmail();
    } else {
      await registerWithEmail();
    }
  }

  const onLogout = () => {
    // Clear localStorage
    if (import.meta.client) {
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
    }
    store.user = {} as IUserResponse;
    navigateTo('/');
  };

  const getUserById = async (id?: string) => {
    const userCollection = collection($db, "users");
    const userId = id || (import.meta.client ? localStorage.getItem('user_id') : null);
    const q = query(userCollection, where('id', '==', userId));
    const querySnapshot = (await getDocs(q));
    querySnapshot.docs.map((doc) => {
      const data = doc.data();
      store.setUser(data);
    })
  };

  // Helper function to get token from localStorage
  const getToken = (): string | null => {
    if (import.meta.client) {
      return localStorage.getItem('token');
    }
    return null;
  };

  // Helper function to get user_id from localStorage
  const getUserId = (): string | null => {
    if (import.meta.client) {
      return localStorage.getItem('user_id');
    }
    return null;
  };

  // Check if user is authenticated
  const isAuthenticated = (): boolean => {
    return !!getToken();
  };

  return {
    registerWithEmail,
    authModel,
    loginWithEmail,
    isLogin,
    onSubmit,
    onLogout,
    onSwitch,
    getUserById,
    isLoading,
    getToken,
    getUserId,
    isAuthenticated,
  }
};