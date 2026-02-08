import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js';
import { TOTAL_BIG, SMALLS_PER_BIG } from './appConfig.js';

/** big/small → t(0..1), 1-8 == 2-0 */
export function progressToT(big=1, small=0, totalBig=TOTAL_BIG, smalls=SMALLS_PER_BIG){
  const s = Math.max(0, Math.min(smalls, Number(small)));
  const b = Math.max(1, Math.min(totalBig, Number(big)));
  const ticksTotal = totalBig * smalls;
  const idx = (b - 1) * smalls + s;
  return THREE.MathUtils.clamp(idx / ticksTotal, 0, 1);
}

const ACCENT = 0x74F8F6;
const SHIP_TEXTURES = {
  tonbery : 'assets/ship-tonberry.png',
  chocobo : 'assets/ship-chocobo.png',
  carbuncle: 'assets/ship-carbuncle.png',
  fenrir  : 'assets/ship-fenrir.png',
  moogle  : 'assets/ship-moogle.png',
};
const LABEL_KR = { tonbery:'톤', chocobo:'초', carbuncle:'카', fenrir:'펜', moogle:'모' };
const texLoader = new THREE.TextureLoader();

function transparentTex(){ const c=document.createElement('canvas'); c.width=c.height=2; const t=new THREE.CanvasTexture(c); t.needsUpdate=true; return t; }

function makeShipSprite(serverId){
  const mat = new THREE.SpriteMaterial({ map:transparentTex(), transparent:true, depthTest:false, depthWrite:false });
  const spr = new THREE.Sprite(mat);
  spr.renderOrder = 9998; spr.userData.aspect = 1; spr.scale.set(4,4,1);
  const rel = SHIP_TEXTURES[serverId];
  const url = `${import.meta.env.BASE_URL}${rel ?? ''}`;
  if (rel){
    texLoader.load(url, (tex)=>{
      if ('colorSpace' in tex) tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8; mat.map = tex; mat.needsUpdate = true;
      const img=tex.image; const aspect = (img?.width && img?.height) ? img.width/img.height : 1;
      spr.userData.aspect = aspect;
    }, undefined, ()=>{});
  }
  return spr;
}

function makeTextSprite(text='톤'){
  const W=256, H=128; const cvs=document.createElement('canvas'); cvs.width=W; cvs.height=H;
  const ctx=cvs.getContext('2d');
  ctx.clearRect(0,0,W,H);
  ctx.font=`700 50px "Zen Dots","Noto Sans KR",sans-serif`;
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillStyle='#ccfaff'; ctx.shadowColor='#76f3ff'; ctx.shadowBlur=18; ctx.fillText(text, W/2, H/2-6);
  const tex=new THREE.CanvasTexture(cvs); tex.anisotropy=8;
  const mat=new THREE.SpriteMaterial({ map:tex, transparent:true, depthWrite:false, depthTest:false });
  const spr=new THREE.Sprite(mat); spr.userData.aspect=W/H; spr.scale.set(3.2,1.6,1); spr.renderOrder=9999; return spr;
}
function setResolution(mat,w,h){ if (mat?.resolution) mat.resolution.set(w,h); }
function buildSoftBezier(start,end,up=new THREE.Vector3(0,1,0),{arc=0.16,endFlat=0.55}={}){
  const chord=end.clone().sub(start), L=chord.length();
  const c1=start.clone().add(chord.clone().multiplyScalar(0.25)).add(up.clone().multiplyScalar(L*arc));
  const c2=start.clone().add(chord.clone().multiplyScalar(0.75)).add(up.clone().multiplyScalar(L*arc*(1.0-endFlat)));
  return new THREE.CubicBezierCurve3(start,c1,c2,end);
}

