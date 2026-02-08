import * as THREE from 'three';
import { GLTFLoader }      from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader }     from 'three/examples/jsm/loaders/DRACOLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { OrbitControls }  from 'three/examples/jsm/controls/OrbitControls.js';
import { SpaceRoute } from './spaceRoute.js';

/* 비디오 배경 */
const bgvid = document.getElementById('bgvid');
if (bgvid) {
  bgvid.src = `${import.meta.env.BASE_URL}assets/bg.mp4`;
  bgvid.addEventListener('canplay', () => bgvid.play().catch(()=>{}), { once:true });
}

/* 반응형 임계 */
const MIN_WIDTH_FOR_3D = 500;
const isSmall = () => window.innerWidth <= MIN_WIDTH_FOR_3D;

/* Three.js 기본 셋업 */
const canvas = document.getElementById('stage');

// CSS 스타일은 CSS 파일/HTML 헤더에서 이미 100%로 고정됨
// JS에서는 스타일을 건드리지 않음

if (isSmall()) canvas.style.display = 'none';

const renderer = new THREE.WebGLRenderer({ 
    canvas, 
    antialias: true, 
    alpha: true,
    // ★ 중요: 전원 절약 모드 등에서 context lost 방지
    powerPreference: "high-performance" 
});

// ★ 초기 설정: 
// 1. PixelRatio는 해상도(선명도) 담당. 최소 1 보장.
renderer.setPixelRatio(Math.max(1, Math.min(window.devicePixelRatio, 2)));

// 2. Size는 캔버스 버퍼 크기 담당. false 옵션으로 CSS 스타일(100%)을 덮어쓰지 않게 함.
renderer.setSize(window.innerWidth, window.innerHeight, false);

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 5000);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.08;
controls.zoomSpeed = 0.15;      
controls.minDistance = 5;       
controls.maxDistance = 400;     
controls.enablePan = true;
controls.maxPolarAngle = Math.PI;

camera.position.set(4, 2.5, 6);
controls.target.set(0, 0, 0);
controls.update(); 

function renderOnce(){ 
  if (!isSmall() && camera.aspect > 0) {
    renderer.render(scene, camera); 
  }
}

scene.add(new THREE.AmbientLight(0xffffff, 0.15));
scene.add(new THREE.HemisphereLight(0xbfdfff, 0x090a10, 0.12));

const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(200,200), 
  new THREE.ShadowMaterial({ opacity:0.18 })
);
ground.rotation.x = -Math.PI/2; 
ground.position.y = -0.01; 
ground.receiveShadow = true; 
scene.add(ground);

const mixers = []; 
let rafId = null; 
const clock = new THREE.Clock(); 
let route = null;
let pendingActions = 0;
let rootModel = null;

/* ============================================
   ★ 수정된 리사이즈 핸들러
   - 복잡한 줌 계산 제거 (오류 원인)
   - window.innerWidth를 신뢰하되, 스타일을 건드리지 않음
   ============================================ */
function handleResize() {
  if (!canvas) return;
  
  // 브라우저가 계산한 현재 뷰포트 크기 (줌 레벨이 반영된 CSS 픽셀 값)
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (height === 0 || width === 0) return;

  // 1. 카메라 비율 업데이트
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  // 2. 렌더러 버퍼 크기 업데이트
  // false 옵션: <canvas style="width:...">를 변경하지 않음.
  // 오직 <canvas width="..."> 속성만 변경함.
  renderer.setSize(width, height, false);
  
  // 3. 픽셀 비율 재계산 (줌인 시 선명도 유지)
  renderer.setPixelRatio(Math.max(1, Math.min(window.devicePixelRatio, 2)));

  if (route && route.setResolution) {
    route.setResolution(width, height);
  }
  
  // 4. 표시/숨김 처리
  if (isSmall()) {
    canvas.style.display = 'none';
    if (rafId) cancelAnimationFrame(rafId);
  } else {
    canvas.style.display = 'block';
    renderOnce();
  }

  // 5. ★ 중요: 리사이즈 시 카메라 포커스 재조정
  if (rootModel) {
    frameToObject(rootModel, camera, controls);
  }
}

