// /src/lp.js
import { db, ST } from './firebase.js';
import { ensureAdminLogin, watchAuth, adminLogout } from './adminAuth.js';
import {
  collection, doc, getDoc, setDoc, onSnapshot,
  query, where, orderBy, limit, addDoc, runTransaction
} from 'firebase/firestore';
import { SERVERS, TOTAL_BIG, SMALLS_PER_BIG, TOP_SUBTITLE, formatKST } from './appConfig.js';
import { mountMoonV2Progress, updateMoonV2StageTable } from './mpv2-progress.js';

/* ========================
   관리자 상태
   ======================== */
let IS_ADMIN = false;

const loginBtn  = document.getElementById('lp-admin-login');
const logoutBtn = document.getElementById('lp-admin-logout');
const statusEl  = document.getElementById('lp-admin-status');

if (loginBtn)  loginBtn.addEventListener('click', async () => { try{ await ensureAdminLogin(); } catch(e){ alert(e.message); } });
if (logoutBtn) logoutBtn.addEventListener('click', async () => { await adminLogout(); });

watchAuth(async (user) => {
  if (statusEl) statusEl.textContent = user ? `관리자: ${user.email}` : '로그아웃';

  let ok = false;
  if (user){
    try{
      const r = await getDoc(doc(db, 'roles', user.uid));
      ok = r.exists() && r.data()?.admin === true;
    }catch(e){
      ok = false;
      console.warn('[roles] read failed:', e);
    }
  }
  IS_ADMIN = ok;
  document.documentElement.classList.toggle('lp-admin-auth', ok);
});

/* ========================
   DOM refs
   ======================== */
const els = {
  tabs:      document.querySelectorAll('[data-lp-tab]'),
  subTitle:  document.getElementById('lp-subtitle'),

  // TOP
  topTitle:   document.getElementById('lp-top-title'),
  topLoc:     document.getElementById('lp-top-location'),
  topDistBar: document.getElementById('lp-top-distance-bar'),
  miniUpd:    document.getElementById('lp-updated-mini'),

  // DOWN(댓글)
  cmList:  document.getElementById('lp-comments'),
  cmForm:  document.getElementById('lp-comment-form'),
  cmInput: document.getElementById('lp-comment-input'),
  cmScope: document.getElementById('lp-comment-scope'),

  // − / ＋
  btnDec:  document.getElementById('lp-dec'),
  btnInc:  document.getElementById('lp-inc'),
};

let activeServer = 'tonbery';
let commentsUnsub = null;

/* ========================
   유틸
   ======================== */
const clamp01 = n => Math.max(0, Math.min(1, n));
const setBarPct = (el, pct) => el?.style?.setProperty('--pct', clamp01(pct));
const escapeHtml = (s) => String(s)
  .replaceAll('&','&amp;').replaceAll('<','&lt;')
  .replaceAll('>','&gt;').replaceAll('"','&quot;')
  .replaceAll("'","&#039;");
const toDate = (v) => (typeof v?.toDate === 'function') ? v.toDate() : (v ? new Date(v) : null);

/** LOCATION = "현재큰단계/총-작은" (예: 1/20-0) */
function formatLocation(big, small){
  return `${Number(big)}/${TOTAL_BIG}-${Number(small)}`;
}

/* ========================
   Firestore → 진행도 로딩
   ======================== */
export async function fetchProgressAll(){
  const rows = await Promise.all(SERVERS.map(async (id)=>{
    const ref  = doc(db, 'progress', id);
    const snap = await getDoc(ref);
    if (!snap.exists()){
      return {
        serverId:id,
        title:id,
        big:1, small:0,
        bigStageStartedAt:{},
        bigStageDurations:{},
        updated_at:null
      };
    }
    const d = snap.data();
    return {
      serverId:id,
      title: d.title ?? id,
      big:   Number(d.big ?? 1),
      small: Number(d.small ?? 0),
      bigStageStartedAt: d.bigStageStartedAt || {},
      bigStageDurations: d.bigStageDurations || {},
      updated_at: d.updated_at ?? null
    };
  }));
  return rows;
}

/* ========================
   TOP 표시 갱신
   ======================== */
