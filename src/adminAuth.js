// /src/adminAuth.js
import { auth } from './firebase.js';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export async function ensureAdminLogin(){
  if (auth.currentUser) return auth.currentUser;
  const email = prompt('ADMIN email');
  const pass  = prompt('ADMIN password');
  if (!email || !pass) throw new Error('로그인이 필요합니다');
  const { user } = await signInWithEmailAndPassword(auth, email, pass);
  return user;
}

export function watchAuth(cb){
  return onAuthStateChanged(auth, cb);
}

export async function adminLogout(){
  await signOut(auth);
}
