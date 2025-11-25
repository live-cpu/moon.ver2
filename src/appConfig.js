export const SERVERS = ['tonbery','chocobo','carbuncle','fenrir','moogle'];
export const TOTAL_BIG = 20;       // 큰단계 1..20
export const SMALLS_PER_BIG = 8;   // 작은단계 0..8  (8칸 진행, 9눈금)

export const TOP_SUBTITLE = '';

export function formatKST(d){
  try{
    return new Intl.DateTimeFormat('ko-KR',{
      timeZone:'Asia/Seoul', year:'numeric', month:'2-digit', day:'2-digit',
      hour:'2-digit', minute:'2-digit'
    }).format(d);
  }catch{ return ''; }
}