export async function refreshTop(serverId, cacheMap=null){
  const id = serverId;
  let data = cacheMap?.[id];

  if (!data){
    const ref = doc(db, 'progress', id);
    const snap = await getDoc(ref);
    const d = snap.exists() ? snap.data() : null;
    data = {
      serverId:id,
      title:d?.title ?? id,
      big:Number(d?.big ?? 1),
      small:Number(d?.small ?? 0),
      bigStageStartedAt:d?.bigStageStartedAt || {},
      bigStageDurations:d?.bigStageDurations || {},
      updated_at:d?.updated_at ?? null
    };
  }

  if (els.topTitle) els.topTitle.textContent = data.title || id;
  if (els.topLoc)   els.topLoc.textContent   = formatLocation(data.big, data.small);

  const pct = clamp01((data.small ?? 0) / SMALLS_PER_BIG);
  setBarPct(els.topDistBar, pct);

  if (els.miniUpd){
    const dt = toDate(data.updated_at);
    els.miniUpd.textContent = dt ? `수정시각: ${formatKST(dt)}` : '';
  }

  return { id, data, pct };
}

/* ========================
   진행도 조절(−/＋)
   - 작은단계: 0..8 (SMALLS_PER_BIG)
   - 1-8에서 + → 2-0
   - 1-0에서 − → 0-8 (but 최소는 1-0로 고정)
   ======================== */
async function adjustProgress(delta){
  await ensureAdminLogin();
  if (!IS_ADMIN){ alert('관리자 권한이 필요합니다.'); return; }

  const id  = activeServer;
  const ref = doc(db, 'progress', id);

  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    const d    = snap.data() || {};

    let big   = Number(d.big ?? 1);
    let small = Number(d.small ?? 0);

    const prevBig   = big;
    const prevSmall = small;

    small += delta;

    if (small > SMALLS_PER_BIG){
      if (big < TOTAL_BIG){ big += 1; small = 0; }
      else small = SMALLS_PER_BIG;
    } else if (small < 0){
      if (big > 1){ big -= 1; small = SMALLS_PER_BIG; }
      else small = 0;
    }

    const updates = { big, small, updated_at: ST() };

    // "막 다음 큰단계로 넘어간 순간"(예: 1-8 → 2-0) 기록
    const crossedForward = (big === prevBig + 1) && (prevSmall === SMALLS_PER_BIG) && (small === 0);
    if (crossedForward){
      const startedMap = d.bigStageStartedAt || {};
      const durMap     = d.bigStageDurations || {};
      const now        = new Date();
      const startPrev  = toDate(startedMap[String(prevBig)]);

      const newDurMap = { ...durMap };
      if (startPrev){
        const hours = Math.max(0, Math.round((now - startPrev) / 36e5));
        const arrivalKey = String(big);
        if (newDurMap[arrivalKey] == null) newDurMap[arrivalKey] = hours;
      }

      const newStartedMap = { ...startedMap };
      if (!newStartedMap[String(big)]) newStartedMap[String(big)] = ST();
      if (!newStartedMap['1'])         newStartedMap['1']         = ST();

      updates.bigStageDurations = newDurMap;
      updates.bigStageStartedAt = newStartedMap;
    } else {
      const startedMap = d.bigStageStartedAt || {};
      if (!startedMap['1']){
        updates.bigStageStartedAt = { ...startedMap, '1': ST() };
      }
    }

    tx.set(ref, updates, { merge:true });
  });

  const rows = await fetchProgressAll();
  const map  = Object.fromEntries(rows.map(r=>[r.serverId, r]));
  await refreshTop(id, map);
  updateMoonV2StageTable('#mpv2-progress-root', rows, id);
  window.Route?.setAll(rows);
  window.dispatchEvent(new Event('lp-progress-updated'));
}

/* ========================
   댓글 렌더/구독/작성
   ======================== */
function renderComments(docs) {
  const list = els.cmList;
  if (!list) return;
  if (!docs?.length) {
    list.innerHTML = `<li class="lp-comment" style="opacity:.7">아직 댓글이 없습니다.</li>`;
    return;
  }
  const html = docs.map(docu => {
    const d   = docu.data();
    const sid = (d.server_id || '-').toString();
    const ts  = d.created_at?.toDate ? d.created_at.toDate() : null;
    const at  = ts ? formatKST(ts) : '-';
    const content = (d.content ?? '').toString();
    const tag = (sid[0]||'?').toUpperCase();
    return `
      <li class="lp-comment">
        <span class="lp-cm-tag">${tag}</span>
        <div>${escapeHtml(content)}</div>
        <time>${at}</time>
      </li>
    `;
  }).join('');
  list.innerHTML = html;
}

