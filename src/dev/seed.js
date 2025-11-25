// /src/dev/seed.js  (임시 실행 후 삭제/주석 권장)
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from "../firebase"; // 당신의 src/firebase.js가 export한 app

const db = getFirestore(app);

export async function seedCommentsOnce() {
  const comments = collection(db, "comments");
  await addDoc(comments, {
    server_id: "tonbery",
    content: "처음으로 한 마디 남겨봅니다!",
    created_at: serverTimestamp()
  });
  await addDoc(comments, {
    server_id: "carbuncle",
    content: "카벙클도 출발~",
    created_at: serverTimestamp()
  });
  console.log("[seed] comments 2건 추가 완료");
}