// 0.5초 딜레이 제거 -> 즉각 반응하도록 변경 (튀는 느낌 감소)
// 대신 쓰로틀링(Throttling)을 적용하고 싶다면 lodash 등을 써야 하지만, 
// 현재는 즉시 반응이 더 부드러울 수 있음.
window.addEventListener('resize', handleResize);

/* GLB 로드 */
if (!isSmall()) {
  const loader = new GLTFLoader();
  const draco  = new DRACOLoader();
  draco.setDecoderPath(`${import.meta.env.BASE_URL}draco/`);
  loader.setDRACOLoader(draco);
  loader.setMeshoptDecoder(MeshoptDecoder);

  const MODEL_URL = `${import.meta.env.BASE_URL}assets/solar.glb`;
  const should3dHide = localStorage.getItem('hide3d') === 'true';

  if (!should3dHide) {
    loader.load(
      MODEL_URL,
      async (gltf) => {
        const root = gltf.scene || gltf.scenes?.[0];
        rootModel = root;

        const sun = findNode(root, /(sun|sol)/i);
        applyUniformGray(root, 0xbfc4c9, sun);
        if (sun) {
          makeSunEmissive(sun, 3.2);
          const sunLight = new THREE.PointLight(0xfff0bb, 2000, 1200, 2);
          sun.add(sunLight); 
          sunLight.position.set(0,0,0);
        }

        root.traverse(o => { 
          if (o.isMesh) { 
            o.castShadow = false; 
            o.receiveShadow = false; 
            o.frustumCulled = false; 
          } 
        });
        scene.add(root);
        
        frameToObject(root, camera, controls);
        
        // 초기화 직후 리사이즈 호출 (안전장치)
        handleResize();

        const earth = pickPlanet(root, { 
          exact: ['earth','erath'], 
          include:['earth','erath','blue'], 
          exclude:['bezier','circle','orbit','curve','path','track'] 
        });
        const neptu = pickPlanet(root, { 
          exact: ['neptune'], 
          include:['neptune'], 
          exclude:['bezier','circle','orbit','curve','path','track'] 
        });

        route = new SpaceRoute(scene, { camera, showLine:true });
        route.attachAnchors(earth ?? root, neptu ?? root, { forceBuild:true });
        window.Route = route;

        try {
          const mod  = await import('./lp.js');
          const rows = await mod.fetchProgressAll();
          if (rows){ 
            route.setAll(rows, { animate:false }); 
          }
        } catch(e){ 
          console.warn('[Route] fetchProgressAll failed:', e); 
        }

        if (gltf.animations?.length) {
          const mixer = new THREE.AnimationMixer(root);
          mixers.push(mixer);
          gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.reset(); 
            action.setLoop(THREE.LoopOnce, 0); 
            action.clampWhenFinished = true; 
            action.play(); 
            pendingActions++;
          });
          mixer.addEventListener('finished', () => { 
            pendingActions = Math.max(0, pendingActions - 1); 
          });
        }
        startLoop();
      },
      undefined,
      (err) => console.error('GLB 로드 실패:', err)
    );
  } else {
    // [3D Model hidden mode]
    console.log('[3D] Model hidden, ships only mode');
    
    camera.position.set(10, 5, 15);
    controls.target.set(7.5, 0, 0);
    controls.update(); 
    
    handleResize();
    
    const tempStart = new THREE.Object3D();
    const tempEnd = new THREE.Object3D();
    tempEnd.position.set(15, 0, 0);
    scene.add(tempStart);
    scene.add(tempEnd);

    route = new SpaceRoute(scene, { camera, showLine:true });
    route.attachAnchors(tempStart, tempEnd, { forceBuild:true });
    window.Route = route;

    setTimeout(async () => {
      try {
        const mod = await import('./lp.js');
        const rows = await mod.fetchProgressAll();
        if (rows) {
          route.setAll(rows, { animate:false });
        }
      } catch(e){ 
        console.warn('[Route] fetchProgressAll failed:', e); 
      }
      startLoop();
    }, 100);
  }
}

