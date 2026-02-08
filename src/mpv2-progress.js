// /src/mpv2-progress.js
import { TOTAL_BIG } from './appConfig.js';

/** Firestore Timestamp | string | Date → Date|null */
function toDate(v){
  if (!v) return null;
  if (typeof v?.toDate === 'function') return v.toDate();
  if (v instanceof Date) return isNaN(v) ? null : v;
  const d = new Date(v);
  return isNaN(d) ? null : d;
}

/** 시간차(시간) = 반올림, 최소 0h */
function hoursBetween(a, b){
  if (!a || !b) return null;
  const h = Math.round((b - a) / 36e5); // 1000*60*60
  return Math.max(0, h);
}

/** k단계 셀 텍스트 계산 
 * k단계 완료 시간 = (k단계 → k+1단계 진입 시간)
 * = bigStageDurations[k+1] 또는 startedAt[k] ~ startedAt[k+1]
 */
function durationTextForStage(k, row, now){
  const durMap = row.bigStageDurations || {};
  const starts = row.bigStageStartedAt || {};
  
  // k단계 완료 시간 = (k+1)단계 도착 기록
  const nextStageKey = String(k + 1);
  const recorded = durMap[nextStageKey];
  
  // 1. 완료 기록이 있으면 사용 (k→k+1 진입까지의 시간)
  if (recorded != null && !Number.isNaN(Number(recorded))){
    return `~${Number(recorded)}h`;
  }
  
  // 2. 기록이 없으면 시작시각 차이로 계산
  const aThis = toDate(starts[String(k)]);
  const aNext = toDate(starts[nextStageKey]);
  
  // 2-1. 이미 다음 단계에 진입했으면: start[k] ~ start[k+1]
  if (aThis && aNext){
    const h = hoursBetween(aThis, aNext);
    return h != null ? `~${h}h` : '–';
  }
  
  // 2-2. 현재 진행 중인 단계: start[k] ~ now
  if (k === Number(row.big) && aThis){
    const h = hoursBetween(aThis, now);
    return h != null ? `~${h}h` : '–';
  }
  
  return '–';
}

/** 한 셀(단계 번호 + ~h) HTML */
function cellHTML(k, row, now){
  // k단계 셀에는 k단계 완료 시간을 표시
  const txt = durationTextForStage(k, row, now);
  return `
    <div class="cell">
      <span class="st">${k}</span>
      <span class="hr">${txt}</span>
    </div>
  `;
}

/** 최초 mount: 컨테이너 뼈대 만들기 */
export function mountMoonV2Progress(rootSel, rows, activeId){
  const root = document.querySelector(rootSel);
  if (!root) return;
  // 미리 stage-grid 클래스와 ID를 부여
  root.innerHTML = `
    <div class="bigstage-box">
      <div class="stage-grid" id="mpv2-stage-grid"></div>
    </div>
  `;
  updateMoonV2StageTable(rootSel, rows, activeId);
}

export function updateMoonV2StageTable(rootSel, rows, activeId){
  const root = document.querySelector(rootSel);
  if (!root) return;
  
  const grid = root.querySelector('#mpv2-stage-grid');
  if (!grid) return;

  const row = rows.find(r => r.serverId === activeId) || rows[0];
  if (!row){ grid.innerHTML = ''; return; }

  const now = new Date();
  const parts = [];
  const total = TOTAL_BIG; 

  for (let k = 1; k <= total; k++){
    parts.push(cellHTML(k, row, now));
  }

  // [중요] 껍데기 없이 알맹이만 넣습니다.
  grid.innerHTML = parts.join('');
}