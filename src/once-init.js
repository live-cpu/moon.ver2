// /src/once-init.js
import { db, ST } from './firebase.js';
import { doc, setDoc } from 'firebase/firestore';

// 프로젝트의 SERVERS 배열과 동일하게!
const SERVERS = ['tonbery','chocobo','carbuncle','fenrir','moogle'];

export async function bootstrapProgress(){
  for (const id of SERVERS){
    await setDoc(doc(db, 'progress', id), {
      big_stp: 0,
      updated_at: ST(),
      missionStartAt: ST(),
      bigStageUpdatedAt: { "1": ST() },   // 1단계 시작 시각
      title: id,
      location: '-'
    }, { merge: true });
  }
  console.log('[bootstrap] done');
}
