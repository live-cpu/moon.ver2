// /src/appConfig.js
export const SERVERS = ['tonbery','chocobo','carbuncle','fenrir','moogle'];
export const TOTAL_BIG = 17; // 20 → 17로 변경
export const SMALLS_PER_BIG = 8; // 작은단계 개수(0~8)
export const TOP_SUBTITLE = ''; // 필요시 사용

export function formatKST(d){
  try{
    const z = new Intl.DateTimeFormat('ko-KR', {
      timeZone:'Asia/Seoul',
      year:'numeric', month:'2-digit', day:'2-digit',
      hour:'2-digit', minute:'2-digit'
    }).format(d);
    return z;
  }catch(_){ return ''; }
}