export function listenComments(scope='all'){
  if (!els.cmList) return ()=>{};
  if (typeof commentsUnsub === 'function'){ commentsUnsub(); commentsUnsub = null; }

  const col = collection(db, 'comments');
  const q = (scope === 'all')
    ? query(col, orderBy('created_at','desc'), limit(30))
    : query(col, where('server_id','==',scope), orderBy('created_at','desc'), limit(30));

  commentsUnsub = onSnapshot(q, (snap)=>renderComments(snap.docs), (err)=>{
    console.error('[comments:onSnapshot]', err);
    els.cmList.innerHTML = `<li class="lp-comment" style="opacity:.7">댓글을 불러오지 못했습니다.</li>`;
  });
  return ()=>{ if (commentsUnsub) commentsUnsub(); };
}

export async function postComment(scopedValue, content){
  const text = (content ?? '').trim();
  if (!text.length) return;
  if (text.length > 500){ alert('댓글은 최대 500자까지 가능합니다.'); return; }
  const serverForPost = (scopedValue && scopedValue !== 'all') ? scopedValue : activeServer;
  await addDoc(collection(db, 'comments'), {
    server_id: serverForPost,
    content: text,
    created_at: ST()
  });
}

/* ========================
   탭
   ======================== */
function activateTab(id){
  activeServer = id;
  els.tabs?.forEach(btn => {
    const on = btn?.dataset?.lpTab === id;
    btn.classList.toggle('is-active', on);
    btn.classList.toggle('on', on);
    btn.setAttribute('aria-current', on ? 'true' : 'false');
  });
}

/* ========================
   초기화
   ======================== */
export async function initLP(progressRows=null){
  if (els.subTitle && TOP_SUBTITLE) els.subTitle.textContent = TOP_SUBTITLE;

  // 탭 클릭 (줌/포커스 없이 데이터/표/3D만 갱신)
  els.tabs?.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const id = e.currentTarget?.dataset?.lpTab;
      if (!id || !SERVERS.includes(id)) return;
      activateTab(id);

      const rows = await fetchProgressAll();
      const map  = Object.fromEntries(rows.map(r=>[r.serverId, r]));
      await refreshTop(id, map);
      updateMoonV2StageTable('#mpv2-progress-root', rows, id);
      window.Route?.setAll(rows);

      if (els.cmScope) els.cmScope.value = id;
      listenComments(id);
    }, { passive:true });
  });

  // − / ＋
  if (els.btnDec) els.btnDec.addEventListener('click', () => adjustProgress(-1));
  if (els.btnInc) els.btnInc.addEventListener('click', () => adjustProgress(+1));

  // 댓글 보기 필터
  if (els.cmScope) els.cmScope.addEventListener('change', () => {
    const scope = els.cmScope.value || 'all';
    listenComments(scope);
  });

  // 댓글 작성
  if (els.cmForm && els.cmInput){
    els.cmForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const scope = els.cmScope?.value || 'all';
      const text  = els.cmInput.value.trim();
      if (!text) return;
      try{
        await postComment(scope, text);
        els.cmInput.value = '';
      }catch(err){ alert('댓글 저장 실패'); }
    });
  }

  // 최초 로딩
  try{
    activateTab(activeServer);
    const rows = progressRows || await fetchProgressAll();
    const map  = Object.fromEntries(rows.map(r=>[r.serverId, r]));
    await refreshTop(activeServer, map);

    if (els.cmScope) els.cmScope.value = activeServer;
    listenComments(activeServer);
  }catch(err){
    console.error('[LP:init]', err);
  }
}

/* ========================
   마운트
   ======================== */
let _mounted = false;
export async function mountLP(){
  if (_mounted) return;
  _mounted = true;

  const serversPayload = await fetchProgressAll();
  mountMoonV2Progress('#mpv2-progress-root', serversPayload, activeServer);
  window.Route?.setAll(serversPayload, { animate:false });

  const old = document.querySelector('#server-progress-old');
  if (old) old.innerHTML = '';

  return initLP(serversPayload);
}

/* ========================
   디버그/편의
   ======================== */
export async function seedProgress(id = 'tonbery', { title, big = 1, small = 0 } = {}) {
  await setDoc(doc(db, 'progress', id), {
    title: title ?? id[0].toUpperCase() + id.slice(1),
    big, small,
    bigStageStartedAt: { [String(big)]: ST() },
    bigStageDurations: {},
    updated_at: ST(),
  }, { merge: true });
}

window.LP = {
  seed: seedProgress,
  fetchProgressAll,
  refreshTop,
  listenComments,
  postComment,
  adjustProgress,
  get active(){ return activeServer; },
};
