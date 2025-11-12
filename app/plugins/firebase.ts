import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(() => {
   const firebaseConfig = {
        apiKey: "AIzaSyDEHh4z_bNShZJxpAhQTvdIbw4p_1mLVto",
        authDomain: "teabka-f1af8.firebaseapp.com",
        projectId: "teabka-f1af8",
        storageBucket: "teabka-f1af8.firebasestorage.app",
        messagingSenderId: "756263579827",
        appId: "1:756263579827:web:29525ad541ca6f552e00c6",
        measurementId: "G-B67SBSSZ53"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const db = getFirestore(app)

    return {
        provide: {
        firebase: app,
        auth,
        db,
        }
    }
});