export class SpaceRoute{
  constructor(scene,{camera=null,curve=null,showLine=true}={}){
    this.scene=scene; this.camera=camera; this.group=new THREE.Group(); this.group.name='SpaceRoute'; this.group.visible=true; scene.add(this.group);
    this.anchorStart=null; this.anchorEnd=null;
    this.curve=curve || new THREE.CatmullRomCurve3([new THREE.Vector3(),new THREE.Vector3(1,0,0)]);
    this._lastEnds={a:new THREE.Vector3(), b:new THREE.Vector3()};
    this.lineGeo=new LineGeometry();
    this.lineMat=new LineMaterial({ color:ACCENT, linewidth:5, transparent:true, opacity:0.85, dashed:true, dashSize:0.1, gapSize:0.3 });
    setResolution(this.lineMat, innerWidth, innerHeight);
    this.line=new Line2(this.lineGeo,this.lineMat); this.line.renderOrder=8000; if(showLine) this.group.add(this.line);
    this.tickGeo=new LineSegmentsGeometry();
    this.tickMat=new LineMaterial({ color:ACCENT, linewidth:2, transparent:true, opacity:0.95 });
    setResolution(this.tickMat, innerWidth, innerHeight);
    this.ticks=new LineSegments2(this.tickGeo,this.tickMat); this.ticks.renderOrder=8001; this.group.add(this.ticks);
    this.ships={}; this.speed=2.5;
    this.cluster={}; this.clusterEps=1/(TOTAL_BIG*SMALLS_PER_BIG)*0.5; this.sepBase=0.9; this.sepScale=0.02;
    this.scaleFactor=0.040; this.scaleMin=1.0; this.scaleMax=4.0; this.labelScaleK=1.5; this.labelYOffsetK=1;
  }
  setResolution(w,h){ setResolution(this.lineMat,w,h); setResolution(this.tickMat,w,h); }
  setSeparation({base,eps,scale}={}){ if(base!=null)this.sepBase=base; if(eps!=null)this.clusterEps=eps; if(scale!=null)this.sepScale=scale; }
  setDash({dash,gap,width}={}){ if(width!=null)this.lineMat.linewidth=width; if(dash!=null)this.lineMat.dashSize=dash; if(gap!=null)this.lineMat.gapSize=gap; this.line.computeLineDistances(); this.lineMat.needsUpdate=true; }
  setScale({factor,min,max,labelK,labelY}={}){ if(factor!=null)this.scaleFactor=factor; if(min!=null)this.scaleMin=min; if(max!=null)this.scaleMax=max; if(labelK!=null)this.labelScaleK=labelK; if(labelY!=null)this.labelYOffsetK=labelY; }

  attachAnchors(startObj,endObj,{forceBuild=true}={}){
    this.anchorStart=startObj||null; this.anchorEnd=endObj||null; if(!forceBuild) return;
    const a=new THREE.Vector3(), b=new THREE.Vector3(); this.anchorStart?.getWorldPosition?.(a); this.anchorEnd?.getWorldPosition?.(b);
    if(a.distanceToSquared(b)<1e-8) b.x+=0.001; this._lastEnds.a.copy(a); this._lastEnds.b.copy(b); this._rebuildCurveAndLines();
  }

  setServerProgress(serverId,big,small,{animate=true}={}){
    const t=progressToT(big,small);
    let ship=this.ships[serverId];
    if(!ship){
      const spr=makeShipSprite(serverId); const lbl=makeTextSprite(LABEL_KR[serverId] ?? (serverId[0]||'S').toUpperCase());
      this.group.add(spr); this.group.add(lbl);
      ship=this.ships[serverId]={ id:serverId, sprite:spr, label:lbl, targetT:t, currentT:t };
    }else{ ship.targetT=t; if(!animate) ship.currentT=t; }
    this._applyShipPos(ship);
  }
  setAll(rows,opts={}){ rows.forEach(r=>this.setServerProgress(r.serverId,r.big,r.small,opts)); }

_updateClusters(){
    // 5개 고정 트랙 레이아웃: 각 캐릭터는 고유한 Y 위치를 가짐
    const TRACK_ORDER = ['tonbery', 'chocobo', 'carbuncle', 'fenrir', 'moogle'];
    this.cluster = {};
    
    TRACK_ORDER.forEach((id, index) => {
      if (this.ships[id]) {
        // 트랙 인덱스를 ord로 저장 (위에서 아래로: -2, -1, 0, 1, 2)
        const ord = index - 2; // 중앙(carbuncle)이 0
        this.cluster[id] = { ord, n: 1, t: this.ships[id].currentT };
      }
    });
  }

