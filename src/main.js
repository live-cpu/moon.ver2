import * as THREE from 'three';
import { GLTFLoader }     from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader }    from 'three/examples/jsm/loaders/DRACOLoader.js';
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
if (isSmall()) canvas.style.display = 'none';

const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, innerWidth/innerHeight, 0.1, 2000);
camera.position.set(4, 2.5, 6);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;
function renderOnce(){ if (!isSmall()) renderer.render(scene, camera); }
controls.addEventListener('change', renderOnce);

scene.add(new THREE.AmbientLight(0xffffff, 0.15));
scene.add(new THREE.HemisphereLight(0xbfdfff, 0x090a10, 0.12));

const ground = new THREE.Mesh(new THREE.PlaneGeometry(200,200), new THREE.ShadowMaterial({ opacity:0.18 }));
ground.rotation.x = -Math.PI/2; ground.position.y = -0.01; ground.receiveShadow = true; scene.add(ground);
renderOnce();

/* 상태 */
const mixers = []; let pendingActions = 0; let rafId = null; const clock = new THREE.Clock(); let route = null;

/* GLB 로드(작은 화면이면 생략) */
if (!isSmall()) {
  const loader = new GLTFLoader();
  const draco  = new DRACOLoader(); draco.setDecoderPath(`${import.meta.env.BASE_URL}draco/`);
  loader.setDRACOLoader(draco); loader.setMeshoptDecoder(MeshoptDecoder);

  loader.load(`${import.meta.env.BASE_URL}assets/solar.glb`,
    async (gltf) => {
      const root = gltf.scene || gltf.scenes?.[0];

      // 태양 이펙트/재질 단순화
      const sun = findNode(root, /(sun|sol)/i);
      applyUniformGray(root, 0xbfc4c9, sun);
      if (sun) {
        makeSunEmissive(sun, 3.2);
        const sunLight = new THREE.PointLight(0xfff0bb, 2000, 1200, 2);
        sun.add(sunLight); sunLight.position.set(0,0,0);
      }

      root.traverse(o => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = false } });
      scene.add(root);
      frameToObject(root, camera, controls);   // 포커스 없음(씬만 프레이밍)

      // 지구/해왕성 찾기 → 라우트 앵커
      const earth = pickPlanet(root, { exact: ['earth','erath'], include:['earth','erath','blue'], exclude:['bezier','circle','orbit','curve','path','track'] });
      const neptu = pickPlanet(root, { exact: ['neptune'],       include:['neptune'],          exclude:['bezier','circle','orbit','curve','path','track'] });

      route = new SpaceRoute(scene, { camera, showLine:true });
      route.attachAnchors(earth ?? root, neptu ?? root, { forceBuild:true });
      window.Route = route;

      // 최초 진행도 반영
      try {
        const mod  = await import('./lp.js');
        const rows = await mod.fetchProgressAll();
        if (rows){ route.setAll(rows, { animate:false }); renderOnce(); }
      } catch(e){ console.warn('[Route] fetchProgressAll failed:', e); }

      // 모델 내부 애니메이션 1회
      if (gltf.animations?.length) {
        const mixer = new THREE.AnimationMixer(root);
        mixers.push(mixer);
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.reset(); action.setLoop(THREE.LoopOnce, 0); action.clampWhenFinished = true; action.play(); pendingActions++;
        });
        mixer.addEventListener('finished', () => { pendingActions = Math.max(0, pendingActions - 1); });
        startLoop();
      }
    },
    undefined,
    (err) => console.error('GLB 로드 실패:', err)
  );
}

/* 루프 */
function isRouteMoving(){
  if (!route || !route.ships) return false;
  for (const id in route.ships){ const s=route.ships[id]; if (Math.abs((s?.currentT??0)-(s?.targetT??0))>1e-4) return true; }
  return false;
}
function startLoop(){
  if (rafId || isSmall()) return;
  clock.start();
  const tick = () => {
    const dt = clock.getDelta();
    mixers.forEach(m => m.update(dt));
    route?.update(dt);
    if (pendingActions>0 || isRouteMoving()) { renderOnce(); rafId = requestAnimationFrame(tick); }
    else { rafId = null; }
  };
  rafId = requestAnimationFrame(tick);
}
window.addEventListener('lp-progress-updated', () => startLoop());

/* 유틸 */
function findNode(root, regex){ let hit=null; root.traverse(o=>{ if(!hit && o.name && regex.test(o.name)) hit=o; }); return hit; }
function getFirstMesh(node){ if(!node) return null; let mesh=null; node.traverse(o=>{ if(!mesh && o.isMesh) mesh=o; }); return mesh||node; }
function pickPlanet(root,{exact=[],include=[],exclude=[]}){ for(const n of exact){ const hit=findNode(root,new RegExp(`^${n}$`,'i')); if(hit) return getFirstMesh(hit); }
  let found=null; root.traverse(o=>{ if(found) return; const name=(o.name||'').toLowerCase();
    if(include.some(k=>name.includes(k)) && !exclude.some(k=>name.includes(k))) found=getFirstMesh(o); }); return found; }
function makeSunEmissive(node,intensity=3.2){ node.traverse(o=>{ if(o.isMesh){ const mat=new THREE.MeshStandardMaterial({
  color:0xffffff, roughness:0.2, metalness:0.0, emissive:new THREE.Color(0xffd27d), emissiveIntensity:intensity }); try{ o.material?.map?.dispose?.(); o.material?.dispose?.(); }catch{} o.material=mat; } }); }
function applyUniformGray(root,hex,skip){ const gray=new THREE.MeshStandardMaterial({ color:hex, roughness:.9, metalness:.05 });
  root.traverse(obj=>{ if(obj.isMesh){ if(isDescendantOf(obj,skip)) return; try{ obj.material?.map?.dispose?.(); obj.material?.dispose?.(); }catch{} obj.material=gray.clone(); } }); }
function isDescendantOf(node,anc){ if(!anc) return false; for(let p=node; p; p=p.parent){ if(p===anc) return true; } return false; }
function frameToObject(object,camera,controls){ const box=new THREE.Box3().setFromObject(object); const size=box.getSize(new THREE.Vector3());
  const center=box.getCenter(new THREE.Vector3()); const maxDim=Math.max(size.x,size.y,size.z)||1;
  const fitDist=maxDim/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov*0.5))); const dist=fitDist*1.3;
  const dir=new THREE.Vector3(1,0.6,1).normalize(); camera.position.copy(center).add(dir.multiplyScalar(dist));
  camera.near=dist/100; camera.far=dist*100; camera.updateProjectionMatrix(); controls.target.copy(center); controls.update(); }

/* 리사이즈 */
function applySceneResponsive(){
  const small=isSmall();
  if(small){ if(rafId){ cancelAnimationFrame(rafId); rafId=null; } canvas.style.display='none'; }
  else { canvas.style.display='block'; renderer.setPixelRatio(Math.min(devicePixelRatio,2)); renderer.setSize(innerWidth,innerHeight); renderOnce(); startLoop(); }
}
addEventListener('resize', () => { camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); route?.setResolution?.(innerWidth,innerHeight); renderOnce(); applySceneResponsive(); });
applySceneResponsive();