/* 루프 */
function startLoop(){
  if (rafId || isSmall()) return;
  clock.start();

  const tick = () => {
    rafId = requestAnimationFrame(tick);
    const dt = clock.getDelta();
    
    controls.update(); 
    mixers.forEach(m => m.update(dt));
    route?.update(dt);
    
    renderOnce();
  };
  rafId = requestAnimationFrame(tick);
}

window.addEventListener('lp-progress-updated', () => {
  startLoop();
});

/* 유틸 */
function findNode(root, regex){ 
  let hit = null; 
  root.traverse(o => { 
    if (!hit && o.name && regex.test(o.name)) hit = o; 
  }); 
  return hit; 
}

function getFirstMesh(node){ 
  if (!node) return null; 
  let mesh = null; 
  node.traverse(o => { 
    if (!mesh && o.isMesh) mesh = o; 
  }); 
  return mesh || node; 
}

function pickPlanet(root, {exact=[], include=[], exclude=[]}){ 
  for (const n of exact){ 
    const hit = findNode(root, new RegExp(`^${n}$`, 'i')); 
    if (hit) return getFirstMesh(hit); 
  }
  let found = null; 
  root.traverse(o => { 
    if (found) return; 
    const name = (o.name || '').toLowerCase();
    if (include.some(k => name.includes(k)) && !exclude.some(k => name.includes(k))) {
      found = getFirstMesh(o); 
    }
  }); 
  return found; 
}

function makeSunEmissive(node, intensity=3.2){ 
  node.traverse(o => { 
    if (o.isMesh){ 
      const mat = new THREE.MeshStandardMaterial({
        color: 0xffffff, 
        roughness: 0.2, 
        metalness: 0.0, 
        emissive: new THREE.Color(0xffd27d), 
        emissiveIntensity: intensity 
      }); 
      try { 
        o.material?.map?.dispose?.(); 
        o.material?.dispose?.(); 
      } catch {} 
      o.material = mat; 
    } 
  }); 
}

function applyUniformGray(root, hex, skip){ 
  const gray = new THREE.MeshStandardMaterial({ 
    color: hex, 
    roughness: .9, 
    metalness: .05 
  });
  root.traverse(obj => { 
    if (obj.isMesh){ 
      if (isDescendantOf(obj, skip)) return; 
      try { 
        obj.material?.map?.dispose?.(); 
        obj.material?.dispose?.(); 
      } catch {} 
      obj.material = gray.clone(); 
    } 
  }); 
}

function isDescendantOf(node, anc){ 
  if (!anc) return false; 
  for (let p = node; p; p = p.parent){ 
    if (p === anc) return true; 
  } 
  return false; 
}

function frameToObject(object, camera, controls){ 
  const box = new THREE.Box3().setFromObject(object); 
  
  if (box.isEmpty()) return;

  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3()); 
  
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  const fov = camera.fov * (Math.PI / 180);
  
  // 줌 레벨에 따라 화면에 꽉 차는 거리가 달라지므로 다시 계산
  let cameraZ = Math.abs(maxDim / 2 * Math.tan(fov * 2)); 

  cameraZ *= 0.75;
  
  const direction = new THREE.Vector3(1, 0.5, 1).normalize();
  
  // 카메라 위치 재설정
  camera.position.copy(center).add(direction.multiplyScalar(cameraZ));
  camera.near = 0.1;
  camera.far = 5000;
  camera.updateProjectionMatrix();

  // ★ Controls 타겟도 객체 중심으로 이동
  controls.target.copy(center);
  controls.maxDistance = cameraZ * 5; 
  controls.minDistance = 5; 
  
  controls.saveState(); 
  controls.update(); 
}

// 초기 실행
handleResize();