  _applyShipPos(ship){
    const t=THREE.MathUtils.clamp(ship.currentT,0,1), pos=this.curve.getPointAt(t,new THREE.Vector3()), tan=this.curve.getTangentAt(t,new THREE.Vector3());
    const aspect=ship.sprite.userData.aspect||1; let w=6;
    if(this.camera){ const dist=this.camera.position.distanceTo(pos); w=THREE.MathUtils.clamp(dist*this.scaleFactor,this.scaleMin,this.scaleMax); }
    const h=w/aspect; ship.sprite.scale.set(w,h,1);
    const labelW=w*this.labelScaleK, labelH=labelW/(ship.label?.userData?.aspect||2.0); ship.label.scale.set(labelW,labelH,1);
    const rotZ=Math.atan2(tan.y,tan.x); ship.sprite.material.rotation=rotZ;
    let perp=new THREE.Vector3().crossVectors(tan,new THREE.Vector3(0,0,1)); if(perp.lengthSq()<1e-6) perp.set(-tan.y,tan.x,0); perp.normalize();
    const info=this.cluster?.[ship.id]; let sep=0;
    if(info){ let s=this.sepBase; if(this.camera){ const dist=this.camera.position.distanceTo(pos); s=Math.max(s,dist*this.sepScale); } sep=info.ord*s; }
    const shipPos=pos.clone().addScaledVector(perp,sep); shipPos.y+=0.5; ship.sprite.position.copy(shipPos);
    const labelPos=shipPos.clone(); labelPos.y+=Math.max(0.6,w*this.labelYOffsetK); ship.label.position.copy(labelPos); ship.label.material.rotation=0;
  }

  _rebuildCurveAndLines(){
    const A=this._lastEnds.a, B=this._lastEnds.b; const len=B.clone().sub(A).length(); if(len<1e-6) return;
    const up=new THREE.Vector3(0,1,0); this.curve=buildSoftBezier(A,B,up,{arc:0.16,endFlat:0.55});
    const pts=this.curve.getPoints(500), arr=new Float32Array(pts.length*3);
    for(let i=0;i<pts.length;i++){ const p=pts[i]; arr[i*3]=p.x; arr[i*3+1]=p.y; arr[i*3+2]=p.z; }
    this.lineGeo.setPositions(arr); this.line.computeLineDistances();

    const count=21; const segs=new Float32Array(count*2*3); const tickLen=THREE.MathUtils.clamp(len*0.02,0.4,2.2);
    for(let k=0;k<count;k++){ const t=k/(count-1); const p=this.curve.getPointAt(t); const tan=this.curve.getTangentAt(t);
      let perp=new THREE.Vector3().crossVectors(tan,new THREE.Vector3(0,0,1)); if(perp.lengthSq()<1e-6) perp=new THREE.Vector3(-tan.y,tan.x,0); perp.normalize();
      const a=p.clone().addScaledVector(perp,-tickLen/2), b=p.clone().addScaledVector(perp,tickLen/2), i=k*6;
      segs[i]=a.x; segs[i+1]=a.y; segs[i+2]=a.z; segs[i+3]=b.x; segs[i+4]=b.y; segs[i+5]=b.z; }
    this.tickGeo.setPositions(segs);
  }

  update(dt){
    if(this.anchorStart && this.anchorEnd){
      const a=new THREE.Vector3(), b=new THREE.Vector3(); this.anchorStart.getWorldPosition(a); this.anchorEnd.getWorldPosition(b);
      if(a.distanceToSquared(this._lastEnds.a)>1e-4 || b.distanceToSquared(this._lastEnds.b)>1e-4){ this._lastEnds.a.copy(a); this._lastEnds.b.copy(b); this._rebuildCurveAndLines(); }
    }
    const k=Math.min(1,this.speed*dt);
    for(const id in this.ships){ const s=this.ships[id]; s.currentT=THREE.MathUtils.lerp(s.currentT,s.targetT,k); }
    this._updateClusters(); for(const id in this.ships){ this._applyShipPos(this.ships[id]); }
  }
}
