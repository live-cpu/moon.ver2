import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey:     import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId:  import.meta.env.VITE_FB_PROJECT_ID,
  appId:      import.meta.env.VITE_FB_APP_ID,
};

const app  = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);
export const ST   = serverTimestamp;

// (선택) 콘솔에서 쉽게 테스트하려면 dev에서 전역으로 노출
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
if (import.meta.env.DEV) {
  window.FB = { auth, signInWithEmailAndPassword, onAuthStateChanged, signOut };
}
