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
      useCookie('token').value = token;
      useCookie('user_id').value = response.user.uid;
      await getUserById();
      navigateTo('/home');

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
      useCookie('token').value = token;
      useCookie('user_id').value = response.user.uid;
      await getUserById();
      navigateTo('/home');
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
    useCookie('token').value = null;
    store.user = {} as IUserResponse;
    navigateTo('/');
  };

  const getUserById = async () => {
    const userCollection = collection($db, "users");
    const q = query(userCollection, where('id', '==', useCookie("user_id").value));
    const querySnapshot = (await getDocs(q));
    querySnapshot.docs.map((doc) => {
      const data = doc.data();
      store.setUser(data);
    })
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
  }
};