import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as Pm,a as Aa,b as id,L as od,c as ar,F as Vi,M as kt,V as Be,C as vt,d as ft,S as It,e as Cm,P as ad,D as km,f as _r,g as W,I as xm,Q as Fi,h as Dm,O as Ui,i as cd,j as Om,B as cr,k as Nm,l as ld,N as Lm,m as Mm,n as Vm,o as ud,p as Fm,R as va,q as Um,r as jm,s as Bm,t as ra,u as Gm,v as uo,w as Hm,x as er,y as qm,z as hd,A as zm,E as ec,G as Km,H as Wm,J as $m,K as Qm,U as Ai,W as dd,X as yt,Y as Ym,Z as Xm,_ as Jm,$ as Zm,a0 as eg,a1 as fd,a2 as An,a3 as ql,a4 as zl,a5 as Kl,a6 as Wl,a7 as $l,a8 as tg,a9 as ng,aa as xr,ab as tc,ac as sg,ad as Wn,ae as $n,af as Ql,ag as rg,ah as ig,ai as og,aj as Yl,ak as Ia,al as ag,am as cg,an as vi,ao as pd,ap as Ii,aq as ho,ar as lg,as as ug,at as md,au as gd,av as bd,aw as hg,ax as dg,ay as fg,az as pg,aA as mg,aB as gg,aC as bg,aD as _g,aE as yg,aF as Eg,aG as Tg}from"./three-DXSWiGeG.js";const wg="modulepreload",Ag=function(s){return"/moon.ver2/"+s},Xl={},Jl=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=Ag(l),l in Xl)return;Xl[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":wg,u||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),u)return new Promise((m,y)=>{p.addEventListener("load",m),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})};function Zl(s,e){if(e===Pm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Aa||e===id){let t=s.getIndex();if(t===null){const o=[],c=s.getAttribute("position");if(c!==void 0){for(let l=0;l<c.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,r=[];if(e===Aa)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=s.clone();return i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class vg extends od{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Cg(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new jg(t)}),this.register(function(t){return new xg(t)}),this.register(function(t){return new Dg(t)}),this.register(function(t){return new Og(t)}),this.register(function(t){return new Ng(t)}),this.register(function(t){return new Pg(t)}),this.register(function(t){return new Lg(t)}),this.register(function(t){return new kg(t)}),this.register(function(t){return new Vg(t)}),this.register(function(t){return new Mg(t)}),this.register(function(t){return new Sg(t)}),this.register(function(t){return new Bg(t)}),this.register(function(t){return new Gg(t)})}load(e,t,n,r){const i=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=ar.extractUrlBase(e);o=ar.resolveURL(u,this.path)}else o=ar.extractUrlBase(e);this.manager.itemStart(e);const c=function(u){r?r(u):console.error(u),i.manager.itemError(e),i.manager.itemEnd(e)},l=new Vi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{i.parse(u,o,function(d){t(d),i.manager.itemEnd(e)},c)}catch(d){c(d)}},n,c)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i;const o={},c={},l=new TextDecoder;if(typeof e=="string")i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_d){try{o[X.KHR_BINARY_GLTF]=new Hg(e)}catch(p){r&&r(p);return}i=JSON.parse(o[X.KHR_BINARY_GLTF].content)}else i=JSON.parse(l.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new nb(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const p=this.pluginCallbacks[d](u);p.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[p.name]=p,o[p.name]=!0}if(i.extensionsUsed)for(let d=0;d<i.extensionsUsed.length;++d){const p=i.extensionsUsed[d],m=i.extensionsRequired||[];switch(p){case X.KHR_MATERIALS_UNLIT:o[p]=new Rg;break;case X.KHR_DRACO_MESH_COMPRESSION:o[p]=new qg(i,this.dracoLoader);break;case X.KHR_TEXTURE_TRANSFORM:o[p]=new zg;break;case X.KHR_MESH_QUANTIZATION:o[p]=new Kg;break;default:m.indexOf(p)>=0&&c[p]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+p+'".')}}u.setExtensions(o),u.setPlugins(c),u.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}}function Ig(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const X={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Sg{constructor(e){this.parser=e,this.name=X.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const i=t.json,l=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let u;const d=new vt(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],ft);const p=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new km(d),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new ad(d),u.distance=p;break;case"spot":u=new Cm(d),u.distance=p,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,Gt(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],c=(i.extensions&&i.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(l){return n._getNodeRef(t.cache,c,l)})}}class Rg{constructor(){this.name=X.KHR_MATERIALS_UNLIT}getMaterialType(){return er}extendParams(e,t,n){const r=[];e.color=new vt(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const o=i.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ft),e.opacity=o[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",i.baseColorTexture,It))}return Promise.all(r)}}class Pg{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=r.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class Cg{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kt}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const c=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(c,c)}return Promise.all(i)}}class kg{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kt}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&i.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(i)}}class xg{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kt}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new vt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const c=o.sheenColorFactor;t.sheenColor.setRGB(c[0],c[1],c[2],ft)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(i)}}class Dg{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kt}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(i)}}class Og{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kt}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const c=o.attenuationColor||[1,1,1];return t.attenuationColor=new vt().setRGB(c[0],c[1],c[2],ft),Promise.all(i)}}class Ng{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kt}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=r.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class Lg{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kt}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const c=o.specularColorFactor||[1,1,1];return t.specularColor=new vt().setRGB(c[0],c[1],c[2],ft),o.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(i)}}class Mg{constructor(e){this.parser=e,this.name=X.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kt}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&i.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(i)}}class Vg{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:kt}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const i=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&i.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(i)}}class Fg{constructor(e){this.parser=e,this.name=X.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const i=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,o)}}class Ug{constructor(e){this.parser=e,this.name=X.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;const o=i.extensions[t],c=r.images[o.source];let l=n.textureLoader;if(c.uri){const u=n.options.manager.getHandler(c.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class jg{constructor(e){this.parser=e,this.name=X.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;const o=i.extensions[t],c=r.images[o.source];let l=n.textureLoader;if(c.uri){const u=n.options.manager.getHandler(c.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Bg{constructor(e){this.name=X.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],i=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return i.then(function(c){const l=r.byteOffset||0,u=r.byteLength||0,d=r.count,p=r.byteStride,m=new Uint8Array(c,l,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,p,m,r.mode,r.filter).then(function(y){return y.buffer}):o.ready.then(function(){const y=new ArrayBuffer(d*p);return o.decodeGltfBuffer(new Uint8Array(y),d,p,m,r.mode,r.filter),y})})}else return null}}class Gg{constructor(e){this.name=X.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const u of r.primitives)if(u.mode!==$e.TRIANGLES&&u.mode!==$e.TRIANGLE_STRIP&&u.mode!==$e.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,c=[],l={};for(const u in o)c.push(this.parser.getDependency("accessor",o[u]).then(d=>(l[u]=d,l[u])));return c.length<1?null:(c.push(this.parser.createNodeMesh(e)),Promise.all(c).then(u=>{const d=u.pop(),p=d.isGroup?d.children:[d],m=u[0].count,y=[];for(const P of p){const x=new _r,R=new W,k=new Fi,D=new W(1,1,1),N=new xm(P.geometry,P.material,m);for(let M=0;M<m;M++)l.TRANSLATION&&R.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&k.fromBufferAttribute(l.ROTATION,M),l.SCALE&&D.fromBufferAttribute(l.SCALE,M),N.setMatrixAt(M,x.compose(R,k,D));for(const M in l)if(M==="_COLOR_0"){const G=l[M];N.instanceColor=new Dm(G.array,G.itemSize,G.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&P.geometry.setAttribute(M,l[M]);Ui.prototype.copy.call(N,P),this.parser.assignFinalMaterial(N),y.push(N)}return d.isGroup?(d.clear(),d.add(...y),d):y[0]}))}}const _d="glTF",Zs=12,eu={JSON:1313821514,BIN:5130562};class Hg{constructor(e){this.name=X.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Zs,i=new DataView(e,Zs);let o=0;for(;o<r;){const c=i.getUint32(o,!0);o+=4;const l=i.getUint32(o,!0);if(o+=4,l===eu.JSON){const u=new Uint8Array(e,Zs+o,c);this.content=n.decode(u)}else if(l===eu.BIN){const u=Zs+o;this.body=e.slice(u,u+c)}o+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class qg{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=X.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,c={},l={},u={};for(const d in o){const p=Sa[d]||d.toLowerCase();c[p]=o[d]}for(const d in e.attributes){const p=Sa[d]||d.toLowerCase();if(o[d]!==void 0){const m=n.accessors[e.attributes[d]],y=ns[m.componentType];u[p]=y.name,l[p]=m.normalized===!0}}return t.getDependency("bufferView",i).then(function(d){return new Promise(function(p,m){r.decodeDracoFile(d,function(y){for(const P in y.attributes){const x=y.attributes[P],R=l[P];R!==void 0&&(x.normalized=R)}p(y)},c,u,ft,m)})})}}class zg{constructor(){this.name=X.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Kg{constructor(){this.name=X.KHR_MESH_QUANTIZATION}}class yd extends ng{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[i+o];return t}interpolate_(e,t,n,r){const i=this.resultBuffer,o=this.sampleValues,c=this.valueSize,l=c*2,u=c*3,d=r-t,p=(n-t)/d,m=p*p,y=m*p,P=e*u,x=P-u,R=-2*y+3*m,k=y-m,D=1-R,N=k-m+p;for(let M=0;M!==c;M++){const G=o[x+M+c],q=o[x+M+l]*d,T=o[P+M+c],b=o[P+M]*d;i[M]=D*G+N*q+R*T+k*b}return i}}const Wg=new Fi;class $g extends yd{interpolate_(e,t,n,r){const i=super.interpolate_(e,t,n,r);return Wg.fromArray(i).normalize().toArray(i),i}}const $e={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tu={9728:Fm,9729:ud,9984:Vm,9985:Mm,9986:Lm,9987:ld},nu={33071:jm,33648:Um,10497:va},ia={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jt={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qg={CUBICSPLINE:void 0,LINEAR:fd,STEP:eg},oa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Yg(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new uo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:tg})),s.DefaultMaterial}function Tn(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gt(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xg(s,e,t){let n=!1,r=!1,i=!1;for(let u=0,d=e.length;u<d;u++){const p=e[u];if(p.POSITION!==void 0&&(n=!0),p.NORMAL!==void 0&&(r=!0),p.COLOR_0!==void 0&&(i=!0),n&&r&&i)break}if(!n&&!r&&!i)return Promise.resolve(s);const o=[],c=[],l=[];for(let u=0,d=e.length;u<d;u++){const p=e[u];if(n){const m=p.POSITION!==void 0?t.getDependency("accessor",p.POSITION):s.attributes.position;o.push(m)}if(r){const m=p.NORMAL!==void 0?t.getDependency("accessor",p.NORMAL):s.attributes.normal;c.push(m)}if(i){const m=p.COLOR_0!==void 0?t.getDependency("accessor",p.COLOR_0):s.attributes.color;l.push(m)}}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(l)]).then(function(u){const d=u[0],p=u[1],m=u[2];return n&&(s.morphAttributes.position=d),r&&(s.morphAttributes.normal=p),i&&(s.morphAttributes.color=m),s.morphTargetsRelative=!0,s})}function Jg(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Zg(s){let e;const t=s.extensions&&s.extensions[X.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+aa(t.attributes):e=s.indices+":"+aa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,r=s.targets.length;n<r;n++)e+=":"+aa(s.targets[n]);return e}function aa(s){let e="";const t=Object.keys(s).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ra(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const tb=new _r;class nb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ig,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,i=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,i=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&i<98?this.textureLoader=new cd(this.options.manager):this.textureLoader=new Om(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const c={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return Tn(i,c,r),Gt(c,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(c)})).then(function(){e(c)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,i=t.length;r<i;r++){const o=t[r].joints;for(let c=0,l=o.length;c<l;c++)e[o[c]].isBone=!0}for(let r=0,i=e.length;r<i;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),i=(o,c)=>{const l=this.associations.get(o);l!=null&&this.associations.set(c,l);for(const[u,d]of o.children.entries())i(d,c.children[u])};return i(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(i){return i.loadNode&&i.loadNode(t)});break;case"mesh":r=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(i){return i.loadAnimation&&i.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(i,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[X.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(i,o){n.load(ar.resolveURL(t.uri,r.path),i,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=ia[r.type],c=ns[r.componentType],l=r.normalized===!0,u=new c(r.count*o);return Promise.resolve(new cr(u,o,l))}const i=[];return r.bufferView!==void 0?i.push(this.getDependency("bufferView",r.bufferView)):i.push(null),r.sparse!==void 0&&(i.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(i).then(function(o){const c=o[0],l=ia[r.type],u=ns[r.componentType],d=u.BYTES_PER_ELEMENT,p=d*l,m=r.byteOffset||0,y=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,P=r.normalized===!0;let x,R;if(y&&y!==p){const k=Math.floor(m/y),D="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+k+":"+r.count;let N=t.cache.get(D);N||(x=new u(c,k*y,r.count*y/d),N=new Nm(x,y/d),t.cache.add(D,N)),R=new An(N,l,m%y/d,P)}else c===null?x=new u(r.count*l):x=new u(c,m,r.count*l),R=new cr(x,l,P);if(r.sparse!==void 0){const k=ia.SCALAR,D=ns[r.sparse.indices.componentType],N=r.sparse.indices.byteOffset||0,M=r.sparse.values.byteOffset||0,G=new D(o[1],N,r.sparse.count*k),q=new u(o[2],M,r.sparse.count*l);c!==null&&(R=new cr(R.array.slice(),R.itemSize,R.normalized));for(let T=0,b=G.length;T<b;T++){const _=G[T];if(R.setX(_,q[T*l]),l>=2&&R.setY(_,q[T*l+1]),l>=3&&R.setZ(_,q[T*l+2]),l>=4&&R.setW(_,q[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return R})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,o=t.images[i];let c=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(c=l)}return this.loadTextureImage(e,i,c)}loadTextureImage(e,t,n){const r=this,i=this.json,o=i.textures[e],c=i.images[t],l=(c.uri||c.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||c.name||"",d.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(d.name=c.uri);const m=(i.samplers||{})[o.sampler]||{};return d.magFilter=tu[m.magFilter]||ud,d.minFilter=tu[m.minFilter]||ld,d.wrapS=nu[m.wrapS]||va,d.wrapT=nu[m.wrapT]||va,r.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,t){const n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(p=>p.clone());const o=r.images[e],c=self.URL||self.webkitURL;let l=o.uri||"",u=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(p){u=!0;const m=new Blob([p],{type:o.mimeType});return l=c.createObjectURL(m),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(p){return new Promise(function(m,y){let P=m;t.isImageBitmapLoader===!0&&(P=function(x){const R=new ql(x);R.needsUpdate=!0,m(R)}),t.load(ar.resolveURL(p,i.path),P,void 0,y)})}).then(function(p){return u===!0&&c.revokeObjectURL(l),p.userData.mimeType=o.mimeType||eb(o.uri),p}).catch(function(p){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),p});return this.sourceCache[e]=d,d}assignTexture(e,t,n,r){const i=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),i.extensions[X.KHR_TEXTURE_TRANSFORM]){const c=n.extensions!==void 0?n.extensions[X.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const l=i.associations.get(o);o=i.extensions[X.KHR_TEXTURE_TRANSFORM].extendTexture(o,c),i.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const c="PointsMaterial:"+n.uuid;let l=this.cache.get(c);l||(l=new Bm,ra.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(c,l)),n=l}else if(e.isLine){const c="LineBasicMaterial:"+n.uuid;let l=this.cache.get(c);l||(l=new Gm,ra.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(c,l)),n=l}if(r||i||o){let c="ClonedMaterial:"+n.uuid+":";r&&(c+="derivative-tangents:"),i&&(c+="vertex-colors:"),o&&(c+="flat-shading:");let l=this.cache.get(c);l||(l=n.clone(),i&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(c,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return uo}loadMaterial(e){const t=this,n=this.json,r=this.extensions,i=n.materials[e];let o;const c={},l=i.extensions||{},u=[];if(l[X.KHR_MATERIALS_UNLIT]){const p=r[X.KHR_MATERIALS_UNLIT];o=p.getMaterialType(),u.push(p.extendParams(c,i,t))}else{const p=i.pbrMetallicRoughness||{};if(c.color=new vt(1,1,1),c.opacity=1,Array.isArray(p.baseColorFactor)){const m=p.baseColorFactor;c.color.setRGB(m[0],m[1],m[2],ft),c.opacity=m[3]}p.baseColorTexture!==void 0&&u.push(t.assignTexture(c,"map",p.baseColorTexture,It)),c.metalness=p.metallicFactor!==void 0?p.metallicFactor:1,c.roughness=p.roughnessFactor!==void 0?p.roughnessFactor:1,p.metallicRoughnessTexture!==void 0&&(u.push(t.assignTexture(c,"metalnessMap",p.metallicRoughnessTexture)),u.push(t.assignTexture(c,"roughnessMap",p.metallicRoughnessTexture))),o=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,c)})))}i.doubleSided===!0&&(c.side=Hm);const d=i.alphaMode||oa.OPAQUE;if(d===oa.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,d===oa.MASK&&(c.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&o!==er&&(u.push(t.assignTexture(c,"normalMap",i.normalTexture)),c.normalScale=new Be(1,1),i.normalTexture.scale!==void 0)){const p=i.normalTexture.scale;c.normalScale.set(p,p)}if(i.occlusionTexture!==void 0&&o!==er&&(u.push(t.assignTexture(c,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&o!==er){const p=i.emissiveFactor;c.emissive=new vt().setRGB(p[0],p[1],p[2],ft)}return i.emissiveTexture!==void 0&&o!==er&&u.push(t.assignTexture(c,"emissiveMap",i.emissiveTexture,It)),Promise.all(u).then(function(){const p=new o(c);return i.name&&(p.name=i.name),Gt(p,i),t.associations.set(p,{materials:e}),i.extensions&&Tn(r,p,i),p})}createUniqueName(e){const t=qm.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function i(c){return n[X.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,t).then(function(l){return su(l,c,t)})}const o=[];for(let c=0,l=e.length;c<l;c++){const u=e[c],d=Zg(u),p=r[d];if(p)o.push(p.promise);else{let m;u.extensions&&u.extensions[X.KHR_DRACO_MESH_COMPRESSION]?m=i(u):m=su(new hd,u,t),r[d]={primitive:u,promise:m},o.push(m)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,i=n.meshes[e],o=i.primitives,c=[];for(let l=0,u=o.length;l<u;l++){const d=o[l].material===void 0?Yg(this.cache):this.getDependency("material",o[l].material);c.push(d)}return c.push(t.loadGeometries(o)),Promise.all(c).then(function(l){const u=l.slice(0,l.length-1),d=l[l.length-1],p=[];for(let y=0,P=d.length;y<P;y++){const x=d[y],R=o[y];let k;const D=u[y];if(R.mode===$e.TRIANGLES||R.mode===$e.TRIANGLE_STRIP||R.mode===$e.TRIANGLE_FAN||R.mode===void 0)k=i.isSkinnedMesh===!0?new zm(x,D):new ec(x,D),k.isSkinnedMesh===!0&&k.normalizeSkinWeights(),R.mode===$e.TRIANGLE_STRIP?k.geometry=Zl(k.geometry,id):R.mode===$e.TRIANGLE_FAN&&(k.geometry=Zl(k.geometry,Aa));else if(R.mode===$e.LINES)k=new Km(x,D);else if(R.mode===$e.LINE_STRIP)k=new Wm(x,D);else if(R.mode===$e.LINE_LOOP)k=new $m(x,D);else if(R.mode===$e.POINTS)k=new Qm(x,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+R.mode);Object.keys(k.geometry.morphAttributes).length>0&&Jg(k,i),k.name=t.createUniqueName(i.name||"mesh_"+e),Gt(k,i),R.extensions&&Tn(r,k,R),t.assignFinalMaterial(k),p.push(k)}for(let y=0,P=p.length;y<P;y++)t.associations.set(p[y],{meshes:e,primitives:y});if(p.length===1)return i.extensions&&Tn(r,p[0],i),p[0];const m=new Ai;i.extensions&&Tn(r,m,i),t.associations.set(m,{meshes:e});for(let y=0,P=p.length;y<P;y++)m.add(p[y]);return m})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new dd(yt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Ym(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gt(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,i=t.joints.length;r<i;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const i=r.pop(),o=r,c=[],l=[];for(let u=0,d=o.length;u<d;u++){const p=o[u];if(p){c.push(p);const m=new _r;i!==null&&m.fromArray(i.array,u*16),l.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[u])}return new Xm(c,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],i=r.name?r.name:"animation_"+e,o=[],c=[],l=[],u=[],d=[];for(let p=0,m=r.channels.length;p<m;p++){const y=r.channels[p],P=r.samplers[y.sampler],x=y.target,R=x.node,k=r.parameters!==void 0?r.parameters[P.input]:P.input,D=r.parameters!==void 0?r.parameters[P.output]:P.output;x.node!==void 0&&(o.push(this.getDependency("node",R)),c.push(this.getDependency("accessor",k)),l.push(this.getDependency("accessor",D)),u.push(P),d.push(x))}return Promise.all([Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u),Promise.all(d)]).then(function(p){const m=p[0],y=p[1],P=p[2],x=p[3],R=p[4],k=[];for(let D=0,N=m.length;D<N;D++){const M=m[D],G=y[D],q=P[D],T=x[D],b=R[D];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const _=n._createAnimationTracks(M,G,q,T,b);if(_)for(let A=0;A<_.length;A++)k.push(_[A])}return new Jm(i,void 0,k)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(i){const o=n._getNodeRef(n.meshCache,r.mesh,i);return r.weights!==void 0&&o.traverse(function(c){if(c.isMesh)for(let l=0,u=r.weights.length;l<u;l++)c.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),o=[],c=r.children||[];for(let u=0,d=c.length;u<d;u++)o.push(n.getDependency("node",c[u]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([i,Promise.all(o),l]).then(function(u){const d=u[0],p=u[1],m=u[2];m!==null&&d.traverse(function(y){y.isSkinnedMesh&&y.bind(m,tb)});for(let y=0,P=p.length;y<P;y++)d.add(p[y]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const i=t.nodes[e],o=i.name?r.createUniqueName(i.name):"",c=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&c.push(l),i.camera!==void 0&&c.push(r.getDependency("camera",i.camera).then(function(u){return r._getNodeRef(r.cameraCache,i.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){c.push(u)}),this.nodeCache[e]=Promise.all(c).then(function(u){let d;if(i.isBone===!0?d=new Zm:u.length>1?d=new Ai:u.length===1?d=u[0]:d=new Ui,d!==u[0])for(let p=0,m=u.length;p<m;p++)d.add(u[p]);if(i.name&&(d.userData.name=i.name,d.name=o),Gt(d,i),i.extensions&&Tn(n,d,i),i.matrix!==void 0){const p=new _r;p.fromArray(i.matrix),d.applyMatrix4(p)}else i.translation!==void 0&&d.position.fromArray(i.translation),i.rotation!==void 0&&d.quaternion.fromArray(i.rotation),i.scale!==void 0&&d.scale.fromArray(i.scale);return r.associations.has(d)||r.associations.set(d,{}),r.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,i=new Ai;n.name&&(i.name=r.createUniqueName(n.name)),Gt(i,n),n.extensions&&Tn(t,i,n);const o=n.nodes||[],c=[];for(let l=0,u=o.length;l<u;l++)c.push(r.getDependency("node",o[l]));return Promise.all(c).then(function(l){for(let d=0,p=l.length;d<p;d++)i.add(l[d]);const u=d=>{const p=new Map;for(const[m,y]of r.associations)(m instanceof ra||m instanceof ql)&&p.set(m,y);return d.traverse(m=>{const y=r.associations.get(m);y!=null&&p.set(m,y)}),p};return r.associations=u(i),i})}_createAnimationTracks(e,t,n,r,i){const o=[],c=e.name?e.name:e.uuid,l=[];jt[i.path]===jt.weights?e.traverse(function(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}):l.push(c);let u;switch(jt[i.path]){case jt.weights:u=Kl;break;case jt.rotation:u=Wl;break;case jt.position:case jt.scale:u=zl;break;default:switch(n.itemSize){case 1:u=Kl;break;case 2:case 3:default:u=zl;break}break}const d=r.interpolation!==void 0?Qg[r.interpolation]:fd,p=this._getArrayFromAccessor(n);for(let m=0,y=l.length;m<y;m++){const P=new u(l[m]+"."+jt[i.path],t.array,p,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(P),o.push(P)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ra(t.constructor),r=new Float32Array(t.length);for(let i=0,o=t.length;i<o;i++)r[i]=t[i]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Wl?$g:yd;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sb(s,e,t){const n=e.attributes,r=new xr;if(n.POSITION!==void 0){const c=t.json.accessors[n.POSITION],l=c.min,u=c.max;if(l!==void 0&&u!==void 0){if(r.set(new W(l[0],l[1],l[2]),new W(u[0],u[1],u[2])),c.normalized){const d=Ra(ns[c.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const c=new W,l=new W;for(let u=0,d=i.length;u<d;u++){const p=i[u];if(p.POSITION!==void 0){const m=t.json.accessors[p.POSITION],y=m.min,P=m.max;if(y!==void 0&&P!==void 0){if(l.setX(Math.max(Math.abs(y[0]),Math.abs(P[0]))),l.setY(Math.max(Math.abs(y[1]),Math.abs(P[1]))),l.setZ(Math.max(Math.abs(y[2]),Math.abs(P[2]))),m.normalized){const x=Ra(ns[m.componentType]);l.multiplyScalar(x)}c.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}s.boundingBox=r;const o=new tc;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=o}function su(s,e,t){const n=e.attributes,r=[];function i(o,c){return t.getDependency("accessor",o).then(function(l){s.setAttribute(c,l)})}for(const o in n){const c=Sa[o]||o.toLowerCase();c in s.attributes||r.push(i(n[o],c))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(c){s.setIndex(c)});r.push(o)}return $l.workingColorSpace!==ft&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$l.workingColorSpace}" not supported.`),Gt(s,e),sb(s,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Xg(s,e.targets,t):s})}const ca=new WeakMap;class rb extends od{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){const i=new Vi(this.manager);i.setPath(this.path),i.setResponseType("arraybuffer"),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,o=>{this.parse(o,t,r)},n,r)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,It).catch(n)}decodeDracoFile(e,t,n,r,i=ft,o=()=>{}){const c={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:i};return this.decodeGeometry(e,c).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ca.has(e)){const l=ca.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const i=this.workerNextTaskID++,o=e.byteLength,c=this._getWorker(i,o).then(l=>(r=l,new Promise((u,d)=>{r._callbacks[i]={resolve:u,reject:d},r.postMessage({type:"decode",id:i,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return c.catch(()=>!0).then(()=>{r&&i&&this._releaseTask(r,i)}),ca.set(e,{key:n,promise:c}),c}_createGeometry(e){const t=new hd;e.index&&t.setIndex(new cr(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n],i=r.name,o=r.array,c=r.itemSize,l=new cr(o,c);i==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(i,l)}return t}_assignVertexColorSpace(e,t){if(t!==It)return;const n=new vt;for(let r=0,i=e.count;r<i;r++)n.fromBufferAttribute(e,r).convertSRGBToLinear(),e.setXYZ(r,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Vi(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((r,i)=>{n.load(e,r,void 0,i)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const r=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const i=ib.toString(),o=["/* draco decoder */",r,"","/* worker */",i.substring(i.indexOf("{")+1,i.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(i){const o=i.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,i){return r._taskLoad>i._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function ib(){let s,e;onmessage=function(o){const c=o.data;switch(c.type){case"init":s=c.decoderConfig,e=new Promise(function(d){s.onModuleLoaded=function(p){d({draco:p})},DracoDecoderModule(s)});break;case"decode":const l=c.buffer,u=c.taskConfig;e.then(d=>{const p=d.draco,m=new p.Decoder;try{const y=t(p,m,new Int8Array(l),u),P=y.attributes.map(x=>x.array.buffer);y.index&&P.push(y.index.array.buffer),self.postMessage({type:"decode",id:c.id,geometry:y},P)}catch(y){console.error(y),self.postMessage({type:"error",id:c.id,error:y.message})}finally{p.destroy(m)}});break}};function t(o,c,l,u){const d=u.attributeIDs,p=u.attributeTypes;let m,y;const P=c.GetEncodedGeometryType(l);if(P===o.TRIANGULAR_MESH)m=new o.Mesh,y=c.DecodeArrayToMesh(l,l.byteLength,m);else if(P===o.POINT_CLOUD)m=new o.PointCloud,y=c.DecodeArrayToPointCloud(l,l.byteLength,m);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!y.ok()||m.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+y.error_msg());const x={index:null,attributes:[]};for(const R in d){const k=self[p[R]];let D,N;if(u.useUniqueIDs)N=d[R],D=c.GetAttributeByUniqueId(m,N);else{if(N=c.GetAttributeId(m,o[d[R]]),N===-1)continue;D=c.GetAttribute(m,N)}const M=r(o,c,m,R,k,D);R==="color"&&(M.vertexColorSpace=u.vertexColorSpace),x.attributes.push(M)}return P===o.TRIANGULAR_MESH&&(x.index=n(o,c,m)),o.destroy(m),x}function n(o,c,l){const d=l.num_faces()*3,p=d*4,m=o._malloc(p);c.GetTrianglesUInt32Array(l,p,m);const y=new Uint32Array(o.HEAPF32.buffer,m,d).slice();return o._free(m),{array:y,itemSize:1}}function r(o,c,l,u,d,p){const m=p.num_components(),P=l.num_points()*m,x=P*d.BYTES_PER_ELEMENT,R=i(o,d),k=o._malloc(x);c.GetAttributeDataArrayForAllPoints(l,p,R,x,k);const D=new d(o.HEAPF32.buffer,k,P).slice();return o._free(k),{name:u,array:D,itemSize:m}}function i(o,c){switch(c){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var ob=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var r=WebAssembly.validate(t)?e:s,i,o=WebAssembly.instantiate(c(r),{}).then(function(k){i=k.instance,i.exports.__wasm_call_ctors()});function c(k){for(var D=new Uint8Array(k.length),N=0;N<k.length;++N){var M=k.charCodeAt(N);D[N]=M>96?M-97:M>64?M-39:M+4}for(var G=0,N=0;N<k.length;++N)D[G++]=D[N]<60?n[D[N]]:(D[N]-60)*64+D[++N];return D.buffer.slice(0,G)}function l(k,D,N,M,G,q){var T=i.exports.sbrk,b=N+3&-4,_=T(b*M),A=T(G.length),w=new Uint8Array(i.exports.memory.buffer);w.set(G,A);var I=k(_,N,M,A,G.length);if(I==0&&q&&q(_,b,M),D.set(w.subarray(_,_+N*M)),T(_-T(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},p=[],m=0;function y(k){var D={object:new Worker(k),pending:0,requests:{}};return D.object.onmessage=function(N){var M=N.data;D.pending-=M.count,D.requests[M.id][M.action](M.value),delete D.requests[M.id]},D}function P(k){for(var D="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(c(r))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+R.toString(),N=new Blob([D],{type:"text/javascript"}),M=URL.createObjectURL(N),G=0;G<k;++G)p[G]=y(M);URL.revokeObjectURL(M)}function x(k,D,N,M,G){for(var q=p[0],T=1;T<p.length;++T)p[T].pending<q.pending&&(q=p[T]);return new Promise(function(b,_){var A=new Uint8Array(N),w=m++;q.pending+=k,q.requests[w]={resolve:b,reject:_},q.object.postMessage({id:w,count:k,size:D,source:A,mode:M,filter:G},[A.buffer])})}function R(k){o.then(function(){var D=k.data;try{var N=new Uint8Array(D.count*D.size);l(i.exports[D.mode],N,D.count,D.size,D.source,i.exports[D.filter]),self.postMessage({id:D.id,count:D.count,action:"resolve",value:N},[N.buffer])}catch(M){self.postMessage({id:D.id,count:D.count,action:"reject",value:M})}})}return{ready:o,supported:!0,useWorkers:function(k){P(k)},decodeVertexBuffer:function(k,D,N,M,G){l(i.exports.meshopt_decodeVertexBuffer,k,D,N,M,i.exports[u[G]])},decodeIndexBuffer:function(k,D,N,M){l(i.exports.meshopt_decodeIndexBuffer,k,D,N,M)},decodeIndexSequence:function(k,D,N,M){l(i.exports.meshopt_decodeIndexSequence,k,D,N,M)},decodeGltfBuffer:function(k,D,N,M,G,q){l(i.exports[d[G]],k,D,N,M,i.exports[u[q]])},decodeGltfBufferAsync:function(k,D,N,M,G){return p.length>0?x(k,D,N,d[M],u[G]):o.then(function(){var q=new Uint8Array(k*D);return l(i.exports[d[M]],q,k,D,N,i.exports[u[G]]),q})}}}();const ru={type:"change"},la={type:"start"},iu={type:"end"},hi=new rg,ou=new ig,ab=Math.cos(70*yt.DEG2RAD);class cb extends sg{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:$n.ROTATE,TWO:$n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(v){v.addEventListener("keydown",Fs),this._domElementKeyEvents=v},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Fs),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ru),n.update(),i=r.NONE},this.update=function(){const v=new W,j=new Fi().setFromUnitVectors(e.up,new W(0,1,0)),ne=j.clone().invert(),se=new W,ue=new Fi,Qe=new W,Pe=2*Math.PI;return function(mn=null){const Bs=n.object.position;v.copy(Bs).sub(n.target),v.applyQuaternion(j),c.setFromVector3(v),n.autoRotate&&i===r.NONE&&w(_(mn)),n.enableDamping?(c.theta+=l.theta*n.dampingFactor,c.phi+=l.phi*n.dampingFactor):(c.theta+=l.theta,c.phi+=l.phi);let ae=n.minAzimuthAngle,We=n.maxAzimuthAngle;isFinite(ae)&&isFinite(We)&&(ae<-Math.PI?ae+=Pe:ae>Math.PI&&(ae-=Pe),We<-Math.PI?We+=Pe:We>Math.PI&&(We-=Pe),ae<=We?c.theta=Math.max(ae,Math.min(We,c.theta)):c.theta=c.theta>(ae+We)/2?Math.max(ae,c.theta):Math.min(We,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&q||n.object.isOrthographicCamera?c.radius=Ot(c.radius):c.radius=Ot(c.radius*u),v.setFromSpherical(c),v.applyQuaternion(ne),Bs.copy(n.target).add(v),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0));let bt=!1;if(n.zoomToCursor&&q){let Ye=null;if(n.object.isPerspectiveCamera){const gn=v.length();Ye=Ot(gn*u);const Hn=gn-Ye;n.object.position.addScaledVector(M,Hn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const gn=new W(G.x,G.y,0);gn.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),bt=!0;const Hn=new W(G.x,G.y,0);Hn.unproject(n.object),n.object.position.sub(Hn).add(gn),n.object.updateMatrixWorld(),Ye=v.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ye!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ye).add(n.object.position):(hi.origin.copy(n.object.position),hi.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(hi.direction))<ab?e.lookAt(n.target):(ou.setFromNormalAndCoplanarPoint(n.object.up,n.target),hi.intersectPlane(ou,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/u)),n.object.updateProjectionMatrix(),bt=!0);return u=1,q=!1,bt||se.distanceToSquared(n.object.position)>o||8*(1-ue.dot(n.object.quaternion))>o||Qe.distanceToSquared(n.target)>0?(n.dispatchEvent(ru),se.copy(n.object.position),ue.copy(n.object.quaternion),Qe.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Us),n.domElement.removeEventListener("pointerdown",Ms),n.domElement.removeEventListener("pointercancel",pe),n.domElement.removeEventListener("wheel",Vs),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",pe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Fs),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let i=r.NONE;const o=1e-6,c=new Ql,l=new Ql;let u=1;const d=new W,p=new Be,m=new Be,y=new Be,P=new Be,x=new Be,R=new Be,k=new Be,D=new Be,N=new Be,M=new W,G=new Be;let q=!1;const T=[],b={};function _(v){return v!==null?2*Math.PI/60*n.autoRotateSpeed*v:2*Math.PI/60/60*n.autoRotateSpeed}function A(v){const j=Math.abs(v)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*j)}function w(v){l.theta-=v}function I(v){l.phi-=v}const E=function(){const v=new W;return function(ne,se){v.setFromMatrixColumn(se,0),v.multiplyScalar(-ne),d.add(v)}}(),Re=function(){const v=new W;return function(ne,se){n.screenSpacePanning===!0?v.setFromMatrixColumn(se,1):(v.setFromMatrixColumn(se,0),v.crossVectors(n.object.up,v)),v.multiplyScalar(ne),d.add(v)}}(),je=function(){const v=new W;return function(ne,se){const ue=n.domElement;if(n.object.isPerspectiveCamera){const Qe=n.object.position;v.copy(Qe).sub(n.target);let Pe=v.length();Pe*=Math.tan(n.object.fov/2*Math.PI/180),E(2*ne*Pe/ue.clientHeight,n.object.matrix),Re(2*se*Pe/ue.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(E(ne*(n.object.right-n.object.left)/n.object.zoom/ue.clientWidth,n.object.matrix),Re(se*(n.object.top-n.object.bottom)/n.object.zoom/ue.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Rs(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u/=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Kr(v){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?u*=v:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Dt(v,j){if(!n.zoomToCursor)return;q=!0;const ne=n.domElement.getBoundingClientRect(),se=v-ne.left,ue=j-ne.top,Qe=ne.width,Pe=ne.height;G.x=se/Qe*2-1,G.y=-(ue/Pe)*2+1,M.set(G.x,G.y,1).unproject(n.object).sub(n.object.position).normalize()}function Ot(v){return Math.max(n.minDistance,Math.min(n.maxDistance,v))}function Wr(v){p.set(v.clientX,v.clientY)}function $r(v){Dt(v.clientX,v.clientX),k.set(v.clientX,v.clientY)}function Ps(v){P.set(v.clientX,v.clientY)}function Qr(v){m.set(v.clientX,v.clientY),y.subVectors(m,p).multiplyScalar(n.rotateSpeed);const j=n.domElement;w(2*Math.PI*y.x/j.clientHeight),I(2*Math.PI*y.y/j.clientHeight),p.copy(m),n.update()}function Un(v){D.set(v.clientX,v.clientY),N.subVectors(D,k),N.y>0?Rs(A(N.y)):N.y<0&&Kr(A(N.y)),k.copy(D),n.update()}function Cs(v){x.set(v.clientX,v.clientY),R.subVectors(x,P).multiplyScalar(n.panSpeed),je(R.x,R.y),P.copy(x),n.update()}function ks(v){Dt(v.clientX,v.clientY),v.deltaY<0?Kr(A(v.deltaY)):v.deltaY>0&&Rs(A(v.deltaY)),n.update()}function xs(v){let j=!1;switch(v.code){case n.keys.UP:v.ctrlKey||v.metaKey||v.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):je(0,n.keyPanSpeed),j=!0;break;case n.keys.BOTTOM:v.ctrlKey||v.metaKey||v.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):je(0,-n.keyPanSpeed),j=!0;break;case n.keys.LEFT:v.ctrlKey||v.metaKey||v.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):je(n.keyPanSpeed,0),j=!0;break;case n.keys.RIGHT:v.ctrlKey||v.metaKey||v.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):je(-n.keyPanSpeed,0),j=!0;break}j&&(v.preventDefault(),n.update())}function jn(v){if(T.length===1)p.set(v.pageX,v.pageY);else{const j=gt(v),ne=.5*(v.pageX+j.x),se=.5*(v.pageY+j.y);p.set(ne,se)}}function Ds(v){if(T.length===1)P.set(v.pageX,v.pageY);else{const j=gt(v),ne=.5*(v.pageX+j.x),se=.5*(v.pageY+j.y);P.set(ne,se)}}function Yr(v){const j=gt(v),ne=v.pageX-j.x,se=v.pageY-j.y,ue=Math.sqrt(ne*ne+se*se);k.set(0,ue)}function jo(v){n.enableZoom&&Yr(v),n.enablePan&&Ds(v)}function Xr(v){n.enableZoom&&Yr(v),n.enableRotate&&jn(v)}function Bn(v){if(T.length==1)m.set(v.pageX,v.pageY);else{const ne=gt(v),se=.5*(v.pageX+ne.x),ue=.5*(v.pageY+ne.y);m.set(se,ue)}y.subVectors(m,p).multiplyScalar(n.rotateSpeed);const j=n.domElement;w(2*Math.PI*y.x/j.clientHeight),I(2*Math.PI*y.y/j.clientHeight),p.copy(m)}function Os(v){if(T.length===1)x.set(v.pageX,v.pageY);else{const j=gt(v),ne=.5*(v.pageX+j.x),se=.5*(v.pageY+j.y);x.set(ne,se)}R.subVectors(x,P).multiplyScalar(n.panSpeed),je(R.x,R.y),P.copy(x)}function Jr(v){const j=gt(v),ne=v.pageX-j.x,se=v.pageY-j.y,ue=Math.sqrt(ne*ne+se*se);D.set(0,ue),N.set(0,Math.pow(D.y/k.y,n.zoomSpeed)),Rs(N.y),k.copy(D);const Qe=(v.pageX+j.x)*.5,Pe=(v.pageY+j.y)*.5;Dt(Qe,Pe)}function Ns(v){n.enableZoom&&Jr(v),n.enablePan&&Os(v)}function Ls(v){n.enableZoom&&Jr(v),n.enableRotate&&Bn(v)}function Ms(v){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(v.pointerId),n.domElement.addEventListener("pointermove",ge),n.domElement.addEventListener("pointerup",pe)),js(v),v.pointerType==="touch"?pn(v):Gn(v))}function ge(v){n.enabled!==!1&&(v.pointerType==="touch"?Zr(v):Bo(v))}function pe(v){Go(v),T.length===0&&(n.domElement.releasePointerCapture(v.pointerId),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",pe)),n.dispatchEvent(iu),i=r.NONE}function Gn(v){let j;switch(v.button){case 0:j=n.mouseButtons.LEFT;break;case 1:j=n.mouseButtons.MIDDLE;break;case 2:j=n.mouseButtons.RIGHT;break;default:j=-1}switch(j){case Wn.DOLLY:if(n.enableZoom===!1)return;$r(v),i=r.DOLLY;break;case Wn.ROTATE:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enablePan===!1)return;Ps(v),i=r.PAN}else{if(n.enableRotate===!1)return;Wr(v),i=r.ROTATE}break;case Wn.PAN:if(v.ctrlKey||v.metaKey||v.shiftKey){if(n.enableRotate===!1)return;Wr(v),i=r.ROTATE}else{if(n.enablePan===!1)return;Ps(v),i=r.PAN}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(la)}function Bo(v){switch(i){case r.ROTATE:if(n.enableRotate===!1)return;Qr(v);break;case r.DOLLY:if(n.enableZoom===!1)return;Un(v);break;case r.PAN:if(n.enablePan===!1)return;Cs(v);break}}function Vs(v){n.enabled===!1||n.enableZoom===!1||i!==r.NONE||(v.preventDefault(),n.dispatchEvent(la),ks(v),n.dispatchEvent(iu))}function Fs(v){n.enabled===!1||n.enablePan===!1||xs(v)}function pn(v){switch(ei(v),T.length){case 1:switch(n.touches.ONE){case $n.ROTATE:if(n.enableRotate===!1)return;jn(v),i=r.TOUCH_ROTATE;break;case $n.PAN:if(n.enablePan===!1)return;Ds(v),i=r.TOUCH_PAN;break;default:i=r.NONE}break;case 2:switch(n.touches.TWO){case $n.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;jo(v),i=r.TOUCH_DOLLY_PAN;break;case $n.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Xr(v),i=r.TOUCH_DOLLY_ROTATE;break;default:i=r.NONE}break;default:i=r.NONE}i!==r.NONE&&n.dispatchEvent(la)}function Zr(v){switch(ei(v),i){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Bn(v),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Os(v),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ns(v),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ls(v),n.update();break;default:i=r.NONE}}function Us(v){n.enabled!==!1&&v.preventDefault()}function js(v){T.push(v.pointerId)}function Go(v){delete b[v.pointerId];for(let j=0;j<T.length;j++)if(T[j]==v.pointerId){T.splice(j,1);return}}function ei(v){let j=b[v.pointerId];j===void 0&&(j=new Be,b[v.pointerId]=j),j.set(v.pageX,v.pageY)}function gt(v){const j=v.pointerId===T[0]?T[1]:T[0];return b[j]}n.domElement.addEventListener("contextmenu",Us),n.domElement.addEventListener("pointerdown",Ms),n.domElement.addEventListener("pointercancel",pe),n.domElement.addEventListener("wheel",Vs,{passive:!1}),this.update()}}const au=new xr,di=new W;class nc extends og{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Yl(e,3)),this.setAttribute("uv",new Yl(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ia(t,6,1);return this.setAttribute("instanceStart",new An(n,3,0)),this.setAttribute("instanceEnd",new An(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new Ia(t,6,1);return this.setAttribute("instanceColorStart",new An(n,3,0)),this.setAttribute("instanceColorEnd",new An(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ag(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),au.setFromBufferAttribute(t),this.boundingBox.union(au))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,o=e.count;i<o;i++)di.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(di)),di.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(di));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Ii.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Be(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};vi.line={uniforms:pd.merge([Ii.common,Ii.fog,Ii.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class ji extends cg{constructor(e){super({type:"LineMaterial",uniforms:pd.clone(vi.line.uniforms),vertexShader:vi.line.vertexShader,fragmentShader:vi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const cu=new W,lu=new W,Ce=new ho,ke=new ho,st=new ho,ua=new W,ha=new _r,xe=new lg,uu=new W,fi=new xr,pi=new tc,rt=new ho;let ot,Pn;function hu(s,e,t){return rt.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),rt.multiplyScalar(1/rt.w),rt.x=Pn/t.width,rt.y=Pn/t.height,rt.applyMatrix4(s.projectionMatrixInverse),rt.multiplyScalar(1/rt.w),Math.abs(Math.max(rt.x,rt.y))}function lb(s,e){const t=s.matrixWorld,n=s.geometry,r=n.attributes.instanceStart,i=n.attributes.instanceEnd,o=Math.min(n.instanceCount,r.count);for(let c=0,l=o;c<l;c++){xe.start.fromBufferAttribute(r,c),xe.end.fromBufferAttribute(i,c),xe.applyMatrix4(t);const u=new W,d=new W;ot.distanceSqToSegment(xe.start,xe.end,d,u),d.distanceTo(u)<Pn*.5&&e.push({point:d,pointOnLine:u,distance:ot.origin.distanceTo(d),object:s,face:null,faceIndex:c,uv:null,uv1:null})}}function ub(s,e,t){const n=e.projectionMatrix,i=s.material.resolution,o=s.matrixWorld,c=s.geometry,l=c.attributes.instanceStart,u=c.attributes.instanceEnd,d=Math.min(c.instanceCount,l.count),p=-e.near;ot.at(1,st),st.w=1,st.applyMatrix4(e.matrixWorldInverse),st.applyMatrix4(n),st.multiplyScalar(1/st.w),st.x*=i.x/2,st.y*=i.y/2,st.z=0,ua.copy(st),ha.multiplyMatrices(e.matrixWorldInverse,o);for(let m=0,y=d;m<y;m++){if(Ce.fromBufferAttribute(l,m),ke.fromBufferAttribute(u,m),Ce.w=1,ke.w=1,Ce.applyMatrix4(ha),ke.applyMatrix4(ha),Ce.z>p&&ke.z>p)continue;if(Ce.z>p){const N=Ce.z-ke.z,M=(Ce.z-p)/N;Ce.lerp(ke,M)}else if(ke.z>p){const N=ke.z-Ce.z,M=(ke.z-p)/N;ke.lerp(Ce,M)}Ce.applyMatrix4(n),ke.applyMatrix4(n),Ce.multiplyScalar(1/Ce.w),ke.multiplyScalar(1/ke.w),Ce.x*=i.x/2,Ce.y*=i.y/2,ke.x*=i.x/2,ke.y*=i.y/2,xe.start.copy(Ce),xe.start.z=0,xe.end.copy(ke),xe.end.z=0;const x=xe.closestPointToPointParameter(ua,!0);xe.at(x,uu);const R=yt.lerp(Ce.z,ke.z,x),k=R>=-1&&R<=1,D=ua.distanceTo(uu)<Pn*.5;if(k&&D){xe.start.fromBufferAttribute(l,m),xe.end.fromBufferAttribute(u,m),xe.start.applyMatrix4(o),xe.end.applyMatrix4(o);const N=new W,M=new W;ot.distanceSqToSegment(xe.start,xe.end,M,N),t.push({point:M,pointOnLine:N,distance:ot.origin.distanceTo(M),object:s,face:null,faceIndex:m,uv:null,uv1:null})}}}class Ed extends ec{constructor(e=new nc,t=new ji({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,c=0,l=t.count;o<l;o++,c+=2)cu.fromBufferAttribute(t,o),lu.fromBufferAttribute(n,o),r[c]=c===0?0:r[c-1],r[c+1]=r[c]+cu.distanceTo(lu);const i=new Ia(r,2,1);return e.setAttribute("instanceDistanceStart",new An(i,1,0)),e.setAttribute("instanceDistanceEnd",new An(i,1,1)),this}raycast(e,t){const n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const i=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ot=e.ray;const o=this.matrixWorld,c=this.geometry,l=this.material;Pn=l.linewidth+i,c.boundingSphere===null&&c.computeBoundingSphere(),pi.copy(c.boundingSphere).applyMatrix4(o);let u;if(n)u=Pn*.5;else{const p=Math.max(r.near,pi.distanceToPoint(ot.origin));u=hu(r,p,l.resolution)}if(pi.radius+=u,ot.intersectsSphere(pi)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),fi.copy(c.boundingBox).applyMatrix4(o);let d;if(n)d=Pn*.5;else{const p=Math.max(r.near,fi.distanceToPoint(ot.origin));d=hu(r,p,l.resolution)}fi.expandByScalar(d),ot.intersectsBox(fi)!==!1&&(n?lb(this,t):ub(this,r,t))}}class Td extends nc{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class hb extends Ed{constructor(e=new Td,t=new ji({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const wd=["tonbery","chocobo","carbuncle","fenrir","moogle"],Dr=17,vn=8;function Ad(s){try{return new Intl.DateTimeFormat("ko-KR",{timeZone:"Asia/Seoul",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(s)}catch{return""}}function db(s=1,e=0,t=Dr,n=vn){const r=Math.max(0,Math.min(n,Number(e))),i=Math.max(1,Math.min(t,Number(s))),o=t*n,c=(i-1)*n+r;return yt.clamp(c/o,0,1)}const du=7665910,fb={tonbery:"assets/ship-tonberry.png",chocobo:"assets/ship-chocobo.png",carbuncle:"assets/ship-carbuncle.png",fenrir:"assets/ship-fenrir.png",moogle:"assets/ship-moogle.png"},pb={tonbery:"톤",chocobo:"초",carbuncle:"카",fenrir:"펜",moogle:"모"},mb=new cd;function gb(){const s=document.createElement("canvas");s.width=s.height=2;const e=new bd(s);return e.needsUpdate=!0,e}function bb(s){const e=new md({map:gb(),transparent:!0,depthTest:!1,depthWrite:!1}),t=new gd(e);t.renderOrder=9998,t.userData.aspect=1,t.scale.set(4,4,1);const n=fb[s],r=`/moon.ver2/${n??""}`;return n&&mb.load(r,i=>{"colorSpace"in i&&(i.colorSpace=It),i.anisotropy=8,e.map=i,e.needsUpdate=!0;const o=i.image,c=o!=null&&o.width&&(o!=null&&o.height)?o.width/o.height:1;t.userData.aspect=c},void 0,()=>{}),t}function _b(s="톤"){const n=document.createElement("canvas");n.width=256,n.height=128;const r=n.getContext("2d");r.clearRect(0,0,256,128),r.font='700 50px "Zen Dots","Noto Sans KR",sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillStyle="#ccfaff",r.shadowColor="#76f3ff",r.shadowBlur=18,r.fillText(s,256/2,128/2-6);const i=new bd(n);i.anisotropy=8;const o=new md({map:i,transparent:!0,depthWrite:!1,depthTest:!1}),c=new gd(o);return c.userData.aspect=256/128,c.scale.set(3.2,1.6,1),c.renderOrder=9999,c}function mi(s,e,t){s!=null&&s.resolution&&s.resolution.set(e,t)}function yb(s,e,t=new W(0,1,0),{arc:n=.16,endFlat:r=.55}={}){const i=e.clone().sub(s),o=i.length(),c=s.clone().add(i.clone().multiplyScalar(.25)).add(t.clone().multiplyScalar(o*n)),l=s.clone().add(i.clone().multiplyScalar(.75)).add(t.clone().multiplyScalar(o*n*(1-r)));return new hg(s,c,l,e)}class fu{constructor(e,{camera:t=null,curve:n=null,showLine:r=!0}={}){this.scene=e,this.camera=t,this.group=new Ai,this.group.name="SpaceRoute",this.group.visible=!0,e.add(this.group),this.anchorStart=null,this.anchorEnd=null,this.curve=n||new ug([new W,new W(1,0,0)]),this._lastEnds={a:new W,b:new W},this.lineGeo=new Td,this.lineMat=new ji({color:du,linewidth:5,transparent:!0,opacity:.85,dashed:!0,dashSize:.1,gapSize:.3}),mi(this.lineMat,innerWidth,innerHeight),this.line=new hb(this.lineGeo,this.lineMat),this.line.renderOrder=8e3,r&&this.group.add(this.line),this.tickGeo=new nc,this.tickMat=new ji({color:du,linewidth:2,transparent:!0,opacity:.95}),mi(this.tickMat,innerWidth,innerHeight),this.ticks=new Ed(this.tickGeo,this.tickMat),this.ticks.renderOrder=8001,this.group.add(this.ticks),this.ships={},this.speed=2.5,this.cluster={},this.clusterEps=1/(Dr*vn)*.5,this.sepBase=.9,this.sepScale=.02,this.scaleFactor=.04,this.scaleMin=1,this.scaleMax=4,this.labelScaleK=1.5,this.labelYOffsetK=1}setResolution(e,t){mi(this.lineMat,e,t),mi(this.tickMat,e,t)}setSeparation({base:e,eps:t,scale:n}={}){e!=null&&(this.sepBase=e),t!=null&&(this.clusterEps=t),n!=null&&(this.sepScale=n)}setDash({dash:e,gap:t,width:n}={}){n!=null&&(this.lineMat.linewidth=n),e!=null&&(this.lineMat.dashSize=e),t!=null&&(this.lineMat.gapSize=t),this.line.computeLineDistances(),this.lineMat.needsUpdate=!0}setScale({factor:e,min:t,max:n,labelK:r,labelY:i}={}){e!=null&&(this.scaleFactor=e),t!=null&&(this.scaleMin=t),n!=null&&(this.scaleMax=n),r!=null&&(this.labelScaleK=r),i!=null&&(this.labelYOffsetK=i)}attachAnchors(e,t,{forceBuild:n=!0}={}){var o,c,l,u;if(this.anchorStart=e||null,this.anchorEnd=t||null,!n)return;const r=new W,i=new W;(c=(o=this.anchorStart)==null?void 0:o.getWorldPosition)==null||c.call(o,r),(u=(l=this.anchorEnd)==null?void 0:l.getWorldPosition)==null||u.call(l,i),r.distanceToSquared(i)<1e-8&&(i.x+=.001),this._lastEnds.a.copy(r),this._lastEnds.b.copy(i),this._rebuildCurveAndLines()}setServerProgress(e,t,n,{animate:r=!0}={}){const i=db(t,n);let o=this.ships[e];if(o)o.targetT=i,r||(o.currentT=i);else{const c=bb(e),l=_b(pb[e]??(e[0]||"S").toUpperCase());this.group.add(c),this.group.add(l),o=this.ships[e]={id:e,sprite:c,label:l,targetT:i,currentT:i}}this._applyShipPos(o)}setAll(e,t={}){e.forEach(n=>this.setServerProgress(n.serverId,n.big,n.small,t))}_updateClusters(){const e=["tonbery","chocobo","carbuncle","fenrir","moogle"];this.cluster={},e.forEach((t,n)=>{if(this.ships[t]){const r=n-2;this.cluster[t]={ord:r,n:1,t:this.ships[t].currentT}}})}_applyShipPos(e){var R,k,D;const t=yt.clamp(e.currentT,0,1),n=this.curve.getPointAt(t,new W),r=this.curve.getTangentAt(t,new W),i=e.sprite.userData.aspect||1;let o=6;if(this.camera){const N=this.camera.position.distanceTo(n);o=yt.clamp(N*this.scaleFactor,this.scaleMin,this.scaleMax)}const c=o/i;e.sprite.scale.set(o,c,1);const l=o*this.labelScaleK,u=l/(((k=(R=e.label)==null?void 0:R.userData)==null?void 0:k.aspect)||2);e.label.scale.set(l,u,1);const d=Math.atan2(r.y,r.x);e.sprite.material.rotation=d;let p=new W().crossVectors(r,new W(0,0,1));p.lengthSq()<1e-6&&p.set(-r.y,r.x,0),p.normalize();const m=(D=this.cluster)==null?void 0:D[e.id];let y=0;if(m){let N=this.sepBase;if(this.camera){const M=this.camera.position.distanceTo(n);N=Math.max(N,M*this.sepScale)}y=m.ord*N}const P=n.clone().addScaledVector(p,y);P.y+=.5,e.sprite.position.copy(P);const x=P.clone();x.y+=Math.max(.6,o*this.labelYOffsetK),e.label.position.copy(x),e.label.material.rotation=0}_rebuildCurveAndLines(){const e=this._lastEnds.a,t=this._lastEnds.b,n=t.clone().sub(e).length();if(n<1e-6)return;const r=new W(0,1,0);this.curve=yb(e,t,r,{arc:.16,endFlat:.55});const i=this.curve.getPoints(500),o=new Float32Array(i.length*3);for(let d=0;d<i.length;d++){const p=i[d];o[d*3]=p.x,o[d*3+1]=p.y,o[d*3+2]=p.z}this.lineGeo.setPositions(o),this.line.computeLineDistances();const c=21,l=new Float32Array(c*2*3),u=yt.clamp(n*.02,.4,2.2);for(let d=0;d<c;d++){const p=d/(c-1),m=this.curve.getPointAt(p),y=this.curve.getTangentAt(p);let P=new W().crossVectors(y,new W(0,0,1));P.lengthSq()<1e-6&&(P=new W(-y.y,y.x,0)),P.normalize();const x=m.clone().addScaledVector(P,-u/2),R=m.clone().addScaledVector(P,u/2),k=d*6;l[k]=x.x,l[k+1]=x.y,l[k+2]=x.z,l[k+3]=R.x,l[k+4]=R.y,l[k+5]=R.z}this.tickGeo.setPositions(l)}update(e){if(this.anchorStart&&this.anchorEnd){const n=new W,r=new W;this.anchorStart.getWorldPosition(n),this.anchorEnd.getWorldPosition(r),(n.distanceToSquared(this._lastEnds.a)>1e-4||r.distanceToSquared(this._lastEnds.b)>1e-4)&&(this._lastEnds.a.copy(n),this._lastEnds.b.copy(r),this._rebuildCurveAndLines())}const t=Math.min(1,this.speed*e);for(const n in this.ships){const r=this.ships[n];r.currentT=yt.lerp(r.currentT,r.targetT,t)}this._updateClusters();for(const n in this.ships)this._applyShipPos(this.ships[n])}}const gi=document.getElementById("bgvid");gi&&(gi.src="/moon.ver2/assets/bg.mp4",gi.addEventListener("canplay",()=>gi.play().catch(()=>{}),{once:!0}));const Eb=500,Or=()=>window.innerWidth<=Eb,Bi=document.getElementById("stage");Or()&&(Bi.style.display="none");const pt=new dg({canvas:Bi,antialias:!0,alpha:!0});pt.setPixelRatio(Math.min(devicePixelRatio,2));pt.setSize(innerWidth,innerHeight);pt.outputColorSpace=It;pt.toneMapping=fg;pt.toneMappingExposure=1.15;const _t=new pg,$t=new dd(50,innerWidth/innerHeight,.1,2e3);$t.position.set(4,2.5,6);const sc=new cb($t,pt.domElement);sc.enableDamping=!1;function Cn(){Or()||pt.render(_t,$t)}sc.addEventListener("change",Cn);_t.add(new mg(16777215,.15));_t.add(new gg(12574719,592400,.12));const fo=new ec(new bg(200,200),new _g({opacity:.18}));fo.rotation.x=-Math.PI/2;fo.position.y=-.01;fo.receiveShadow=!0;_t.add(fo);Cn();const vd=[];let Si=0,In=null;const pu=new Tg;let _e=null;if(!Or()){const s=new vg,e=new rb;e.setDecoderPath("/moon.ver2/draco/"),s.setDRACOLoader(e),s.setMeshoptDecoder(ob);const t="/moon.ver2/assets/solar.glb";if(!(localStorage.getItem("hide3d")==="true"))s.load(t,async r=>{var u,d;const i=r.scene||((u=r.scenes)==null?void 0:u[0]),o=Id(i,/(sun|sol)/i);if(Ab(i,12567753,o),o){wb(o,3.2);const p=new ad(16773307,2e3,1200,2);o.add(p),p.position.set(0,0,0)}i.traverse(p=>{p.isMesh&&(p.castShadow=!1,p.receiveShadow=!1)}),_t.add(i),Ib(i,$t,sc);const c=gu(i,{exact:["earth","erath"],include:["earth","erath","blue"],exclude:["bezier","circle","orbit","curve","path","track"]}),l=gu(i,{exact:["neptune"],include:["neptune"],exclude:["bezier","circle","orbit","curve","path","track"]});_e=new fu(_t,{camera:$t,showLine:!0}),_e.attachAnchors(c??i,l??i,{forceBuild:!0}),window.Route=_e;try{const m=await(await Jl(()=>Promise.resolve().then(()=>rd),void 0)).fetchProgressAll();m&&(_e.setAll(m,{animate:!1}),Cn())}catch(p){console.warn("[Route] fetchProgressAll failed:",p)}if((d=r.animations)!=null&&d.length){const p=new yg(i);vd.push(p),r.animations.forEach(m=>{const y=p.clipAction(m);y.reset(),y.setLoop(Eg,0),y.clampWhenFinished=!0,y.play(),Si++}),p.addEventListener("finished",()=>{Si=Math.max(0,Si-1)}),Gi()}},void 0,r=>console.error("GLB 로드 실패:",r));else{console.log("[3D] Model hidden, ships only mode");const r=new Ui,i=new Ui;i.position.set(15,0,0),_t.add(r),_t.add(i),_e=new fu(_t,{camera:$t,showLine:!0}),_e.attachAnchors(r,i,{forceBuild:!0}),window.Route=_e,setTimeout(async()=>{try{const c=await(await Jl(()=>Promise.resolve().then(()=>rd),void 0)).fetchProgressAll();c&&(_e.setAll(c,{animate:!1}),Cn(),Gi())}catch(o){console.warn("[Route] fetchProgressAll failed:",o)}},100)}}function Tb(){if(!_e||!_e.ships)return!1;for(const s in _e.ships){const e=_e.ships[s];if(Math.abs(((e==null?void 0:e.currentT)??0)-((e==null?void 0:e.targetT)??0))>1e-4)return!0}return!1}function Gi(){if(In||Or())return;pu.start();const s=()=>{const e=pu.getDelta();vd.forEach(t=>t.update(e)),_e==null||_e.update(e),Si>0||Tb()?(Cn(),In=requestAnimationFrame(s)):In=null};In=requestAnimationFrame(s)}window.addEventListener("lp-progress-updated",()=>Gi());function Id(s,e){let t=null;return s.traverse(n=>{!t&&n.name&&e.test(n.name)&&(t=n)}),t}function mu(s){if(!s)return null;let e=null;return s.traverse(t=>{!e&&t.isMesh&&(e=t)}),e||s}function gu(s,{exact:e=[],include:t=[],exclude:n=[]}){for(const i of e){const o=Id(s,new RegExp(`^${i}$`,"i"));if(o)return mu(o)}let r=null;return s.traverse(i=>{if(r)return;const o=(i.name||"").toLowerCase();t.some(c=>o.includes(c))&&!n.some(c=>o.includes(c))&&(r=mu(i))}),r}function wb(s,e=3.2){s.traverse(t=>{var n,r,i,o,c;if(t.isMesh){const l=new uo({color:16777215,roughness:.2,metalness:0,emissive:new vt(16765565),emissiveIntensity:e});try{(i=(r=(n=t.material)==null?void 0:n.map)==null?void 0:r.dispose)==null||i.call(r),(c=(o=t.material)==null?void 0:o.dispose)==null||c.call(o)}catch{}t.material=l}})}function Ab(s,e,t){const n=new uo({color:e,roughness:.9,metalness:.05});s.traverse(r=>{var i,o,c,l,u;if(r.isMesh){if(vb(r,t))return;try{(c=(o=(i=r.material)==null?void 0:i.map)==null?void 0:o.dispose)==null||c.call(o),(u=(l=r.material)==null?void 0:l.dispose)==null||u.call(l)}catch{}r.material=n.clone()}})}function vb(s,e){if(!e)return!1;for(let t=s;t;t=t.parent)if(t===e)return!0;return!1}function Ib(s,e,t){const n=new xr().setFromObject(s),r=n.getSize(new W),i=n.getCenter(new W),l=(Math.max(r.x,r.y,r.z)||1)/(2*Math.tan(yt.degToRad(e.fov*.5)))*1.3,u=new W(1,.6,1).normalize();e.position.copy(i).add(u.multiplyScalar(l)),e.near=l/100,e.far=l*100,e.updateProjectionMatrix(),t.target.copy(i),t.update()}function Sd(){Or()?(In&&(cancelAnimationFrame(In),In=null),Bi.style.display="none"):(Bi.style.display="block",pt.setPixelRatio(Math.min(devicePixelRatio,2)),pt.setSize(innerWidth,innerHeight),Cn(),Gi())}addEventListener("resize",()=>{var s;$t.aspect=innerWidth/innerHeight,$t.updateProjectionMatrix(),pt.setSize(innerWidth,innerHeight),(s=_e==null?void 0:_e.setResolution)==null||s.call(_e,innerWidth,innerHeight),Cn(),Sd()});Sd();const Sb=()=>{};var bu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Rb=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],o=s[t++],c=s[t++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=s[t++],o=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],o=r+1<s.length,c=o?s[r+1]:0,l=r+2<s.length,u=l?s[r+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),n.push(t[d],t[p],t[m],t[y])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(Rd(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):Rb(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],c=r<s.length?t[s.charAt(r)]:0;++r;const u=r<s.length?t[s.charAt(r)]:64;++r;const p=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||c==null||u==null||p==null)throw new Pb;const m=i<<2|c>>4;if(n.push(m),u!==64){const y=c<<4&240|u>>2;if(n.push(y),p!==64){const P=u<<6&192|p;n.push(P)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class Pb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cb=function(s){const e=Rd(s);return Pd.encodeByteArray(e,!0)},Hi=function(s){return Cb(s).replace(/\./g,"")},Cd=function(s){try{return Pd.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=()=>kb().__FIREBASE_DEFAULTS__,Db=()=>{if(typeof process>"u"||typeof bu>"u")return;const s=bu.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},Ob=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Cd(s[1]);return e&&JSON.parse(e)},po=()=>{try{return Sb()||xb()||Db()||Ob()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},kd=s=>{var e,t;return(t=(e=po())==null?void 0:e.emulatorHosts)==null?void 0:t[s]},Nb=s=>{const e=kd(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},xd=()=>{var s;return(s=po())==null?void 0:s.config},Dd=s=>{var e;return(e=po())==null?void 0:e[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Od(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Hi(JSON.stringify(t)),Hi(JSON.stringify(o)),""].join(".")}const lr={};function Vb(){const s={prod:[],emulator:[]};for(const e of Object.keys(lr))lr[e]?s.emulator.push(e):s.prod.push(e);return s}function Fb(s){let e=document.getElementById(s),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",s),t=!0),{created:t,element:e}}let _u=!1;function Nd(s,e){if(typeof window>"u"||typeof document>"u"||!bs(window.location.host)||lr[s]===e||lr[s]||_u)return;lr[s]=e;function t(m){return`__firebase__banner__${m}`}const n="__firebase__banner",i=Vb().prod.length>0;function o(){const m=document.getElementById(n);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{_u=!0,o()},m}function d(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=Fb(n),y=t("text"),P=document.getElementById(y)||document.createElement("span"),x=t("learnmore"),R=document.getElementById(x)||document.createElement("a"),k=t("preprendIcon"),D=document.getElementById(k)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const N=m.element;c(N),d(R,x);const M=u();l(D,k),N.append(D,P,R,M),document.body.appendChild(N)}i?(P.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ub(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function jb(){var e;const s=(e=po())==null?void 0:e.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Gb(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function Hb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qb(){const s=Ve();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function zb(){return!jb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kb(){try{return typeof indexedDB=="object"}catch{return!1}}function Wb(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="FirebaseError";class xt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=$b,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Qb(i,n):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new xt(r,c,n)}}function Qb(s,e){return s.replace(Yb,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const Yb=/\{\$([^}]+)}/g;function Xb(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function kn(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],o=e[r];if(yu(i)&&yu(o)){if(!kn(i,o))return!1}else if(i!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function yu(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function tr(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function nr(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}function Jb(s,e){const t=new Zb(s,e);return t.subscribe.bind(t)}class Zb{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");e_(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=da),r.error===void 0&&(r.error=da),r.complete===void 0&&(r.complete=da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e_(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function da(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(s){return s&&s._delegate?s._delegate:s}class xn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Lb;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(s_(e))try{this.getOrInitializeService({instanceIdentifier:wn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wn){return this.instances.has(e)}getOptions(e=wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:n_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=wn){return this.component?this.component.multipleInstances?e:wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n_(s){return s===wn?void 0:s}function s_(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new t_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Y||(Y={}));const i_={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},o_=Y.INFO,a_={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},c_=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=a_[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=o_,this._logHandler=c_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?i_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const l_=(s,e)=>e.some(t=>s instanceof t);let Eu,Tu;function u_(){return Eu||(Eu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h_(){return Tu||(Tu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ld=new WeakMap,Pa=new WeakMap,Md=new WeakMap,fa=new WeakMap,ic=new WeakMap;function d_(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{t(Qt(s.result)),r()},o=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ld.set(t,s)}).catch(()=>{}),ic.set(e,s),e}function f_(s){if(Pa.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});Pa.set(s,e)}let Ca={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Pa.get(s);if(e==="objectStoreNames")return s.objectStoreNames||Md.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qt(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function p_(s){Ca=s(Ca)}function m_(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(pa(this),e,...t);return Md.set(n,e.sort?e.sort():[e]),Qt(n)}:h_().includes(s)?function(...e){return s.apply(pa(this),e),Qt(Ld.get(this))}:function(...e){return Qt(s.apply(pa(this),e))}}function g_(s){return typeof s=="function"?m_(s):(s instanceof IDBTransaction&&f_(s),l_(s,u_())?new Proxy(s,Ca):s)}function Qt(s){if(s instanceof IDBRequest)return d_(s);if(fa.has(s))return fa.get(s);const e=g_(s);return e!==s&&(fa.set(s,e),ic.set(e,s)),e}const pa=s=>ic.get(s);function b_(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const o=indexedDB.open(s,e),c=Qt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Qt(o.result),l.oldVersion,l.newVersion,Qt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const __=["get","getKey","getAll","getAllKeys","count"],y_=["put","add","delete","clear"],ma=new Map;function wu(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=y_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||__.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),r&&l.done]))[0]};return ma.set(e,i),i}p_(s=>({...s,get:(e,t,n)=>wu(e,t)||s.get(e,t,n),has:(e,t)=>!!wu(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(T_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function T_(s){const e=s.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ka="@firebase/app",Au="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=new rc("@firebase/app"),w_="@firebase/app-compat",A_="@firebase/analytics-compat",v_="@firebase/analytics",I_="@firebase/app-check-compat",S_="@firebase/app-check",R_="@firebase/auth",P_="@firebase/auth-compat",C_="@firebase/database",k_="@firebase/data-connect",x_="@firebase/database-compat",D_="@firebase/functions",O_="@firebase/functions-compat",N_="@firebase/installations",L_="@firebase/installations-compat",M_="@firebase/messaging",V_="@firebase/messaging-compat",F_="@firebase/performance",U_="@firebase/performance-compat",j_="@firebase/remote-config",B_="@firebase/remote-config-compat",G_="@firebase/storage",H_="@firebase/storage-compat",q_="@firebase/firestore",z_="@firebase/ai",K_="@firebase/firestore-compat",W_="firebase",$_="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="[DEFAULT]",Q_={[ka]:"fire-core",[w_]:"fire-core-compat",[v_]:"fire-analytics",[A_]:"fire-analytics-compat",[S_]:"fire-app-check",[I_]:"fire-app-check-compat",[R_]:"fire-auth",[P_]:"fire-auth-compat",[C_]:"fire-rtdb",[k_]:"fire-data-connect",[x_]:"fire-rtdb-compat",[D_]:"fire-fn",[O_]:"fire-fn-compat",[N_]:"fire-iid",[L_]:"fire-iid-compat",[M_]:"fire-fcm",[V_]:"fire-fcm-compat",[F_]:"fire-perf",[U_]:"fire-perf-compat",[j_]:"fire-rc",[B_]:"fire-rc-compat",[G_]:"fire-gcs",[H_]:"fire-gcs-compat",[q_]:"fire-fst",[K_]:"fire-fst-compat",[z_]:"fire-vertex","fire-js":"fire-js",[W_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi=new Map,Y_=new Map,Da=new Map;function vu(s,e){try{s.container.addComponent(e)}catch(t){St.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function cs(s){const e=s.name;if(Da.has(e))return St.debug(`There were multiple attempts to register component ${e}.`),!1;Da.set(e,s);for(const t of qi.values())vu(t,s);for(const t of Y_.values())vu(t,s);return!0}function oc(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function Xe(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Nr("app","Firebase",X_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=$_;function Vd(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:xa,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw Yt.create("bad-app-name",{appName:String(r)});if(t||(t=xd()),!t)throw Yt.create("no-options");const i=qi.get(r);if(i){if(kn(t,i.options)&&kn(n,i.config))return i;throw Yt.create("duplicate-app",{appName:r})}const o=new r_(r);for(const l of Da.values())o.addComponent(l);const c=new J_(t,n,o);return qi.set(r,c),c}function Fd(s=xa){const e=qi.get(s);if(!e&&s===xa&&xd())return Vd();if(!e)throw Yt.create("no-app",{appName:s});return e}function Xt(s,e,t){let n=Q_[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),St.warn(o.join(" "));return}cs(new xn(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firebase-heartbeat-database",ey=1,yr="firebase-heartbeat-store";let ga=null;function Ud(){return ga||(ga=b_(Z_,ey,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(yr)}catch(t){console.warn(t)}}}}).catch(s=>{throw Yt.create("idb-open",{originalErrorMessage:s.message})})),ga}async function ty(s){try{const t=(await Ud()).transaction(yr),n=await t.objectStore(yr).get(jd(s));return await t.done,n}catch(e){if(e instanceof xt)St.warn(e.message);else{const t=Yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});St.warn(t.message)}}}async function Iu(s,e){try{const n=(await Ud()).transaction(yr,"readwrite");await n.objectStore(yr).put(e,jd(s)),await n.done}catch(t){if(t instanceof xt)St.warn(t.message);else{const n=Yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});St.warn(n.message)}}}function jd(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=1024,sy=30;class ry{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oy(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Su();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>sy){const o=ay(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){St.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Su(),{heartbeatsToSend:n,unsentEntries:r}=iy(this._heartbeatsCache.heartbeats),i=Hi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return St.warn(t),""}}}function Su(){return new Date().toISOString().substring(0,10)}function iy(s,e=ny){const t=[];let n=s.slice();for(const r of s){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ru(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Ru(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class oy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kb()?Wb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ty(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Iu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Iu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Ru(s){return Hi(JSON.stringify({version:2,heartbeats:s})).length}function ay(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(s){cs(new xn("platform-logger",e=>new E_(e),"PRIVATE")),cs(new xn("heartbeat",e=>new ry(e),"PRIVATE")),Xt(ka,Au,s),Xt(ka,Au,"esm2020"),Xt("fire-js","")}cy("");var ly="firebase",uy="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(ly,uy,"app");var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,Bd;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,b){function _(){}_.prototype=b.prototype,T.F=b.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(A,w,I){for(var E=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)E[Re-2]=arguments[Re];return b.prototype[w].apply(A,E)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,b,_){_||(_=0);const A=Array(16);if(typeof b=="string")for(var w=0;w<16;++w)A[w]=b.charCodeAt(_++)|b.charCodeAt(_++)<<8|b.charCodeAt(_++)<<16|b.charCodeAt(_++)<<24;else for(w=0;w<16;++w)A[w]=b[_++]|b[_++]<<8|b[_++]<<16|b[_++]<<24;b=T.g[0],_=T.g[1],w=T.g[2];let I=T.g[3],E;E=b+(I^_&(w^I))+A[0]+3614090360&4294967295,b=_+(E<<7&4294967295|E>>>25),E=I+(w^b&(_^w))+A[1]+3905402710&4294967295,I=b+(E<<12&4294967295|E>>>20),E=w+(_^I&(b^_))+A[2]+606105819&4294967295,w=I+(E<<17&4294967295|E>>>15),E=_+(b^w&(I^b))+A[3]+3250441966&4294967295,_=w+(E<<22&4294967295|E>>>10),E=b+(I^_&(w^I))+A[4]+4118548399&4294967295,b=_+(E<<7&4294967295|E>>>25),E=I+(w^b&(_^w))+A[5]+1200080426&4294967295,I=b+(E<<12&4294967295|E>>>20),E=w+(_^I&(b^_))+A[6]+2821735955&4294967295,w=I+(E<<17&4294967295|E>>>15),E=_+(b^w&(I^b))+A[7]+4249261313&4294967295,_=w+(E<<22&4294967295|E>>>10),E=b+(I^_&(w^I))+A[8]+1770035416&4294967295,b=_+(E<<7&4294967295|E>>>25),E=I+(w^b&(_^w))+A[9]+2336552879&4294967295,I=b+(E<<12&4294967295|E>>>20),E=w+(_^I&(b^_))+A[10]+4294925233&4294967295,w=I+(E<<17&4294967295|E>>>15),E=_+(b^w&(I^b))+A[11]+2304563134&4294967295,_=w+(E<<22&4294967295|E>>>10),E=b+(I^_&(w^I))+A[12]+1804603682&4294967295,b=_+(E<<7&4294967295|E>>>25),E=I+(w^b&(_^w))+A[13]+4254626195&4294967295,I=b+(E<<12&4294967295|E>>>20),E=w+(_^I&(b^_))+A[14]+2792965006&4294967295,w=I+(E<<17&4294967295|E>>>15),E=_+(b^w&(I^b))+A[15]+1236535329&4294967295,_=w+(E<<22&4294967295|E>>>10),E=b+(w^I&(_^w))+A[1]+4129170786&4294967295,b=_+(E<<5&4294967295|E>>>27),E=I+(_^w&(b^_))+A[6]+3225465664&4294967295,I=b+(E<<9&4294967295|E>>>23),E=w+(b^_&(I^b))+A[11]+643717713&4294967295,w=I+(E<<14&4294967295|E>>>18),E=_+(I^b&(w^I))+A[0]+3921069994&4294967295,_=w+(E<<20&4294967295|E>>>12),E=b+(w^I&(_^w))+A[5]+3593408605&4294967295,b=_+(E<<5&4294967295|E>>>27),E=I+(_^w&(b^_))+A[10]+38016083&4294967295,I=b+(E<<9&4294967295|E>>>23),E=w+(b^_&(I^b))+A[15]+3634488961&4294967295,w=I+(E<<14&4294967295|E>>>18),E=_+(I^b&(w^I))+A[4]+3889429448&4294967295,_=w+(E<<20&4294967295|E>>>12),E=b+(w^I&(_^w))+A[9]+568446438&4294967295,b=_+(E<<5&4294967295|E>>>27),E=I+(_^w&(b^_))+A[14]+3275163606&4294967295,I=b+(E<<9&4294967295|E>>>23),E=w+(b^_&(I^b))+A[3]+4107603335&4294967295,w=I+(E<<14&4294967295|E>>>18),E=_+(I^b&(w^I))+A[8]+1163531501&4294967295,_=w+(E<<20&4294967295|E>>>12),E=b+(w^I&(_^w))+A[13]+2850285829&4294967295,b=_+(E<<5&4294967295|E>>>27),E=I+(_^w&(b^_))+A[2]+4243563512&4294967295,I=b+(E<<9&4294967295|E>>>23),E=w+(b^_&(I^b))+A[7]+1735328473&4294967295,w=I+(E<<14&4294967295|E>>>18),E=_+(I^b&(w^I))+A[12]+2368359562&4294967295,_=w+(E<<20&4294967295|E>>>12),E=b+(_^w^I)+A[5]+4294588738&4294967295,b=_+(E<<4&4294967295|E>>>28),E=I+(b^_^w)+A[8]+2272392833&4294967295,I=b+(E<<11&4294967295|E>>>21),E=w+(I^b^_)+A[11]+1839030562&4294967295,w=I+(E<<16&4294967295|E>>>16),E=_+(w^I^b)+A[14]+4259657740&4294967295,_=w+(E<<23&4294967295|E>>>9),E=b+(_^w^I)+A[1]+2763975236&4294967295,b=_+(E<<4&4294967295|E>>>28),E=I+(b^_^w)+A[4]+1272893353&4294967295,I=b+(E<<11&4294967295|E>>>21),E=w+(I^b^_)+A[7]+4139469664&4294967295,w=I+(E<<16&4294967295|E>>>16),E=_+(w^I^b)+A[10]+3200236656&4294967295,_=w+(E<<23&4294967295|E>>>9),E=b+(_^w^I)+A[13]+681279174&4294967295,b=_+(E<<4&4294967295|E>>>28),E=I+(b^_^w)+A[0]+3936430074&4294967295,I=b+(E<<11&4294967295|E>>>21),E=w+(I^b^_)+A[3]+3572445317&4294967295,w=I+(E<<16&4294967295|E>>>16),E=_+(w^I^b)+A[6]+76029189&4294967295,_=w+(E<<23&4294967295|E>>>9),E=b+(_^w^I)+A[9]+3654602809&4294967295,b=_+(E<<4&4294967295|E>>>28),E=I+(b^_^w)+A[12]+3873151461&4294967295,I=b+(E<<11&4294967295|E>>>21),E=w+(I^b^_)+A[15]+530742520&4294967295,w=I+(E<<16&4294967295|E>>>16),E=_+(w^I^b)+A[2]+3299628645&4294967295,_=w+(E<<23&4294967295|E>>>9),E=b+(w^(_|~I))+A[0]+4096336452&4294967295,b=_+(E<<6&4294967295|E>>>26),E=I+(_^(b|~w))+A[7]+1126891415&4294967295,I=b+(E<<10&4294967295|E>>>22),E=w+(b^(I|~_))+A[14]+2878612391&4294967295,w=I+(E<<15&4294967295|E>>>17),E=_+(I^(w|~b))+A[5]+4237533241&4294967295,_=w+(E<<21&4294967295|E>>>11),E=b+(w^(_|~I))+A[12]+1700485571&4294967295,b=_+(E<<6&4294967295|E>>>26),E=I+(_^(b|~w))+A[3]+2399980690&4294967295,I=b+(E<<10&4294967295|E>>>22),E=w+(b^(I|~_))+A[10]+4293915773&4294967295,w=I+(E<<15&4294967295|E>>>17),E=_+(I^(w|~b))+A[1]+2240044497&4294967295,_=w+(E<<21&4294967295|E>>>11),E=b+(w^(_|~I))+A[8]+1873313359&4294967295,b=_+(E<<6&4294967295|E>>>26),E=I+(_^(b|~w))+A[15]+4264355552&4294967295,I=b+(E<<10&4294967295|E>>>22),E=w+(b^(I|~_))+A[6]+2734768916&4294967295,w=I+(E<<15&4294967295|E>>>17),E=_+(I^(w|~b))+A[13]+1309151649&4294967295,_=w+(E<<21&4294967295|E>>>11),E=b+(w^(_|~I))+A[4]+4149444226&4294967295,b=_+(E<<6&4294967295|E>>>26),E=I+(_^(b|~w))+A[11]+3174756917&4294967295,I=b+(E<<10&4294967295|E>>>22),E=w+(b^(I|~_))+A[2]+718787259&4294967295,w=I+(E<<15&4294967295|E>>>17),E=_+(I^(w|~b))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+b&4294967295,T.g[1]=T.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+I&4294967295}n.prototype.v=function(T,b){b===void 0&&(b=T.length);const _=b-this.blockSize,A=this.C;let w=this.h,I=0;for(;I<b;){if(w==0)for(;I<=_;)r(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<b;)if(A[w++]=T.charCodeAt(I++),w==this.blockSize){r(this,A),w=0;break}}else for(;I<b;)if(A[w++]=T[I++],w==this.blockSize){r(this,A),w=0;break}}this.h=w,this.o+=b},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var b=1;b<T.length-8;++b)T[b]=0;b=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=b&255,b/=256;for(this.v(T),T=Array(16),b=0,_=0;_<4;++_)for(let A=0;A<32;A+=8)T[b++]=this.g[_]>>>A&255;return T};function i(T,b){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=b(T)}function o(T,b){this.h=b;const _=[];let A=!0;for(let w=T.length-1;w>=0;w--){const I=T[w]|0;A&&I==b||(_[w]=I,A=!1)}this.g=_}var c={};function l(T){return-128<=T&&T<128?i(T,function(b){return new o([b|0],b<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return R(u(-T));const b=[];let _=1;for(let A=0;T>=_;A++)b[A]=T/_|0,_*=4294967296;return new o(b,0)}function d(T,b){if(T.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(T.charAt(0)=="-")return R(d(T.substring(1),b));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=u(Math.pow(b,8));let A=p;for(let I=0;I<T.length;I+=8){var w=Math.min(8,T.length-I);const E=parseInt(T.substring(I,I+w),b);w<8?(w=u(Math.pow(b,w)),A=A.j(w).add(u(E))):(A=A.j(_),A=A.add(u(E)))}return A}var p=l(0),m=l(1),y=l(16777216);s=o.prototype,s.m=function(){if(x(this))return-R(this).m();let T=0,b=1;for(let _=0;_<this.g.length;_++){const A=this.i(_);T+=(A>=0?A:4294967296+A)*b,b*=4294967296}return T},s.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(x(this))return"-"+R(this).toString(T);const b=u(Math.pow(T,6));var _=this;let A="";for(;;){const w=M(_,b).g;_=k(_,w.j(b));let I=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=w,P(_))return I+A;for(;I.length<6;)I="0"+I;A=I+A}},s.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let b=0;b<T.g.length;b++)if(T.g[b]!=0)return!1;return!0}function x(T){return T.h==-1}s.l=function(T){return T=k(this,T),x(T)?-1:P(T)?0:1};function R(T){const b=T.g.length,_=[];for(let A=0;A<b;A++)_[A]=~T.g[A];return new o(_,~T.h).add(m)}s.abs=function(){return x(this)?R(this):this},s.add=function(T){const b=Math.max(this.g.length,T.g.length),_=[];let A=0;for(let w=0;w<=b;w++){let I=A+(this.i(w)&65535)+(T.i(w)&65535),E=(I>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);A=E>>>16,I&=65535,E&=65535,_[w]=E<<16|I}return new o(_,_[_.length-1]&-2147483648?-1:0)};function k(T,b){return T.add(R(b))}s.j=function(T){if(P(this)||P(T))return p;if(x(this))return x(T)?R(this).j(R(T)):R(R(this).j(T));if(x(T))return R(this.j(R(T)));if(this.l(y)<0&&T.l(y)<0)return u(this.m()*T.m());const b=this.g.length+T.g.length,_=[];for(var A=0;A<2*b;A++)_[A]=0;for(A=0;A<this.g.length;A++)for(let w=0;w<T.g.length;w++){const I=this.i(A)>>>16,E=this.i(A)&65535,Re=T.i(w)>>>16,je=T.i(w)&65535;_[2*A+2*w]+=E*je,D(_,2*A+2*w),_[2*A+2*w+1]+=I*je,D(_,2*A+2*w+1),_[2*A+2*w+1]+=E*Re,D(_,2*A+2*w+1),_[2*A+2*w+2]+=I*Re,D(_,2*A+2*w+2)}for(T=0;T<b;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=b;T<2*b;T++)_[T]=0;return new o(_,0)};function D(T,b){for(;(T[b]&65535)!=T[b];)T[b+1]+=T[b]>>>16,T[b]&=65535,b++}function N(T,b){this.g=T,this.h=b}function M(T,b){if(P(b))throw Error("division by zero");if(P(T))return new N(p,p);if(x(T))return b=M(R(T),b),new N(R(b.g),R(b.h));if(x(b))return b=M(T,R(b)),new N(R(b.g),b.h);if(T.g.length>30){if(x(T)||x(b))throw Error("slowDivide_ only works with positive integers.");for(var _=m,A=b;A.l(T)<=0;)_=G(_),A=G(A);var w=q(_,1),I=q(A,1);for(A=q(A,2),_=q(_,2);!P(A);){var E=I.add(A);E.l(T)<=0&&(w=w.add(_),I=E),A=q(A,1),_=q(_,1)}return b=k(T,w.j(b)),new N(w,b)}for(w=p;T.l(b)>=0;){for(_=Math.max(1,Math.floor(T.m()/b.m())),A=Math.ceil(Math.log(_)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),I=u(_),E=I.j(b);x(E)||E.l(T)>0;)_-=A,I=u(_),E=I.j(b);P(I)&&(I=m),w=w.add(I),T=k(T,E)}return new N(w,T)}s.B=function(T){return M(this,T).h},s.and=function(T){const b=Math.max(this.g.length,T.g.length),_=[];for(let A=0;A<b;A++)_[A]=this.i(A)&T.i(A);return new o(_,this.h&T.h)},s.or=function(T){const b=Math.max(this.g.length,T.g.length),_=[];for(let A=0;A<b;A++)_[A]=this.i(A)|T.i(A);return new o(_,this.h|T.h)},s.xor=function(T){const b=Math.max(this.g.length,T.g.length),_=[];for(let A=0;A<b;A++)_[A]=this.i(A)^T.i(A);return new o(_,this.h^T.h)};function G(T){const b=T.g.length+1,_=[];for(let A=0;A<b;A++)_[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(_,T.h)}function q(T,b){const _=b>>5;b%=32;const A=T.g.length-_,w=[];for(let I=0;I<A;I++)w[I]=b>0?T.i(I+_)>>>b|T.i(I+_+1)<<32-b:T.i(I+_);return new o(w,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Bd=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Jt=o}).apply(typeof Pu<"u"?Pu:typeof self<"u"?self:typeof window<"u"?window:{});var bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gd,sr,Hd,Ri,Oa,qd,zd,Kd;(function(){var s,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bi=="object"&&bi];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function r(a,h){if(h)e:{var f=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,f){return a.call.apply(a.bind,arguments)}function u(a,h,f){return u=l,u.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,S,C){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return h.prototype[S].apply(g,V)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function y(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function P(a,h){for(let g=1;g<arguments.length;g++){const S=arguments[g];var f=typeof S;if(f=f!="object"?f:S?Array.isArray(S)?"array":f:"null",f=="array"||f=="object"&&typeof S.length=="number"){f=a.length||0;const C=S.length||0;a.length=f+C;for(let V=0;V<C;V++)a[f+V]=S[V]}else a.push(S)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function R(a){o.setTimeout(()=>{throw a},0)}function k(){var a=T;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class D{constructor(){this.h=this.g=null}add(h,f){const g=N.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var N=new x(()=>new M,a=>a.reset());class M{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let G,q=!1,T=new D,b=()=>{const a=Promise.resolve(void 0);G=()=>{a.then(_)}};function _(){for(var a;a=k();){try{a.h.call(a.g)}catch(f){R(f)}var h=N;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}q=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function Re(a,h){w.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p(Re,w),Re.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Re.Z.h.call(this)},Re.prototype.h=function(){Re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var je="closure_listenable_"+(Math.random()*1e6|0),Rs=0;function Kr(a,h,f,g,S){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=S,this.key=++Rs,this.da=this.fa=!1}function Dt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ot(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function Wr(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function $r(a){const h={};for(const f in a)h[f]=a[f];return h}const Ps="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qr(a,h){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let C=0;C<Ps.length;C++)f=Ps[C],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Un(a){this.src=a,this.g={},this.h=0}Un.prototype.add=function(a,h,f,g,S){const C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);const V=ks(a,h,g,S);return V>-1?(h=a[V],f||(h.fa=!1)):(h=new Kr(h,this.src,C,!!g,S),h.fa=f,a.push(h)),h};function Cs(a,h){const f=h.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,h,void 0),C;(C=S>=0)&&Array.prototype.splice.call(g,S,1),C&&(Dt(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ks(a,h,f,g){for(let S=0;S<a.length;++S){const C=a[S];if(!C.da&&C.listener==h&&C.capture==!!f&&C.ha==g)return S}return-1}var xs="closure_lm_"+(Math.random()*1e6|0),jn={};function Ds(a,h,f,g,S){if(Array.isArray(h)){for(let C=0;C<h.length;C++)Ds(a,h[C],f,g,S);return null}return f=Ms(f),a&&a[je]?a.J(h,f,c(g)?!!g.capture:!1,S):Yr(a,h,f,!1,g,S)}function Yr(a,h,f,g,S,C){if(!h)throw Error("Invalid event type");const V=c(S)?!!S.capture:!!S;let Q=Ns(a);if(Q||(a[xs]=Q=new Un(a)),f=Q.add(h,f,g,V,C),f.proxy)return f;if(g=jo(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)I||(S=V),S===void 0&&(S=!1),a.addEventListener(h.toString(),g,S);else if(a.attachEvent)a.attachEvent(Os(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function jo(){function a(f){return h.call(a.src,a.listener,f)}const h=Jr;return a}function Xr(a,h,f,g,S){if(Array.isArray(h))for(var C=0;C<h.length;C++)Xr(a,h[C],f,g,S);else g=c(g)?!!g.capture:!!g,f=Ms(f),a&&a[je]?(a=a.i,C=String(h).toString(),C in a.g&&(h=a.g[C],f=ks(h,f,g,S),f>-1&&(Dt(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[C],a.h--)))):a&&(a=Ns(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ks(h,f,g,S)),(f=a>-1?h[a]:null)&&Bn(f))}function Bn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[je])Cs(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Os(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Ns(h))?(Cs(f,a),f.h==0&&(f.src=null,h[xs]=null)):Dt(a)}}}function Os(a){return a in jn?jn[a]:jn[a]="on"+a}function Jr(a,h){if(a.da)a=!0;else{h=new Re(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&Bn(a),a=f.call(g,h)}return a}function Ns(a){return a=a[xs],a instanceof Un?a:null}var Ls="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ms(a){return typeof a=="function"?a:(a[Ls]||(a[Ls]=function(h){return a.handleEvent(h)}),a[Ls])}function ge(){A.call(this),this.i=new Un(this),this.M=this,this.G=null}p(ge,A),ge.prototype[je]=!0,ge.prototype.removeEventListener=function(a,h,f,g){Xr(this,a,h,f,g)};function pe(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new w(h,a);else if(h instanceof w)h.target=h.target||a;else{var S=h;h=new w(g,a),Qr(h,S)}S=!0;let C,V;if(f)for(V=f.length-1;V>=0;V--)C=h.g=f[V],S=Gn(C,g,!0,h)&&S;if(C=h.g=a,S=Gn(C,g,!0,h)&&S,S=Gn(C,g,!1,h)&&S,f)for(V=0;V<f.length;V++)C=h.g=f[V],S=Gn(C,g,!1,h)&&S}ge.prototype.N=function(){if(ge.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)Dt(f[g]);delete a.g[h],a.h--}}this.G=null},ge.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ge.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Gn(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let S=!0;for(let C=0;C<h.length;++C){const V=h[C];if(V&&!V.da&&V.capture==f){const Q=V.listener,we=V.ha||V.src;V.fa&&Cs(a.i,V),S=Q.call(we,g)!==!1&&S}}return S&&!g.defaultPrevented}function Bo(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function Vs(a){a.g=Bo(()=>{a.g=null,a.i&&(a.i=!1,Vs(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Fs extends A{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Vs(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pn(a){A.call(this),this.h=a,this.g={}}p(pn,A);var Zr=[];function Us(a){Ot(a.g,function(h,f){this.g.hasOwnProperty(f)&&Bn(h)},a),a.g={}}pn.prototype.N=function(){pn.Z.N.call(this),Us(this)},pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var js=o.JSON.stringify,Go=o.JSON.parse,ei=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function gt(){}function v(){}var j={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ne(){w.call(this,"d")}p(ne,w);function se(){w.call(this,"c")}p(se,w);var ue={},Qe=null;function Pe(){return Qe=Qe||new ge}ue.Ia="serverreachability";function Ho(a){w.call(this,ue.Ia,a)}p(Ho,w);function mn(a){const h=Pe();pe(h,new Ho(h))}ue.STAT_EVENT="statevent";function Bs(a,h){w.call(this,ue.STAT_EVENT,a),this.stat=h}p(Bs,w);function ae(a){const h=Pe();pe(h,new Bs(h,a))}ue.Ja="timingevent";function We(a,h){w.call(this,ue.Ja,a),this.size=h}p(We,w);function bt(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Ye(){this.g=!0}Ye.prototype.ua=function(){this.g=!1};function gn(a,h,f,g,S,C){a.info(function(){if(a.g)if(C){var V="",Q=C.split("&");for(let oe=0;oe<Q.length;oe++){var we=Q[oe].split("=");if(we.length>1){const ve=we[0];we=we[1];const nt=ve.split("_");V=nt.length>=2&&nt[1]=="type"?V+(ve+"="+we+"&"):V+(ve+"=redacted&")}}}else V=null;else V=C;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+h+`
`+f+`
`+V})}function Hn(a,h,f,g,S,C,V){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+h+`
`+f+`
`+C+" "+V})}function qn(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+lm(a,f)+(g?" "+g:"")})}function cm(a,h){a.info(function(){return"TIMEOUT: "+h})}Ye.prototype.info=function(){};function lm(a,h){if(!a.g)return h;if(!h)return null;try{const C=JSON.parse(h);if(C){for(a=0;a<C.length;a++)if(Array.isArray(C[a])){var f=C[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var S=g[0];if(S!="noop"&&S!="stop"&&S!="close")for(let V=1;V<g.length;V++)g[V]=""}}}}return js(C)}catch{return h}}var ti={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},il={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ol;function qo(){}p(qo,gt),qo.prototype.g=function(){return new XMLHttpRequest},ol=new qo;function Gs(a){return encodeURIComponent(String(a))}function um(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function Nt(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new pn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new al}function al(){this.i=null,this.g="",this.h=!1}var cl={},zo={};function Ko(a,h,f){a.M=1,a.A=si(tt(h)),a.u=f,a.R=!0,ll(a,null)}function ll(a,h){a.F=Date.now(),ni(a),a.B=tt(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),wl(f.i,"t",g),a.C=0,f=a.j.L,a.h=new al,a.g=jl(a.j,f?h:null,!a.u),a.P>0&&(a.O=new Fs(u(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(Zr[0]=S.toString()),S=Zr);for(let C=0;C<S.length;C++){const V=Ds(f,S[C],g||h.handleEvent,!1,h.h||h);if(!V)break;h.g[V.key]=V}h=a.J?$r(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),mn(),gn(a.i,a.v,a.B,a.l,a.S,a.u)}Nt.prototype.ba=function(a){a=a.target;const h=this.O;h&&Vt(a)==3?h.j():this.Y(a)},Nt.prototype.Y=function(a){try{if(a==this.g)e:{const Q=Vt(this.g),we=this.g.ya(),oe=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||Cl(this.g)))){this.K||Q!=4||we==7||(we==8||oe<=0?mn(3):mn(2)),Wo(this);var h=this.g.ca();this.X=h;var f=hm(this);if(this.o=h==200,Hn(this.i,this.v,this.B,this.l,this.S,Q,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,S=this.g;if((g=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var C=g;break t}}C=null}if(a=C)qn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$o(this,a);else{this.o=!1,this.m=3,ae(12),bn(this),Hs(this);break e}}if(this.R){a=!0;let ve;for(;!this.K&&this.C<f.length;)if(ve=dm(this,f),ve==zo){Q==4&&(this.m=4,ae(14),a=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(ve==cl){this.m=4,ae(15),qn(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else qn(this.i,this.l,ve,null),$o(this,ve);if(ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||f.length!=0||this.h.h||(this.m=1,ae(16),a=!1),this.o=this.o&&a,!a)qn(this.i,this.l,f,"[Invalid Chunked Response]"),bn(this),Hs(this);else if(f.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),na(V),V.P=!0,ae(11))}}else qn(this.i,this.l,f,null),$o(this,f);Q==4&&bn(this),this.o&&!this.K&&(Q==4?Ml(this.j,this):(this.o=!1,ni(this)))}else Sm(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ae(12)):(this.m=0,ae(13)),bn(this),Hs(this)}}}catch{}finally{}};function hm(a){if(!ul(a))return a.g.la();const h=Cl(a.g);if(h==="")return"";let f="";const g=h.length,S=Vt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return bn(a),Hs(a),"";a.h.i=new o.TextDecoder}for(let C=0;C<g;C++)a.h.h=!0,f+=a.h.i.decode(h[C],{stream:!(S&&C==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function ul(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function dm(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?zo:(f=Number(h.substring(f,g)),isNaN(f)?cl:(g+=1,g+f>h.length?zo:(h=h.slice(g,g+f),a.C=g+f,h)))}Nt.prototype.cancel=function(){this.K=!0,bn(this)};function ni(a){a.T=Date.now()+a.H,hl(a,a.H)}function hl(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=bt(u(a.aa,a),h)}function Wo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Nt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(cm(this.i,this.B),this.M!=2&&(mn(),ae(17)),bn(this),this.m=2,Hs(this)):hl(this,this.T-a)};function Hs(a){a.j.I==0||a.K||Ml(a.j,a)}function bn(a){Wo(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Us(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function $o(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Qo(f.h,a))){if(!a.L&&Qo(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)ci(f),oi(f);else break e;ta(f),ae(18)}}else f.xa=S[1],0<f.xa-f.K&&S[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=bt(u(f.Va,f),6e3));pl(f.h)<=1&&f.ta&&(f.ta=void 0)}else yn(f,11)}else if((a.L||f.g==a)&&ci(f),!E(h))for(S=f.Ba.g.parse(h),h=0;h<S.length;h++){let oe=S[h];const ve=oe[0];if(!(ve<=f.K))if(f.K=ve,oe=oe[1],f.I==2)if(oe[0]=="c"){f.M=oe[1],f.ba=oe[2];const nt=oe[3];nt!=null&&(f.ka=nt,f.j.info("VER="+f.ka));const En=oe[4];En!=null&&(f.za=En,f.j.info("SVER="+f.za));const Ft=oe[5];Ft!=null&&typeof Ft=="number"&&Ft>0&&(g=1.5*Ft,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ut=a.g;if(Ut){const ui=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ui){var C=g.h;C.g||ui.indexOf("spdy")==-1&&ui.indexOf("quic")==-1&&ui.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Yo(C,C.h),C.h=null))}if(g.G){const sa=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;sa&&(g.wa=sa,ce(g.J,g.G,sa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var V=a;if(g.na=Ul(g,g.L?g.ba:null,g.W),V.L){ml(g.h,V);var Q=V,we=g.O;we&&(Q.H=we),Q.D&&(Wo(Q),ni(Q)),g.g=V}else Nl(g);f.i.length>0&&ai(f)}else oe[0]!="stop"&&oe[0]!="close"||yn(f,7);else f.I==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?yn(f,7):ea(f):oe[0]!="noop"&&f.l&&f.l.qa(oe),f.A=0)}}mn(4)}catch{}}var fm=class{constructor(a,h){this.g=a,this.map=h}};function dl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pl(a){return a.h?1:a.g?a.g.size:0}function Qo(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Yo(a,h){a.g?a.g.add(h):a.h=h}function ml(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}dl.prototype.cancel=function(){if(this.i=gl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return y(a.i)}var bl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pm(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let S,C=null;g>=0?(S=a[f].substring(0,g),C=a[f].substring(g+1)):S=a[f],h(S,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Lt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Lt?(this.l=a.l,qs(this,a.j),this.o=a.o,this.g=a.g,zs(this,a.u),this.h=a.h,Xo(this,Al(a.i)),this.m=a.m):a&&(h=String(a).match(bl))?(this.l=!1,qs(this,h[1]||"",!0),this.o=Ks(h[2]||""),this.g=Ks(h[3]||"",!0),zs(this,h[4]),this.h=Ks(h[5]||"",!0),Xo(this,h[6]||"",!0),this.m=Ks(h[7]||"")):(this.l=!1,this.i=new $s(null,this.l))}Lt.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(Ws(h,_l,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ws(h,_l,!0),"@"),a.push(Gs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ws(f,f.charAt(0)=="/"?bm:gm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ws(f,ym)),a.join("")},Lt.prototype.resolve=function(a){const h=tt(this);let f=!!a.j;f?qs(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)zs(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var S=h.h.lastIndexOf("/");S!=-1&&(g=h.h.slice(0,S+1)+g)}if(S=g,S==".."||S==".")g="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){g=S.lastIndexOf("/",0)==0,S=S.split("/");const C=[];for(let V=0;V<S.length;){const Q=S[V++];Q=="."?g&&V==S.length&&C.push(""):Q==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&V==S.length&&C.push("")):(C.push(Q),g=!0)}g=C.join("/")}else g=S}return f?h.h=g:f=a.i.toString()!=="",f?Xo(h,Al(a.i)):f=!!a.m,f&&(h.m=a.m),h};function tt(a){return new Lt(a)}function qs(a,h,f){a.j=f?Ks(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function zs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Xo(a,h,f){h instanceof $s?(a.i=h,Em(a.i,a.l)):(f||(h=Ws(h,_m)),a.i=new $s(h,a.l))}function ce(a,h,f){a.i.set(h,f)}function si(a){return ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ks(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ws(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,mm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function mm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _l=/[#\/\?@]/g,gm=/[#\?:]/g,bm=/[#\?]/g,_m=/[#\?@]/g,ym=/#/g;function $s(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function _n(a){a.g||(a.g=new Map,a.h=0,a.i&&pm(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}s=$s.prototype,s.add=function(a,h){_n(this),this.i=null,a=zn(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function yl(a,h){_n(a),h=zn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function El(a,h){return _n(a),h=zn(a,h),a.g.has(h)}s.forEach=function(a,h){_n(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(h,S,g,this)},this)},this)};function Tl(a,h){_n(a);let f=[];if(typeof h=="string")El(a,h)&&(f=f.concat(a.g.get(zn(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}s.set=function(a,h){return _n(this),this.i=null,a=zn(this,a),El(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},s.get=function(a,h){return a?(a=Tl(this,a),a.length>0?String(a[0]):h):h};function wl(a,h,f){yl(a,h),f.length>0&&(a.i=null,a.g.set(zn(a,h),y(f)),a.h+=f.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const S=Gs(f);f=Tl(this,f);for(let C=0;C<f.length;C++){let V=S;f[C]!==""&&(V+="="+Gs(f[C])),a.push(V)}}return this.i=a.join("&")};function Al(a){const h=new $s;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function zn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Em(a,h){h&&!a.j&&(_n(a),a.i=null,a.g.forEach(function(f,g){const S=g.toLowerCase();g!=S&&(yl(this,g),wl(this,S,f))},a)),a.j=h}function Tm(a,h){const f=new Ye;if(o.Image){const g=new Image;g.onload=d(Mt,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Mt,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Mt,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Mt,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function wm(a,h){const f=new Ye,g=new AbortController,S=setTimeout(()=>{g.abort(),Mt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(C=>{clearTimeout(S),C.ok?Mt(f,"TestPingServer: ok",!0,h):Mt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Mt(f,"TestPingServer: error",!1,h)})}function Mt(a,h,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function Am(){this.g=new ei}function Jo(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Jo,gt),Jo.prototype.g=function(){return new ri(this.i,this.h)};function ri(a,h){ge.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(ri,ge),s=ri.prototype,s.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Ys(this)},s.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},s.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ys(this)),this.g&&(this.readyState=3,Ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function vl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}s.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Qs(this):Ys(this),this.readyState==3&&vl(this)}},s.Oa=function(a){this.g&&(this.response=this.responseText=a,Qs(this))},s.Na=function(a){this.g&&(this.response=a,Qs(this))},s.ga=function(){this.g&&Qs(this)};function Qs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ys(a)}s.setRequestHeader=function(a,h){this.A.append(a,h)},s.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Il(a){let h="";return Ot(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Zo(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Il(f),typeof a=="string"?f!=null&&Gs(f):ce(a,h,f))}function de(a){ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(de,ge);var vm=/^https?$/i,Im=["POST","PUT"];s=de.prototype,s.Fa=function(a){this.H=a},s.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ol.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(C){Sl(this,C);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Im,h,void 0)>=0)||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,V]of f)this.g.setRequestHeader(C,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(C){Sl(this,C)}};function Sl(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,Rl(a),ii(a)}function Rl(a){a.A||(a.A=!0,pe(a,"complete"),pe(a,"error"))}s.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,pe(this,"complete"),pe(this,"abort"),ii(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),de.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Pl(this):this.Xa())},s.Xa=function(){Pl(this)};function Pl(a){if(a.h&&typeof i<"u"){if(a.v&&Vt(a)==4)setTimeout(a.Ca.bind(a),0);else if(pe(a,"readystatechange"),Vt(a)==4){a.h=!1;try{const C=a.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=C===0){let V=String(a.D).match(bl)[1]||null;!V&&o.self&&o.self.location&&(V=o.self.location.protocol.slice(0,-1)),g=!vm.test(V?V.toLowerCase():"")}f=g}if(f)pe(a,"complete"),pe(a,"success");else{a.o=6;try{var S=Vt(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",Rl(a)}}finally{ii(a)}}}}function ii(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||pe(a,"ready");try{f.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Vt(a){return a.g?a.g.readyState:0}s.ca=function(){try{return Vt(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Go(h)}};function Cl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Sm(a){const h={};a=(a.g&&Vt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(E(a[g]))continue;var f=um(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=h[S]||[];h[S]=C,C.push(f)}Wr(h,function(g){return g.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xs(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function kl(a){this.za=0,this.i=[],this.j=new Ye,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xs("baseRetryDelayMs",5e3,a),this.Za=Xs("retryDelaySeedMs",1e4,a),this.Ta=Xs("forwardChannelMaxRetries",2,a),this.va=Xs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new dl(a&&a.concurrentRequestLimit),this.Ba=new Am,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=kl.prototype,s.ka=8,s.I=1,s.connect=function(a,h,f,g){ae(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Ul(this,null,this.W),ai(this)};function ea(a){if(xl(a),a.I==3){var h=a.V++,f=tt(a.J);if(ce(f,"SID",a.M),ce(f,"RID",h),ce(f,"TYPE","terminate"),Js(a,f),h=new Nt(a,a.j,h),h.M=2,h.A=si(tt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=jl(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ni(h)}Fl(a)}function oi(a){a.g&&(na(a),a.g.cancel(),a.g=null)}function xl(a){oi(a),a.v&&(o.clearTimeout(a.v),a.v=null),ci(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ai(a){if(!fl(a.h)&&!a.m){a.m=!0;var h=a.Ea;G||b(),q||(G(),q=!0),T.add(h,a),a.D=0}}function Rm(a,h){return pl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=bt(u(a.Ea,a,h),Vl(a,a.D)),a.D++,!0)}s.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new Nt(this,this.j,a);let C=this.o;if(this.U&&(C?(C=$r(C),Qr(C,this.U)):C=this.U),this.u!==null||this.R||(S.J=C,C=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ol(this,S,h),f=tt(this.J),ce(f,"RID",a),ce(f,"CVER",22),this.G&&ce(f,"X-HTTP-Session-Id",this.G),Js(this,f),C&&(this.R?h="headers="+Gs(Il(C))+"&"+h:this.u&&Zo(f,this.u,C)),Yo(this.h,S),this.Ra&&ce(f,"TYPE","init"),this.S?(ce(f,"$req",h),ce(f,"SID","null"),S.U=!0,Ko(S,f,null)):Ko(S,f,h),this.I=2}}else this.I==3&&(a?Dl(this,a):this.i.length==0||fl(this.h)||Dl(this))};function Dl(a,h){var f;h?f=h.l:f=a.V++;const g=tt(a.J);ce(g,"SID",a.M),ce(g,"RID",f),ce(g,"AID",a.K),Js(a,g),a.u&&a.o&&Zo(g,a.u,a.o),f=new Nt(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Ol(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Yo(a.h,f),Ko(f,g,h)}function Js(a,h){a.H&&Ot(a.H,function(f,g){ce(h,g,f)}),a.l&&Ot({},function(f,g){ce(h,g,f)})}function Ol(a,h,f){f=Math.min(a.i.length,f);const g=a.l?u(a.l.Ka,a.l,a):null;e:{var S=a.i;let Q=-1;for(;;){const we=["count="+f];Q==-1?f>0?(Q=S[0].g,we.push("ofs="+Q)):Q=0:we.push("ofs="+Q);let oe=!0;for(let ve=0;ve<f;ve++){var C=S[ve].g;const nt=S[ve].map;if(C-=Q,C<0)Q=Math.max(0,S[ve].g-100),oe=!1;else try{C="req"+C+"_"||"";try{var V=nt instanceof Map?nt:Object.entries(nt);for(const[En,Ft]of V){let Ut=Ft;c(Ft)&&(Ut=js(Ft)),we.push(C+En+"="+encodeURIComponent(Ut))}}catch(En){throw we.push(C+"type="+encodeURIComponent("_badmap")),En}}catch{g&&g(nt)}}if(oe){V=we.join("&");break e}}V=void 0}return a=a.i.splice(0,f),h.G=a,V}function Nl(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;G||b(),q||(G(),q=!0),T.add(h,a),a.A=0}}function ta(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=bt(u(a.Da,a),Vl(a,a.A)),a.A++,!0)}s.Da=function(){if(this.v=null,Ll(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=bt(u(this.Wa,this),a)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ae(10),oi(this),Ll(this))};function na(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ll(a){a.g=new Nt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=tt(a.na);ce(h,"RID","rpc"),ce(h,"SID",a.M),ce(h,"AID",a.K),ce(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ce(h,"TO",a.ia),ce(h,"TYPE","xmlhttp"),Js(a,h),a.u&&a.o&&Zo(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=si(tt(h)),f.u=null,f.R=!0,ll(f,a)}s.Va=function(){this.C!=null&&(this.C=null,oi(this),ta(this),ae(19))};function ci(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ml(a,h){var f=null;if(a.g==h){ci(a),na(a),a.g=null;var g=2}else if(Qo(a.h,h))f=h.G,ml(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var S=a.D;g=Pe(),pe(g,new We(g,f)),ai(a)}else Nl(a);else if(S=h.m,S==3||S==0&&h.X>0||!(g==1&&Rm(a,h)||g==2&&ta(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),S){case 1:yn(a,5);break;case 4:yn(a,10);break;case 3:yn(a,6);break;default:yn(a,2)}}}function Vl(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function yn(a,h){if(a.j.info("Error code "+h),h==2){var f=u(a.bb,a),g=a.Ua;const S=!g;g=new Lt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||qs(g,"https"),si(g),S?Tm(g.toString(),f):wm(g.toString(),f)}else ae(2);a.I=0,a.l&&a.l.pa(h),Fl(a),xl(a)}s.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ae(2)):(this.j.info("Failed to ping google.com"),ae(1))};function Fl(a){if(a.I=0,a.ja=[],a.l){const h=gl(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ja,h),P(a.ja,a.i),a.h.i.length=0,y(a.i),a.i.length=0),a.l.oa()}}function Ul(a,h,f){var g=f instanceof Lt?tt(f):new Lt(f);if(g.g!="")h&&(g.g=h+"."+g.g),zs(g,g.u);else{var S=o.location;g=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;const C=new Lt(null);g&&qs(C,g),h&&(C.g=h),S&&zs(C,S),f&&(C.h=f),g=C}return f=a.G,h=a.wa,f&&h&&ce(g,f,h),ce(g,"VER",a.ka),Js(a,g),g}function jl(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new de(new Jo({ab:f})):new de(a.ma),h.Fa(a.L),h}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bl(){}s=Bl.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function li(){}li.prototype.g=function(a,h){return new He(a,h)};function He(a,h){ge.call(this),this.g=new kl(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Kn(this)}p(He,ge),He.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){ea(this.g)},He.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=js(a),a=f);h.i.push(new fm(h.Ya++,a)),h.I==3&&ai(h)},He.prototype.N=function(){this.g.l=null,delete this.j,ea(this.g),delete this.g,He.Z.N.call(this)};function Gl(a){ne.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(Gl,ne);function Hl(){se.call(this),this.status=1}p(Hl,se);function Kn(a){this.g=a}p(Kn,Bl),Kn.prototype.ra=function(){pe(this.g,"a")},Kn.prototype.qa=function(a){pe(this.g,new Gl(a))},Kn.prototype.pa=function(a){pe(this.g,new Hl)},Kn.prototype.oa=function(){pe(this.g,"b")},li.prototype.createWebChannel=li.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,Kd=function(){return new li},zd=function(){return Pe()},qd=ue,Oa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ti.NO_ERROR=0,ti.TIMEOUT=8,ti.HTTP_ERROR=6,Ri=ti,il.COMPLETE="complete",Hd=il,v.EventType=j,j.OPEN="a",j.CLOSE="b",j.ERROR="c",j.MESSAGE="d",ge.prototype.listen=ge.prototype.J,sr=v,de.prototype.listenOnce=de.prototype.K,de.prototype.getLastError=de.prototype.Ha,de.prototype.getLastErrorCode=de.prototype.ya,de.prototype.getStatus=de.prototype.ca,de.prototype.getResponseJson=de.prototype.La,de.prototype.getResponseText=de.prototype.la,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Fa,Gd=de}).apply(typeof bi<"u"?bi:typeof self<"u"?self:typeof window<"u"?window:{});const Cu="@firebase/firestore",ku="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new rc("@firebase/firestore");function Yn(){return Dn.logLevel}function U(s,...e){if(Dn.logLevel<=Y.DEBUG){const t=e.map(ac);Dn.debug(`Firestore (${ys}): ${s}`,...t)}}function Rt(s,...e){if(Dn.logLevel<=Y.ERROR){const t=e.map(ac);Dn.error(`Firestore (${ys}): ${s}`,...t)}}function ls(s,...e){if(Dn.logLevel<=Y.WARN){const t=e.map(ac);Dn.warn(`Firestore (${ys}): ${s}`,...t)}}function ac(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Wd(s,n,t)}function Wd(s,e,t){let n=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Rt(n),new Error(n)}function te(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||Wd(e,r,n)}function $(s,e){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Me.UNAUTHENTICATED))}shutdown(){}}class dy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class fy{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let n=this.i;const r=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new At;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new At,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},c=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new At)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(te(typeof n.accessToken=="string",31837,{l:n}),new $d(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new Me(e)}}class py{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class my{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new py(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const n=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new xu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=by(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function J(s,e){return s<e?-1:s>e?1:0}function Na(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return ba(r)===ba(i)?J(r,i):ba(r)?1:-1}return J(s.length,e.length)}const _y=55296,yy=57343;function ba(s){const e=s.charCodeAt(0);return e>=_y&&e<=yy}function us(s,e,t){return s.length===e.length&&s.every((n,r)=>t(n,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="__name__";class it{constructor(e,t,n){t===void 0?t=0:t>e.length&&H(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&H(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return it.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof it?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=it.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return J(e.length,t.length)}static compareSegments(e,t){const n=it.isNumericId(e),r=it.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?it.extractNumericId(e).compare(it.extractNumericId(t)):Na(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jt.fromString(e.substring(4,e.length-2))}}class ie extends it{construct(e,t,n){return new ie(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(r=>r.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const Ey=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends it{construct(e,t,n){return new Oe(e,t,n)}static isValidIdentifier(e){return Ey.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Du}static keyField(){return new Oe([Du])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new F(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,r+=2}else c==="`"?(o=!o,r++):c!=="."||o?(n+=c,r++):(i(),r++)}if(i(),o)throw new F(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ie.fromString(e))}static fromName(e){return new B(ie.fromString(e).popFirst(5))}static empty(){return new B(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(s,e,t){if(!t)throw new F(O.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function Ty(s,e,t,n){if(e===!0&&n===!0)throw new F(O.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Ou(s){if(!B.isDocumentKey(s))throw new F(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function Nu(s){if(B.isDocumentKey(s))throw new F(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function Yd(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function mo(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":H(12329,{type:typeof s})}function at(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new F(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mo(s);throw new F(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(s,e){const t={typeString:s};return e&&(t.value=e),t}function Mr(s,e){if(!Yd(s))throw new F(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const o=s[n];if(r&&typeof o!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new F(O.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=-62135596800,Mu=1e6;class le{static now(){return le.fromMillis(Date.now())}static fromDate(e){return le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Mu);return new le(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Lu)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mu}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:le._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Mr(e,le._jsonSchema))return new le(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Lu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}le._jsonSchemaVersion="firestore/timestamp/1.0",le._jsonSchema={type:Ee("string",le._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new le(0,0))}static max(){return new z(new le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=-1;function wy(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=z.fromTimestamp(n===1e9?new le(t+1,0):new le(t,n));return new nn(r,B.empty(),e)}function Ay(s){return new nn(s.readTime,s.key,Er)}class nn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new nn(z.min(),B.empty(),Er)}static max(){return new nn(z.max(),B.empty(),Er)}}function vy(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(s.documentKey,e.documentKey),t!==0?t:J(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(s){if(s.code!==O.FAILED_PRECONDITION||s.message!==Iy)throw s;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,n)=>{t(e)})}static reject(e){return new L((t,n)=>{n(e)})}static waitFor(e){return new L((t,n)=>{let r=0,i=0,o=!1;e.forEach(c=>{++r,c.next(()=>{++i,o&&i===r&&t()},l=>n(l))}),o=!0,i===r&&t()})}static or(e){let t=L.resolve(!1);for(const n of e)t=t.next(r=>r?L.resolve(r):n());return t}static forEach(e,t){const n=[];return e.forEach((r,i)=>{n.push(t.call(this,r,i))}),this.waitFor(n)}static mapArray(e,t){return new L((n,r)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(d=>{o[u]=d,++c,c===i&&n(o)},d=>r(d))}})}static doWhile(e,t){return new L((n,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):n()};i()})}}function Ry(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ts(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}go.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=-1;function Vr(s){return s==null}function zi(s){return s===0&&1/s==-1/0}function Py(s){return typeof s=="number"&&Number.isInteger(s)&&!zi(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="";function Cy(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=Vu(e)),e=ky(s.get(t),e);return Vu(e)}function ky(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case Xd:t+="";break;default:t+=i}}return t}function Vu(s){return s+Xd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function un(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function Jd(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.comparator=e,this.root=t||De.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _i(this.root,e,this.comparator,!1)}getReverseIterator(){return new _i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _i(this.root,e,this.comparator,!0)}}class _i{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??De.RED,this.left=r??De.EMPTY,this.right=i??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new De(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return De.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new De(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Uu(this.data.getIterator())}getIteratorFrom(e){return new Uu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Uu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new ze([])}unionWith(e){let t=new Ae(Oe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Zd("Invalid base64 string: "+i):i}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const xy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sn(s){if(te(!!s,39018),typeof s=="string"){let e=0;const t=xy.exec(s);if(te(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:me(s.seconds),nanos:me(s.nanos)}}function me(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function rn(s){return typeof s=="string"?Ne.fromBase64String(s):Ne.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="server_timestamp",tf="__type__",nf="__previous_value__",sf="__local_write_time__";function uc(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[tf])==null?void 0:n.stringValue)===ef}function bo(s){const e=s.mapValue.fields[nf];return uc(e)?bo(e):e}function Tr(s){const e=sn(s.mapValue.fields[sf].timestampValue);return new le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t,n,r,i,o,c,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d}}const Ki="(default)";class wr{constructor(e,t){this.projectId=e,this.database=t||Ki}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database===Ki}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="__type__",Oy="__max__",yi={mapValue:{}},of="__vector__",Wi="value";function on(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?uc(s)?4:Ly(s)?9007199254740991:Ny(s)?10:11:H(28295,{value:s})}function mt(s,e){if(s===e)return!0;const t=on(s);if(t!==on(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return Tr(s).isEqual(Tr(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=sn(r.timestampValue),c=sn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(s,e);case 5:return s.stringValue===e.stringValue;case 6:return function(r,i){return rn(r.bytesValue).isEqual(rn(i.bytesValue))}(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return function(r,i){return me(r.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(s,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return me(r.integerValue)===me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=me(r.doubleValue),c=me(i.doubleValue);return o===c?zi(o)===zi(c):isNaN(o)&&isNaN(c)}return!1}(s,e);case 9:return us(s.arrayValue.values||[],e.arrayValue.values||[],mt);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Fu(o)!==Fu(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!mt(o[l],c[l])))return!1;return!0}(s,e);default:return H(52216,{left:s})}}function Ar(s,e){return(s.values||[]).find(t=>mt(t,e))!==void 0}function hs(s,e){if(s===e)return 0;const t=on(s),n=on(e);if(t!==n)return J(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(s.booleanValue,e.booleanValue);case 2:return function(i,o){const c=me(i.integerValue||i.doubleValue),l=me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(s,e);case 3:return ju(s.timestampValue,e.timestampValue);case 4:return ju(Tr(s),Tr(e));case 5:return Na(s.stringValue,e.stringValue);case 6:return function(i,o){const c=rn(i),l=rn(o);return c.compareTo(l)}(s.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=J(c[u],l[u]);if(d!==0)return d}return J(c.length,l.length)}(s.referenceValue,e.referenceValue);case 8:return function(i,o){const c=J(me(i.latitude),me(o.latitude));return c!==0?c:J(me(i.longitude),me(o.longitude))}(s.geoPointValue,e.geoPointValue);case 9:return Bu(s.arrayValue,e.arrayValue);case 10:return function(i,o){var m,y,P,x;const c=i.fields||{},l=o.fields||{},u=(m=c[Wi])==null?void 0:m.arrayValue,d=(y=l[Wi])==null?void 0:y.arrayValue,p=J(((P=u==null?void 0:u.values)==null?void 0:P.length)||0,((x=d==null?void 0:d.values)==null?void 0:x.length)||0);return p!==0?p:Bu(u,d)}(s.mapValue,e.mapValue);case 11:return function(i,o){if(i===yi.mapValue&&o===yi.mapValue)return 0;if(i===yi.mapValue)return 1;if(o===yi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=Na(l[p],d[p]);if(m!==0)return m;const y=hs(c[l[p]],u[d[p]]);if(y!==0)return y}return J(l.length,d.length)}(s.mapValue,e.mapValue);default:throw H(23264,{he:t})}}function ju(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return J(s,e);const t=sn(s),n=sn(e),r=J(t.seconds,n.seconds);return r!==0?r:J(t.nanos,n.nanos)}function Bu(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=hs(t[r],n[r]);if(i)return i}return J(t.length,n.length)}function ds(s){return La(s)}function La(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(t){const n=sn(t);return`time(${n.seconds},${n.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(t){return rn(t).toBase64()}(s.bytesValue):"referenceValue"in s?function(t){return B.fromName(t).toString()}(s.referenceValue):"geoPointValue"in s?function(t){return`geo(${t.latitude},${t.longitude})`}(s.geoPointValue):"arrayValue"in s?function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=La(i);return n+"]"}(s.arrayValue):"mapValue"in s?function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${La(t.fields[o])}`;return r+"}"}(s.mapValue):H(61005,{value:s})}function Pi(s){switch(on(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bo(s);return e?16+Pi(e):16;case 5:return 2*s.stringValue.length;case 6:return rn(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,i)=>r+Pi(i),0)}(s.arrayValue);case 10:case 11:return function(n){let r=0;return un(n.fields,(i,o)=>{r+=i.length+Pi(o)}),r}(s.mapValue);default:throw H(13486,{value:s})}}function Gu(s,e){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`}}function Ma(s){return!!s&&"integerValue"in s}function hc(s){return!!s&&"arrayValue"in s}function Hu(s){return!!s&&"nullValue"in s}function qu(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Ci(s){return!!s&&"mapValue"in s}function Ny(s){var t,n;return((n=(((t=s==null?void 0:s.mapValue)==null?void 0:t.fields)||{})[rf])==null?void 0:n.stringValue)===of}function ur(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return un(s.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ur(n)),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ur(s.arrayValue.values[t]);return e}return{...s}}function Ly(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===Oy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.value=e}static empty(){return new Fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ci(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ur(t)}setAll(e){let t=Oe.emptyPath(),n={},r=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,r),n={},r=[],t=c.popLast()}o?n[c.lastSegment()]=ur(o):r.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ci(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ci(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){un(t,(r,i)=>e[r]=i);for(const r of n)delete e[r]}clone(){return new Fe(ur(this.value))}}function af(s){const e=[];return un(s.fields,(t,n)=>{const r=new Oe([t]);if(Ci(n)){const i=af(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,t,n,r,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Se(e,0,z.min(),z.min(),z.min(),Fe.empty(),0)}static newFoundDocument(e,t,n,r){return new Se(e,1,t,z.min(),n,r,0)}static newNoDocument(e,t){return new Se(e,2,t,z.min(),z.min(),Fe.empty(),0)}static newUnknownDocument(e,t){return new Se(e,3,t,z.min(),z.min(),Fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Se&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Se(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t){this.position=e,this.inclusive=t}}function zu(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=B.comparator(B.fromName(o.referenceValue),t.key):n=hs(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Ku(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!mt(s.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function My(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{}class ye extends cf{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Fy(e,t,n):t==="array-contains"?new By(e,n):t==="in"?new Gy(e,n):t==="not-in"?new Hy(e,n):t==="array-contains-any"?new qy(e,n):new ye(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Uy(e,n):new jy(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hs(t,this.value)):t!==null&&on(this.value)===on(t)&&this.matchesComparison(hs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends cf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ze(e,t)}matches(e){return lf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function lf(s){return s.op==="and"}function uf(s){return Vy(s)&&lf(s)}function Vy(s){for(const e of s.filters)if(e instanceof Ze)return!1;return!0}function Va(s){if(s instanceof ye)return s.field.canonicalString()+s.op.toString()+ds(s.value);if(uf(s))return s.filters.map(e=>Va(e)).join(",");{const e=s.filters.map(t=>Va(t)).join(",");return`${s.op}(${e})`}}function hf(s,e){return s instanceof ye?function(n,r){return r instanceof ye&&n.op===r.op&&n.field.isEqual(r.field)&&mt(n.value,r.value)}(s,e):s instanceof Ze?function(n,r){return r instanceof Ze&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,o,c)=>i&&hf(o,r.filters[c]),!0):!1}(s,e):void H(19439)}function df(s){return s instanceof ye?function(t){return`${t.field.canonicalString()} ${t.op} ${ds(t.value)}`}(s):s instanceof Ze?function(t){return t.op.toString()+" {"+t.getFilters().map(df).join(" ,")+"}"}(s):"Filter"}class Fy extends ye{constructor(e,t,n){super(e,t,n),this.key=B.fromName(n.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class Uy extends ye{constructor(e,t){super(e,"in",t),this.keys=ff("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class jy extends ye{constructor(e,t){super(e,"not-in",t),this.keys=ff("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ff(s,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>B.fromName(n.referenceValue))}class By extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hc(t)&&Ar(t.arrayValue,this.value)}}class Gy extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ar(this.value.arrayValue,t)}}class Hy extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ar(this.value.arrayValue,t)}}class qy extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>Ar(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t=null,n=[],r=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function Wu(s,e=null,t=[],n=[],r=null,i=null,o=null){return new zy(s,e,t,n,r,i,o)}function dc(s){const e=$(s);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Va(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Vr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ds(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ds(n)).join(",")),e.Te=t}return e.Te}function fc(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!My(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!hf(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!Ku(s.startAt,e.startAt)&&Ku(s.endAt,e.endAt)}function Fa(s){return B.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t=null,n=[],r=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ky(s,e,t,n,r,i,o,c){return new ws(s,e,t,n,r,i,o,c)}function _o(s){return new ws(s)}function $u(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function pf(s){return s.collectionGroup!==null}function hr(s){const e=$(s);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ae(Oe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new vr(i,n))}),t.has(Oe.keyField().canonicalString())||e.Ie.push(new vr(Oe.keyField(),n))}return e.Ie}function ct(s){const e=$(s);return e.Ee||(e.Ee=Wy(e,hr(s))),e.Ee}function Wy(s,e){if(s.limitType==="F")return Wu(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new vr(r.field,i)});const t=s.endAt?new $i(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new $i(s.startAt.position,s.startAt.inclusive):null;return Wu(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function Ua(s,e){const t=s.filters.concat([e]);return new ws(s.path,s.collectionGroup,s.explicitOrderBy.slice(),t,s.limit,s.limitType,s.startAt,s.endAt)}function Qi(s,e,t){return new ws(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function yo(s,e){return fc(ct(s),ct(e))&&s.limitType===e.limitType}function mf(s){return`${dc(ct(s))}|lt:${s.limitType}`}function Xn(s){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(r=>df(r)).join(", ")}]`),Vr(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ds(r)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ds(r)).join(",")),`Target(${n})`}(ct(s))}; limitType=${s.limitType})`}function Eo(s,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(s,e)&&function(n,r){for(const i of hr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(s,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(s,e)&&function(n,r){return!(n.startAt&&!function(o,c,l){const u=zu(o,c,l);return o.inclusive?u<=0:u<0}(n.startAt,hr(n),r)||n.endAt&&!function(o,c,l){const u=zu(o,c,l);return o.inclusive?u>=0:u>0}(n.endAt,hr(n),r))}(s,e)}function $y(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function gf(s){return(e,t)=>{let n=!1;for(const r of hr(s)){const i=Qy(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function Qy(s,e,t){const n=s.field.isKeyField()?B.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?hs(l,u):H(42886)}(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return H(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){un(this.inner,(t,n)=>{for(const[r,i]of n)e(r,i)})}isEmpty(){return Jd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=new he(B.comparator);function Pt(){return Yy}const bf=new he(B.comparator);function rr(...s){let e=bf;for(const t of s)e=e.insert(t.key,t);return e}function _f(s){let e=bf;return s.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Sn(){return dr()}function yf(){return dr()}function dr(){return new Mn(s=>s.toString(),(s,e)=>s.isEqual(e))}const Xy=new he(B.comparator),Jy=new Ae(B.comparator);function Z(...s){let e=Jy;for(const t of s)e=e.add(t);return e}const Zy=new Ae(J);function eE(){return Zy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(e)?"-0":e}}function Ef(s){return{integerValue:""+s}}function tE(s,e){return Py(e)?Ef(e):pc(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this._=void 0}}function nE(s,e,t){return s instanceof Ir?function(r,i){const o={fields:{[tf]:{stringValue:ef},[sf]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&uc(i)&&(i=bo(i)),i&&(o.fields[nf]=i),{mapValue:o}}(t,e):s instanceof Sr?wf(s,e):s instanceof Rr?Af(s,e):function(r,i){const o=Tf(r,i),c=Qu(o)+Qu(r.Ae);return Ma(o)&&Ma(r.Ae)?Ef(c):pc(r.serializer,c)}(s,e)}function sE(s,e,t){return s instanceof Sr?wf(s,e):s instanceof Rr?Af(s,e):t}function Tf(s,e){return s instanceof Yi?function(n){return Ma(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class Ir extends To{}class Sr extends To{constructor(e){super(),this.elements=e}}function wf(s,e){const t=vf(e);for(const n of s.elements)t.some(r=>mt(r,n))||t.push(n);return{arrayValue:{values:t}}}class Rr extends To{constructor(e){super(),this.elements=e}}function Af(s,e){let t=vf(e);for(const n of s.elements)t=t.filter(r=>!mt(r,n));return{arrayValue:{values:t}}}class Yi extends To{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Qu(s){return me(s.integerValue||s.doubleValue)}function vf(s){return hc(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t){this.field=e,this.transform=t}}function iE(s,e){return s.field.isEqual(e.field)&&function(n,r){return n instanceof Sr&&r instanceof Sr||n instanceof Rr&&r instanceof Rr?us(n.elements,r.elements,mt):n instanceof Yi&&r instanceof Yi?mt(n.Ae,r.Ae):n instanceof Ir&&r instanceof Ir}(s.transform,e.transform)}class oE{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ki(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class wo{}function If(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new mc(s.key,Ue.none()):new Fr(s.key,s.data,Ue.none());{const t=s.data,n=Fe.empty();let r=new Ae(Oe.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new hn(s.key,n,new ze(r.toArray()),Ue.none())}}function aE(s,e,t){s instanceof Fr?function(r,i,o){const c=r.value.clone(),l=Xu(r.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(s,e,t):s instanceof hn?function(r,i,o){if(!ki(r.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Xu(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Sf(r)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(s,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function fr(s,e,t,n){return s instanceof Fr?function(i,o,c,l){if(!ki(i.precondition,o))return c;const u=i.value.clone(),d=Ju(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(s,e,t,n):s instanceof hn?function(i,o,c,l){if(!ki(i.precondition,o))return c;const u=Ju(i.fieldTransforms,l,o),d=o.data;return d.setAll(Sf(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(s,e,t,n):function(i,o,c){return ki(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(s,e,t)}function cE(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=Tf(n.transform,r||null);i!=null&&(t===null&&(t=Fe.empty()),t.set(n.field,i))}return t||null}function Yu(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&us(n,r,(i,o)=>iE(i,o))}(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class Fr extends wo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class hn extends wo{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sf(s){const e=new Map;return s.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}}),e}function Xu(s,e,t){const n=new Map;te(s.length===t.length,32656,{Re:t.length,Ve:s.length});for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,c=e.data.field(i.field);n.set(i.field,sE(o,c,t[r]))}return n}function Ju(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,nE(i,o,e))}return n}class mc extends wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rf extends wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&aE(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=fr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=fr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=yf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(r.key)?null:c;const l=If(o,c);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(t,n)=>Yu(t,n))&&us(this.baseMutations,e.baseMutations,(t,n)=>Yu(t,n))}}class gc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){te(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=function(){return Xy}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new gc(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,ee;function Pf(s){switch(s){case O.OK:return H(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return H(15467,{code:s})}}function Cf(s){if(s===void 0)return Rt("GRPC error has no .code"),O.UNKNOWN;switch(s){case be.OK:return O.OK;case be.CANCELLED:return O.CANCELLED;case be.UNKNOWN:return O.UNKNOWN;case be.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case be.INTERNAL:return O.INTERNAL;case be.UNAVAILABLE:return O.UNAVAILABLE;case be.UNAUTHENTICATED:return O.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case be.NOT_FOUND:return O.NOT_FOUND;case be.ALREADY_EXISTS:return O.ALREADY_EXISTS;case be.PERMISSION_DENIED:return O.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case be.ABORTED:return O.ABORTED;case be.OUT_OF_RANGE:return O.OUT_OF_RANGE;case be.UNIMPLEMENTED:return O.UNIMPLEMENTED;case be.DATA_LOSS:return O.DATA_LOSS;default:return H(39323,{code:s})}}(ee=be||(be={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=new Jt([4294967295,4294967295],0);function Zu(s){const e=dE().encode(s),t=new Bd;return t.update(e),new Uint8Array(t.digest())}function eh(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jt([t,n],0),new Jt([r,i],0)]}class bc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ir(`Invalid padding: ${t}`);if(n<0)throw new ir(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ir(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ir(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Jt.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(Jt.fromNumber(n)));return r.compare(fE)===1&&(r=new Jt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Zu(e),[n,r]=eh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,r,i);if(!this.we(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bc(i,r,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=Zu(e),[n,r]=eh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(n,r,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ur.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ao(z.min(),r,new he(J),Pt(),Z())}}class Ur{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ur(n,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class kf{constructor(e,t){this.targetId=e,this.Ce=t}}class xf{constructor(e,t,n=Ne.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class th{constructor(){this.ve=0,this.Fe=nh(),this.Me=Ne.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),n=Z();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:H(38017,{changeType:i})}}),new Ur(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=nh()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class pE{constructor(e){this.Ge=e,this.ze=new Map,this.je=Pt(),this.Je=Ei(),this.He=Ei(),this.Ye=new he(J)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.Ke(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.Ke(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.We(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((n,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(Fa(i))if(n===0){const o=new B(i.path);this.et(t,o,Se.newNoDocument(o,z.min()))}else te(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,c;try{o=rn(n).toUint8Array()}catch(l){if(l instanceof Zd)return ls("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new bc(o,r,i)}catch(l){return ls(l instanceof ir?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&Fa(c.target)){const l=new B(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Se.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let n=Z();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const r=new Ao(e,t,this.Ye,this.je,n);return this.je=Pt(),this.Je=Ei(),this.He=Ei(),this.Ye=new he(J),r}Xe(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.Et(e,t)?r.Qe(t,1):r.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new th,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Ae(J),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Ae(J),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||U("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new th),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ei(){return new he(B.comparator)}function nh(){return new he(B.comparator)}const mE={asc:"ASCENDING",desc:"DESCENDING"},gE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bE={and:"AND",or:"OR"};class _E{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ja(s,e){return s.useProto3Json||Vr(e)?e:{value:e}}function Xi(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Df(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function yE(s,e){return Xi(s,e.toTimestamp())}function Ke(s){return te(!!s,49232),z.fromTimestamp(function(t){const n=sn(t);return new le(n.seconds,n.nanos)}(s))}function _c(s,e){return Ba(s,e).canonicalString()}function Ba(s,e){const t=function(r){return new ie(["projects",r.projectId,"databases",r.database])}(s).child("documents");return e===void 0?t:t.child(e)}function Of(s){const e=ie.fromString(s);return te(Uf(e),10190,{key:e.toString()}),e}function Ji(s,e){return _c(s.databaseId,e.path)}function pr(s,e){const t=Of(e);if(t.get(1)!==s.databaseId.projectId)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new B(Lf(t))}function Nf(s,e){return _c(s.databaseId,e)}function EE(s){const e=Of(s);return e.length===4?ie.emptyPath():Lf(e)}function Ga(s){return new ie(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Lf(s){return te(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function sh(s,e,t){return{name:Ji(s,e),fields:t.value.mapValue.fields}}function TE(s,e){return"found"in e?function(n,r){te(!!r.found,43571),r.found.name,r.found.updateTime;const i=pr(n,r.found.name),o=Ke(r.found.updateTime),c=r.found.createTime?Ke(r.found.createTime):z.min(),l=new Fe({mapValue:{fields:r.found.fields}});return Se.newFoundDocument(i,o,c,l)}(s,e):"missing"in e?function(n,r){te(!!r.missing,3894),te(!!r.readTime,22933);const i=pr(n,r.missing),o=Ke(r.readTime);return Se.newNoDocument(i,o)}(s,e):H(7234,{result:e})}function wE(s,e){let t;if("targetChange"in e){e.targetChange;const n=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:H(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(te(d===void 0||typeof d=="string",58123),Ne.fromBase64String(d||"")):(te(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ne.fromUint8Array(d||new Uint8Array))}(s,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?O.UNKNOWN:Cf(u.code);return new F(d,u.message||"")}(o);t=new xf(n,r,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=pr(s,n.document.name),i=Ke(n.document.updateTime),o=n.document.createTime?Ke(n.document.createTime):z.min(),c=new Fe({mapValue:{fields:n.document.fields}}),l=Se.newFoundDocument(r,i,o,c),u=n.targetIds||[],d=n.removedTargetIds||[];t=new xi(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=pr(s,n.document),i=n.readTime?Ke(n.readTime):z.min(),o=Se.newNoDocument(r,i),c=n.removedTargetIds||[];t=new xi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=pr(s,n.document),i=n.removedTargetIds||[];t=new xi([],i,r,null)}else{if(!("filter"in e))return H(11601,{Rt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,o=new hE(r,i),c=n.targetId;t=new kf(c,o)}}return t}function Mf(s,e){let t;if(e instanceof Fr)t={update:sh(s,e.key,e.value)};else if(e instanceof mc)t={delete:Ji(s,e.key)};else if(e instanceof hn)t={update:sh(s,e.key,e.data),updateMask:xE(e.fieldMask)};else{if(!(e instanceof Rf))return H(16599,{Vt:e.type});t={verify:Ji(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof Ir)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Sr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Rr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Yi)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw H(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:yE(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(s,e.precondition)),t}function AE(s,e){return s&&s.length>0?(te(e!==void 0,14353),s.map(t=>function(r,i){let o=r.updateTime?Ke(r.updateTime):Ke(i);return o.isEqual(z.min())&&(o=Ke(i)),new oE(o,r.transformResults||[])}(t,e))):[]}function vE(s,e){return{documents:[Nf(s,e.path)]}}function IE(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Nf(s,r);const i=function(u){if(u.length!==0)return Ff(Ze.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Jn(m.field),direction:PE(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ja(s,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:t,parent:r}}function SE(s){let e=EE(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){te(n===1,65062);const d=t.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(p){const m=Vf(p);return m instanceof Ze&&uf(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(m=>function(P){return new vr(Zn(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Vr(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(p){const m=!!p.before,y=p.values||[];return new $i(y,m)}(t.startAt));let u=null;return t.endAt&&(u=function(p){const m=!p.before,y=p.values||[];return new $i(y,m)}(t.endAt)),Ky(e,r,o,i,c,"F",l,u)}function RE(s,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Vf(s){return s.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Zn(t.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Zn(t.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zn(t.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zn(t.unaryFilter.field);return ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(s):s.fieldFilter!==void 0?function(t){return ye.create(Zn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(t){return Ze.create(t.compositeFilter.filters.map(n=>Vf(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(t.compositeFilter.op))}(s):H(30097,{filter:s})}function PE(s){return mE[s]}function CE(s){return gE[s]}function kE(s){return bE[s]}function Jn(s){return{fieldPath:s.canonicalString()}}function Zn(s){return Oe.fromServerFormat(s.fieldPath)}function Ff(s){return s instanceof ye?function(t){if(t.op==="=="){if(qu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NAN"}};if(Hu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(qu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NAN"}};if(Hu(t.value))return{unaryFilter:{field:Jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(t.field),op:CE(t.op),value:t.value}}}(s):s instanceof Ze?function(t){const n=t.getFilters().map(r=>Ff(r));return n.length===1?n[0]:{compositeFilter:{op:kE(t.op),filters:n}}}(s):H(54877,{filter:s})}function xE(s){const e=[];return s.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Uf(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,n,r,i=z.min(),o=z.min(),c=Ne.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.yt=e}}function OE(s){const e=SE({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Qi(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.Cn=new LE}addToCollectionParentIndex(e,t){return this.Cn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(nn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(nn.min())}updateCollectionGroup(e,t,n){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class LE{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Ae(ie.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Ae(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jf=41943040;class Ge{static withCacheSize(e){return new Ge(e,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge.DEFAULT_COLLECTION_PERCENTILE=10,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ge.DEFAULT=new Ge(jf,Ge.DEFAULT_COLLECTION_PERCENTILE,Ge.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ge.DISABLED=new Ge(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new fs(0)}static cr(){return new fs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="LruGarbageCollector",ME=1048576;function oh([s,e],[t,n]){const r=J(s,t);return r===0?J(e,n):r}class VE{constructor(e){this.Ir=e,this.buffer=new Ae(oh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();oh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class FE{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){U(ih,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ts(t)?U(ih,"Ignoring IndexedDB error during garbage collection: ",t):await Es(t)}await this.Vr(3e5)})}}class UE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return L.resolve(go.ce);const n=new VE(t);return this.mr.forEachTarget(e,r=>n.Ar(r.sequenceNumber)).next(()=>this.mr.pr(e,r=>n.Ar(r))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.mr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(rh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rh):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let n,r,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(u=Date.now(),Yn()<=Y.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${r} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p})))}}function jE(s,e){return new UE(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.changes=new Mn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Se.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?L.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(n!==null&&fr(n.mutation,r,ze.empty(),le.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Z()){const r=Sn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(i=>{let o=rr();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Sn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Z()))}populateOverlays(e,t,n){const r=[];return n.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,r){let i=Pt();const o=dr(),c=function(){return dr()}();return t.forEach((l,u)=>{const d=n.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof hn)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),fr(d.mutation,u,d.mutation.getFieldMask(),le.now())):o.set(u.key,ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>c.set(u,new GE(d,o.get(u)??null))),c))}recalculateAndSaveOverlays(e,t){const n=dr();let r=new he((o,c)=>o-c),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let d=n.get(l)||ze.empty();d=c.applyToLocalView(u,d),n.set(l,d);const p=(r.get(c.batchId)||Z()).add(l);r=r.insert(c.batchId,p)})}).next(()=>{const o=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=yf();d.forEach(m=>{if(!i.has(m)){const y=If(t.get(m),n.get(m));y!==null&&p.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,r){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):L.resolve(Sn());let c=Er,l=i;return o.next(u=>L.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Z())).next(d=>({batchId:c,changes:_f(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(n=>{let r=rr();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=rr();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const u=function(p,m){return new ws(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,n,r).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Se.newInvalidDocument(d)))});let c=rr();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&fr(d.mutation,u,ze.empty(),le.now()),Eo(t,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return L.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:Ke(r.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(r){return{name:r.name,query:OE(r.bundledQuery),readTime:Ke(r.readTime)}}(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.overlays=new he(B.comparator),this.qr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Sn();return L.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&n.set(r,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((r,i)=>{this.St(e,t,i)}),L.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.qr.get(n);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(n)),L.resolve()}getOverlaysForCollection(e,t,n){const r=Sn(),i=t.length+1,o=new B(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>n&&r.set(l.getKey(),l)}return L.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new he((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let d=i.get(u.largestBatchId);d===null&&(d=Sn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Sn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=r)););return L.resolve(c)}St(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.qr.get(r.largestBatchId).delete(n.key);this.qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new uE(t,n));let i=this.qr.get(t);i===void 0&&(i=Z(),this.qr.set(t,i)),this.qr.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.Qr=new Ae(Ie.$r),this.Ur=new Ae(Ie.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const n=new Ie(e,t);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Gr(new Ie(e,t))}zr(e,t){e.forEach(n=>this.removeReference(n,t))}jr(e){const t=new B(new ie([])),n=new Ie(t,e),r=new Ie(t,e+1),i=[];return this.Ur.forEachInRange([n,r],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new B(new ie([])),n=new Ie(t,e),r=new Ie(t,e+1);let i=Z();return this.Ur.forEachInRange([n,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ie(e,0),n=this.Qr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ie{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return B.comparator(e.key,t.key)||J(e.Yr,t.Yr)}static Kr(e,t){return J(e.Yr,t.Yr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Ae(Ie.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lE(i,t,n,r);this.mutationQueue.push(o);for(const c of r)this.Zr=this.Zr.add(new Ie(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ei(n),i=r<0?0:r;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?lc:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ie(t,0),r=new Ie(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([n,r],o=>{const c=this.Xr(o.Yr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Ae(J);return t.forEach(r=>{const i=new Ie(r,0),o=new Ie(r,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{n=n.add(c.Yr)})}),L.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;B.isDocumentKey(i)||(i=i.child(""));const o=new Ie(new B(i),0);let c=new Ae(J);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(c=c.add(l.Yr)),!0)},o),L.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(n=>{const r=this.Xr(n);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){te(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Zr;return L.forEach(t.mutations,r=>{const i=new Ie(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Zr=n})}ir(e){}containsKey(e,t){const n=new Ie(t,0),r=this.Zr.firstAfterOrEqual(n);return L.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.ri=e,this.docs=function(){return new he(B.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.ri(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return L.resolve(n?n.document.mutableCopy():Se.newInvalidDocument(t))}getEntries(e,t){let n=Pt();return t.forEach(r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():Se.newInvalidDocument(r))}),L.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Pt();const o=t.path,c=new B(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||vy(Ay(d),n)<=0||(r.has(d.key)||Eo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,t,n,r){H(9500)}ii(e,t){return L.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new QE(this)}getSize(e){return L.resolve(this.size)}}class QE extends BE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Nr.addEntry(e,r)):this.Nr.removeEntry(n)}),L.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.persistence=e,this.si=new Mn(t=>dc(t),fc),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new yc,this.targetCount=0,this.ai=fs.ur()}forEachTarget(e,t){return this.si.forEach((n,r)=>t(r)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.oi&&(this.oi=t),L.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new fs(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Pr(t),L.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),L.waitFor(i).next(()=>r)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const n=this.si.get(t)||null;return L.resolve(n)}addMatchingKeys(e,t,n){return this._i.Wr(t,n),L.resolve()}removeMatchingKeys(e,t,n){this._i.zr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const n=this._i.Hr(t);return L.resolve(n)}containsKey(e,t){return L.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t){this.ui={},this.overlays={},this.ci=new go(0),this.li=!1,this.li=!0,this.hi=new KE,this.referenceDelegate=e(this),this.Pi=new YE(this),this.indexManager=new NE,this.remoteDocumentCache=function(r){return new $E(r)}(n=>this.referenceDelegate.Ti(n)),this.serializer=new DE(t),this.Ii=new qE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ui[e.toKey()];return n||(n=new WE(t,this.referenceDelegate),this.ui[e.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,n){U("MemoryPersistence","Starting transaction:",e);const r=new XE(this.ci.next());return this.referenceDelegate.Ei(),n(r).next(i=>this.referenceDelegate.di(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ai(e,t){return L.or(Object.values(this.ui).map(n=>()=>n.containsKey(e,t)))}}class XE extends Sy{constructor(e){super(),this.currentSequenceNumber=e}}class Ec{constructor(e){this.persistence=e,this.Ri=new yc,this.Vi=null}static mi(e){return new Ec(e)}get fi(){if(this.Vi)return this.Vi;throw H(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.fi.delete(n.toString()),L.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.fi.add(n.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(r=>this.fi.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.fi.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,n=>{const r=B.fromPath(n);return this.gi(e,r).next(i=>{i||t.removeEntry(r,z.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(n=>{n?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Zi{constructor(e,t){this.persistence=e,this.pi=new Mn(n=>Cy(n.path),(n,r)=>n.isEqual(r)),this.garbageCollector=jE(this,t)}static mi(e,t){return new Zi(e,t)}Ei(){}di(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(r=>n+r))}wr(e){let t=0;return this.pr(e,n=>{t++}).next(()=>t)}pr(e,t){return L.forEach(this.pi,(n,r)=>this.br(e,n,r).next(i=>i?L.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ii(e,o=>this.br(e,o,t).next(c=>{c||(n++,i.removeEntry(o,z.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeReference(e,t,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),L.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pi(e.data.value)),t}br(e,t,n){return L.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.pi.get(t);return L.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Es=n,this.ds=r}static As(e,t){let n=Z(),r=Z();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tc(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return zb()?8:Ry(Ve())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ys(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,t,r,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new JE;return this.Ss(e,t,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,o,c.size)})}).next(()=>i.result)}bs(e,t,n,r){return n.documentReadCount<this.fs?(Yn()<=Y.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Xn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(Yn()<=Y.DEBUG&&U("QueryEngine","Query:",Xn(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.gs*r?(Yn()<=Y.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Xn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):L.resolve())}ys(e,t){if($u(t))return L.resolve(null);let n=ct(t);return this.indexManager.getIndexType(e,n).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Qi(t,null,"F"),n=ct(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Z(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const u=this.Ds(t,c);return this.Cs(t,u,o,l.readTime)?this.ys(e,Qi(t,null,"F")):this.vs(e,u,t,l)}))})))}ws(e,t,n,r){return $u(t)||r.isEqual(z.min())?L.resolve(null):this.ps.getDocuments(e,n).next(i=>{const o=this.Ds(t,i);return this.Cs(t,o,n,r)?L.resolve(null):(Yn()<=Y.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Xn(t)),this.vs(e,o,t,wy(r,Er)).next(c=>c))})}Ds(e,t){let n=new Ae(gf(e));return t.forEach((r,i)=>{Eo(e,i)&&(n=n.add(i))}),n}Cs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,t,n){return Yn()<=Y.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Xn(t)),this.ps.getDocumentsMatchingQuery(e,t,nn.min(),n)}vs(e,t,n,r){return this.ps.getDocumentsMatchingQuery(e,n,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="LocalStore",eT=3e8;class tT{constructor(e,t,n,r){this.persistence=e,this.Fs=t,this.serializer=r,this.Ms=new he(J),this.xs=new Mn(i=>dc(i),fc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(n)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function nT(s,e,t,n){return new tT(s,e,t,n)}async function Gf(s,e){const t=$(s);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=Z();for(const u of r){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(n,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function sT(s,e){const t=$(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,m=p.keys();let y=L.resolve();return m.forEach(P=>{y=y.next(()=>d.getEntry(l,P)).next(x=>{const R=u.docVersions.get(P);te(R!==null,48541),x.version.compareTo(R)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),d.addEntry(x)))})}),y.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=Z();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,r))})}function Hf(s){const e=$(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function rT(s,e){const t=$(s),n=e.snapshotVersion;let r=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});r=t.Ms;const c=[];e.targetChanges.forEach((d,p)=>{const m=r.get(p);if(!m)return;c.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,p).next(()=>t.Pi.addMatchingKeys(i,d.addedDocuments,p)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(Ne.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,n)),r=r.insert(p,y),function(x,R,k){return x.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=eT?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(m,y,d)&&c.push(t.Pi.updateTargetData(i,y))});let l=Pt(),u=Z();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(iT(i,o,e.documentUpdates).next(d=>{l=d.ks,u=d.qs})),!n.isEqual(z.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next(p=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(d)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.Ms=r,i))}function iT(s,e,t){let n=Z(),r=Z();return t.forEach(i=>n=n.add(i)),e.getEntries(s,n).next(i=>{let o=Pt();return t.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):U(wc,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:r}})}function oT(s,e){const t=$(s);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=lc),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function aT(s,e){const t=$(s);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return t.Pi.getTargetData(n,e).next(i=>i?(r=i,L.resolve(r)):t.Pi.allocateTargetId(n).next(o=>(r=new Wt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Pi.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=t.Ms.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(n.targetId,n),t.xs.set(e,n.targetId)),n})}async function Ha(s,e,t){const n=$(s),r=n.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Ts(o))throw o;U(wc,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Ms=n.Ms.remove(e),n.xs.delete(r.target)}function ah(s,e,t){const n=$(s);let r=z.min(),i=Z();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=$(l),m=p.xs.get(d);return m!==void 0?L.resolve(p.Ms.get(m)):p.Pi.getTargetData(u,d)}(n,o,ct(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,n.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n.Fs.getDocumentsMatchingQuery(o,e,t?r:z.min(),t?i:Z())).next(c=>(cT(n,$y(e),c),{documents:c,Qs:i})))}function cT(s,e,t){let n=s.Os.get(e)||z.min();t.forEach((r,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),s.Os.set(e,n)}class ch{constructor(){this.activeTargetIds=eE()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lT{constructor(){this.Mo=new ch,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,n){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ch,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="ConnectivityMonitor";class uh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){U(lh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){U(lh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti=null;function qa(){return Ti===null?Ti=function(){return 268435456+Math.round(2147483648*Math.random())}():Ti++,"0x"+Ti.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="RestConnection",hT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dT{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Wo=this.databaseId.database===Ki?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Go(e,t,n,r,i){const o=qa(),c=this.zo(e,t.toUriEncodedString());U(_a,`Sending RPC '${e}' ${o}:`,c,n);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,r,i);const{host:u}=new URL(c),d=bs(u);return this.Jo(e,c,l,n,d).then(p=>(U(_a,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ls(_a,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",n),p})}Ho(e,t,n,r,i,o){return this.Go(e,t,n,r,i)}jo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),n&&n.headers.forEach((r,i)=>e[i]=r)}zo(e,t){const n=hT[e];return`${this.Uo}/v1/${t}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="WebChannelConnection";class pT extends dT{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){const o=qa();return new Promise((c,l)=>{const u=new Gd;u.setWithCredentials(!0),u.listenOnce(Hd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ri.NO_ERROR:const p=u.getResponseJson();U(Le,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Ri.TIMEOUT:U(Le,`RPC '${e}' ${o} timed out`),l(new F(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const m=u.getStatus();if(U(Le,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const P=y==null?void 0:y.error;if(P&&P.status&&P.message){const x=function(k){const D=k.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(D)>=0?D:O.UNKNOWN}(P.status);l(new F(x,P.message))}else l(new F(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new F(O.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{U(Le,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(r);U(Le,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",d,n,15)})}T_(e,t,n){const r=qa(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Kd(),c=zd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const d=i.join("");U(Le,`Creating RPC '${e}' stream ${r}: ${d}`,l);const p=o.createWebChannel(d,l);this.I_(p);let m=!1,y=!1;const P=new fT({Yo:R=>{y?U(Le,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(m||(U(Le,`Opening RPC '${e}' stream ${r} transport.`),p.open(),m=!0),U(Le,`RPC '${e}' stream ${r} sending:`,R),p.send(R))},Zo:()=>p.close()}),x=(R,k,D)=>{R.listen(k,N=>{try{D(N)}catch(M){setTimeout(()=>{throw M},0)}})};return x(p,sr.EventType.OPEN,()=>{y||(U(Le,`RPC '${e}' stream ${r} transport opened.`),P.o_())}),x(p,sr.EventType.CLOSE,()=>{y||(y=!0,U(Le,`RPC '${e}' stream ${r} transport closed`),P.a_(),this.E_(p))}),x(p,sr.EventType.ERROR,R=>{y||(y=!0,ls(Le,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),P.a_(new F(O.UNAVAILABLE,"The operation could not be completed")))}),x(p,sr.EventType.MESSAGE,R=>{var k;if(!y){const D=R.data[0];te(!!D,16349);const N=D,M=(N==null?void 0:N.error)||((k=N[0])==null?void 0:k.error);if(M){U(Le,`RPC '${e}' stream ${r} received error:`,M);const G=M.status;let q=function(_){const A=be[_];if(A!==void 0)return Cf(A)}(G),T=M.message;q===void 0&&(q=O.INTERNAL,T="Unknown error status: "+G+" with message "+M.message),y=!0,P.a_(new F(q,T)),p.close()}else U(Le,`RPC '${e}' stream ${r} received:`,D),P.u_(D)}}),x(c,qd.STAT_EVENT,R=>{R.stat===Oa.PROXY?U(Le,`RPC '${e}' stream ${r} detected buffering proxy`):R.stat===Oa.NOPROXY&&U(Le,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function ya(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(s){return new _E(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=n,this.A_=r,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="PersistentStream";class qf{constructor(e,t,n,r,i,o,c,l){this.Mi=e,this.S_=n,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ac(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Rt(t.toString()),Rt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.D_===t&&this.G_(n,r)},n=>{e(()=>{const r=new F(O.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)})})}G_(e,t){const n=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(r=>{n(()=>this.z_(r))}),this.stream.onMessage(r=>{n(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return U(hh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(U(hh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mT extends qf{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=wE(this.serializer,e),n=function(i){if(!("targetChange"in i))return z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Ke(o.readTime):z.min()}(e);return this.listener.H_(t,n)}Y_(e){const t={};t.database=Ga(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Fa(l)?{documents:vE(i,l)}:{query:IE(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Df(i,o.resumeToken);const u=ja(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){c.readTime=Xi(i,o.snapshotVersion.toTimestamp());const u=ja(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const n=RE(this.serializer,e);n&&(t.labels=n),this.q_(t)}Z_(e){const t={};t.database=Ga(this.serializer),t.removeTarget=e,this.q_(t)}}class gT extends qf{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=AE(e.writeResults,e.commitTime),n=Ke(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=Ga(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Mf(this.serializer,n))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{}class _T extends bT{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Ba(t,n),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(O.UNKNOWN,i.toString())})}Ho(e,t,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Ba(t,n),r,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class yT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rt(t),this.aa=!1):U("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="RemoteStore";class ET{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{n.enqueueAndForget(async()=>{Vn(this)&&(U(On,"Restarting streams for network reachability change."),await async function(l){const u=$(l);u.Ea.add(4),await jr(u),u.Ra.set("Unknown"),u.Ea.delete(4),await Io(u)}(this))})}),this.Ra=new yT(n,r)}}async function Io(s){if(Vn(s))for(const e of s.da)await e(!0)}async function jr(s){for(const e of s.da)await e(!1)}function zf(s,e){const t=$(s);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Rc(t)?Sc(t):As(t).O_()&&Ic(t,e))}function vc(s,e){const t=$(s),n=As(t);t.Ia.delete(e),n.O_()&&Kf(t,e),t.Ia.size===0&&(n.O_()?n.L_():Vn(t)&&t.Ra.set("Unknown"))}function Ic(s,e){if(s.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=s.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}As(s).Y_(e)}function Kf(s,e){s.Va.Ue(e),As(s).Z_(e)}function Sc(s){s.Va=new pE({getRemoteKeysForTarget:e=>s.remoteSyncer.getRemoteKeysForTarget(e),At:e=>s.Ia.get(e)||null,ht:()=>s.datastore.serializer.databaseId}),As(s).start(),s.Ra.ua()}function Rc(s){return Vn(s)&&!As(s).x_()&&s.Ia.size>0}function Vn(s){return $(s).Ea.size===0}function Wf(s){s.Va=void 0}async function TT(s){s.Ra.set("Online")}async function wT(s){s.Ia.forEach((e,t)=>{Ic(s,e)})}async function AT(s,e){Wf(s),Rc(s)?(s.Ra.ha(e),Sc(s)):s.Ra.set("Unknown")}async function vT(s,e,t){if(s.Ra.set("Online"),e instanceof xf&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const c of i.targetIds)r.Ia.has(c)&&(await r.remoteSyncer.rejectListen(c,o),r.Ia.delete(c),r.Va.removeTarget(c))}(s,e)}catch(n){U(On,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await eo(s,n)}else if(e instanceof xi?s.Va.Ze(e):e instanceof kf?s.Va.st(e):s.Va.tt(e),!t.isEqual(z.min()))try{const n=await Hf(s.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(Ne.EMPTY_BYTE_STRING,d.snapshotVersion)),Kf(i,l);const p=new Wt(d.target,l,u,d.sequenceNumber);Ic(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(s,t)}catch(n){U(On,"Failed to raise snapshot:",n),await eo(s,n)}}async function eo(s,e,t){if(!Ts(e))throw e;s.Ea.add(1),await jr(s),s.Ra.set("Offline"),t||(t=()=>Hf(s.localStore)),s.asyncQueue.enqueueRetryable(async()=>{U(On,"Retrying IndexedDB access"),await t(),s.Ea.delete(1),await Io(s)})}function $f(s,e){return e().catch(t=>eo(s,t,e))}async function So(s){const e=$(s),t=an(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lc;for(;IT(e);)try{const r=await oT(e.localStore,n);if(r===null){e.Ta.length===0&&t.L_();break}n=r.batchId,ST(e,r)}catch(r){await eo(e,r)}Qf(e)&&Yf(e)}function IT(s){return Vn(s)&&s.Ta.length<10}function ST(s,e){s.Ta.push(e);const t=an(s);t.O_()&&t.X_&&t.ea(e.mutations)}function Qf(s){return Vn(s)&&!an(s).x_()&&s.Ta.length>0}function Yf(s){an(s).start()}async function RT(s){an(s).ra()}async function PT(s){const e=an(s);for(const t of s.Ta)e.ea(t.mutations)}async function CT(s,e,t){const n=s.Ta.shift(),r=gc.from(n,e,t);await $f(s,()=>s.remoteSyncer.applySuccessfulWrite(r)),await So(s)}async function kT(s,e){e&&an(s).X_&&await async function(n,r){if(function(o){return Pf(o)&&o!==O.ABORTED}(r.code)){const i=n.Ta.shift();an(n).B_(),await $f(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await So(n)}}(s,e),Qf(s)&&Yf(s)}async function dh(s,e){const t=$(s);t.asyncQueue.verifyOperationInProgress(),U(On,"RemoteStore received new credentials");const n=Vn(t);t.Ea.add(3),await jr(t),n&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Io(t)}async function xT(s,e){const t=$(s);e?(t.Ea.delete(2),await Io(t)):e||(t.Ea.add(2),await jr(t),t.Ra.set("Unknown"))}function As(s){return s.ma||(s.ma=function(t,n,r){const i=$(t);return i.sa(),new mT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(s.datastore,s.asyncQueue,{Xo:TT.bind(null,s),t_:wT.bind(null,s),r_:AT.bind(null,s),H_:vT.bind(null,s)}),s.da.push(async e=>{e?(s.ma.B_(),Rc(s)?Sc(s):s.Ra.set("Unknown")):(await s.ma.stop(),Wf(s))})),s.ma}function an(s){return s.fa||(s.fa=function(t,n,r){const i=$(t);return i.sa(),new gT(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:RT.bind(null,s),r_:kT.bind(null,s),ta:PT.bind(null,s),na:CT.bind(null,s)}),s.da.push(async e=>{e?(s.fa.B_(),await So(s)):(await s.fa.stop(),s.Ta.length>0&&(U(On,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))})),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,c=new Pc(e,t,o,r,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cc(s,e){if(Rt("AsyncQueue",`${e}: ${s}`),Ts(s))return new F(O.UNAVAILABLE,`${e}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{static emptySet(e){return new ss(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||B.comparator(t.key,n.key):(t,n)=>B.comparator(t.key,n.key),this.keyedMap=rr(),this.sortedSet=new he(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new ss;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(){this.ga=new he(B.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):H(63341,{Rt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,n)=>{e.push(n)}),e}}class ps{constructor(e,t,n,r,i,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new ps(e,t,ss.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class OT{constructor(){this.queries=ph(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const r=$(t),i=r.queries;r.queries=ph(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(n)})})(this,new F(O.ABORTED,"Firestore shutting down"))}}function ph(){return new Mn(s=>mf(s),yo)}async function Xf(s,e){const t=$(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(n=2):(i=new DT,n=e.Da()?0:1);try{switch(n){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const c=Cc(o,`Initialization of query '${Xn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&kc(t)}async function Jf(s,e){const t=$(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function NT(s,e){const t=$(s);let n=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(r)&&(n=!0);o.wa=r}}n&&kc(t)}function LT(s,e,t){const n=$(s),r=n.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);n.queries.delete(e)}function kc(s){s.Ca.forEach(e=>{e.next()})}var za,mh;(mh=za||(za={})).Ma="default",mh.Cache="cache";class Zf{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new ps(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==za.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.key=e}}class tp{constructor(e){this.key=e}}class MT{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Z(),this.mutatedKeys=Z(),this.eu=gf(e),this.tu=new ss(this.eu)}get nu(){return this.Ya}ru(e,t){const n=t?t.iu:new fh,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,c=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((d,p)=>{const m=r.get(d),y=Eo(this.query,p)?p:null,P=!!m&&this.mutatedKeys.has(m.key),x=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let R=!1;m&&y?m.data.isEqual(y.data)?P!==x&&(n.track({type:3,doc:y}),R=!0):this.su(m,y)||(n.track({type:2,doc:y}),R=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(c=!0)):!m&&y?(n.track({type:0,doc:y}),R=!0):m&&!y&&(n.track({type:1,doc:m}),R=!0,(l||u)&&(c=!0)),R&&(y?(o=o.add(y),i=x?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),n.track({type:1,doc:d})}return{tu:o,iu:n,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(y,P){const x=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Rt:R})}};return x(y)-x(P)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(n),r=r??!1;const c=t&&!r?this._u():[],l=this.Xa.size===0&&this.current&&!r?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new ps(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new fh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Z(),this.tu.forEach(n=>{this.uu(n.key)&&(this.Xa=this.Xa.add(n.key))});const t=[];return e.forEach(n=>{this.Xa.has(n)||t.push(new tp(n))}),this.Xa.forEach(n=>{e.has(n)||t.push(new ep(n))}),t}cu(e){this.Ya=e.Qs,this.Xa=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ps.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const xc="SyncEngine";class VT{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class FT{constructor(e){this.key=e,this.hu=!1}}class UT{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Mn(c=>mf(c),yo),this.Iu=new Map,this.Eu=new Set,this.du=new he(B.comparator),this.Au=new Map,this.Ru=new yc,this.Vu={},this.mu=new Map,this.fu=fs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function jT(s,e,t=!0){const n=ap(s);let r;const i=n.Tu.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await np(n,e,t,!0),r}async function BT(s,e){const t=ap(s);await np(t,e,!0,!1)}async function np(s,e,t,n){const r=await aT(s.localStore,ct(e)),i=r.targetId,o=s.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await GT(s,e,i,o==="current",r.resumeToken)),s.isPrimaryClient&&t&&zf(s.remoteStore,r),c}async function GT(s,e,t,n,r){s.pu=(p,m,y)=>async function(x,R,k,D){let N=R.view.ru(k);N.Cs&&(N=await ah(x.localStore,R.query,!1).then(({documents:T})=>R.view.ru(T,N)));const M=D&&D.targetChanges.get(R.targetId),G=D&&D.targetMismatches.get(R.targetId)!=null,q=R.view.applyChanges(N,x.isPrimaryClient,M,G);return bh(x,R.targetId,q.au),q.snapshot}(s,p,m,y);const i=await ah(s.localStore,e,!0),o=new MT(e,i.Qs),c=o.ru(i.documents),l=Ur.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),u=o.applyChanges(c,s.isPrimaryClient,l);bh(s,t,u.au);const d=new VT(e,t,o);return s.Tu.set(e,d),s.Iu.has(t)?s.Iu.get(t).push(e):s.Iu.set(t,[e]),u.snapshot}async function HT(s,e,t){const n=$(s),r=n.Tu.get(e),i=n.Iu.get(r.targetId);if(i.length>1)return n.Iu.set(r.targetId,i.filter(o=>!yo(o,e))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ha(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),t&&vc(n.remoteStore,r.targetId),Ka(n,r.targetId)}).catch(Es)):(Ka(n,r.targetId),await Ha(n.localStore,r.targetId,!0))}async function qT(s,e){const t=$(s),n=t.Tu.get(e),r=t.Iu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),vc(t.remoteStore,n.targetId))}async function zT(s,e,t){const n=JT(s);try{const r=await function(o,c){const l=$(o),u=le.now(),d=c.reduce((y,P)=>y.add(P.key),Z());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let P=Pt(),x=Z();return l.Ns.getEntries(y,d).next(R=>{P=R,P.forEach((k,D)=>{D.isValidDocument()||(x=x.add(k))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,P)).next(R=>{p=R;const k=[];for(const D of c){const N=cE(D,p.get(D.key).overlayedDocument);N!=null&&k.push(new hn(D.key,N,af(N.value.mapValue),Ue.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,k,c)}).next(R=>{m=R;const k=R.applyToLocalDocumentSet(p,x);return l.documentOverlayCache.saveOverlays(y,R.batchId,k)})}).then(()=>({batchId:m.batchId,changes:_f(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),function(o,c,l){let u=o.Vu[o.currentUser.toKey()];u||(u=new he(J)),u=u.insert(c,l),o.Vu[o.currentUser.toKey()]=u}(n,r.batchId,t),await Br(n,r.changes),await So(n.remoteStore)}catch(r){const i=Cc(r,"Failed to persist write");t.reject(i)}}async function sp(s,e){const t=$(s);try{const n=await rT(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Au.get(i);o&&(te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?te(o.hu,14607):r.removedDocuments.size>0&&(te(o.hu,42227),o.hu=!1))}),await Br(t,n,e)}catch(n){await Es(n)}}function gh(s,e,t){const n=$(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(o,c){const l=$(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(c)&&(u=!0)}),u&&kc(l)}(n.eventManager,e),r.length&&n.Pu.H_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function KT(s,e,t){const n=$(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Au.get(e),i=r&&r.key;if(i){let o=new he(B.comparator);o=o.insert(i,Se.newNoDocument(i,z.min()));const c=Z().add(i),l=new Ao(z.min(),new Map,new he(J),o,c);await sp(n,l),n.du=n.du.remove(i),n.Au.delete(e),Dc(n)}else await Ha(n.localStore,e,!1).then(()=>Ka(n,e,t)).catch(Es)}async function WT(s,e){const t=$(s),n=e.batch.batchId;try{const r=await sT(t.localStore,e);ip(t,n,null),rp(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Br(t,r)}catch(r){await Es(r)}}async function $T(s,e,t){const n=$(s);try{const r=await function(o,c){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(te(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(n.localStore,e);ip(n,e,t),rp(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Br(n,r)}catch(r){await Es(r)}}function rp(s,e){(s.mu.get(e)||[]).forEach(t=>{t.resolve()}),s.mu.delete(e)}function ip(s,e,t){const n=$(s);let r=n.Vu[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.Vu[n.currentUser.toKey()]=r}}function Ka(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Iu.get(e))s.Tu.delete(n),t&&s.Pu.yu(n,t);s.Iu.delete(e),s.isPrimaryClient&&s.Ru.jr(e).forEach(n=>{s.Ru.containsKey(n)||op(s,n)})}function op(s,e){s.Eu.delete(e.path.canonicalString());const t=s.du.get(e);t!==null&&(vc(s.remoteStore,t),s.du=s.du.remove(e),s.Au.delete(t),Dc(s))}function bh(s,e,t){for(const n of t)n instanceof ep?(s.Ru.addReference(n.key,e),QT(s,n)):n instanceof tp?(U(xc,"Document no longer in limbo: "+n.key),s.Ru.removeReference(n.key,e),s.Ru.containsKey(n.key)||op(s,n.key)):H(19791,{wu:n})}function QT(s,e){const t=e.key,n=t.path.canonicalString();s.du.get(t)||s.Eu.has(n)||(U(xc,"New document in limbo: "+t),s.Eu.add(n),Dc(s))}function Dc(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const e=s.Eu.values().next().value;s.Eu.delete(e);const t=new B(ie.fromString(e)),n=s.fu.next();s.Au.set(n,new FT(t)),s.du=s.du.insert(t,n),zf(s.remoteStore,new Wt(ct(_o(t.path)),n,"TargetPurposeLimboResolution",go.ce))}}async function Br(s,e,t){const n=$(s),r=[],i=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach((c,l)=>{o.push(n.pu(l,e,t).then(u=>{var d;if((u||t)&&n.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:d.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){r.push(u);const p=Tc.As(l.targetId,u);i.push(p)}}))}),await Promise.all(o),n.Pu.H_(r),await async function(l,u){const d=$(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(u,m=>L.forEach(m.Es,y=>d.persistence.referenceDelegate.addReference(p,m.targetId,y)).next(()=>L.forEach(m.ds,y=>d.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))}catch(p){if(!Ts(p))throw p;U(wc,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const y=d.Ms.get(m),P=y.snapshotVersion,x=y.withLastLimboFreeSnapshotVersion(P);d.Ms=d.Ms.insert(m,x)}}}(n.localStore,i))}async function YT(s,e){const t=$(s);if(!t.currentUser.isEqual(e)){U(xc,"User change. New user:",e.toKey());const n=await Gf(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new F(O.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Br(t,n.Ls)}}function XT(s,e){const t=$(s),n=t.Au.get(e);if(n&&n.hu)return Z().add(n.key);{let r=Z();const i=t.Iu.get(e);if(!i)return r;for(const o of i){const c=t.Tu.get(o);r=r.unionWith(c.view.nu)}return r}}function ap(s){const e=$(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=sp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KT.bind(null,e),e.Pu.H_=NT.bind(null,e.eventManager),e.Pu.yu=LT.bind(null,e.eventManager),e}function JT(s){const e=$(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$T.bind(null,e),e}class to{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return nT(this.persistence,new ZE,e.initialUser,this.serializer)}Cu(e){return new Bf(Ec.mi,this.serializer)}Du(e){return new lT}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}to.provider={build:()=>new to};class ZT extends to{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){te(this.persistence.referenceDelegate instanceof Zi,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new FE(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ge.withCacheSize(this.cacheSizeBytes):Ge.DEFAULT;return new Bf(n=>Zi.mi(n,t),this.serializer)}}class Wa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>gh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=YT.bind(null,this.syncEngine),await xT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OT}()}createDatastore(e){const t=vo(e.databaseInfo.databaseId),n=function(i){return new pT(i)}(e.databaseInfo);return function(i,o,c,l){return new _T(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,r,i,o,c){return new ET(n,r,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>gh(this.syncEngine,t,0),function(){return uh.v()?new uh:new uT}())}createSyncEngine(e,t){return function(r,i,o,c,l,u,d){const p=new UT(r,i,o,c,l,u);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=$(r);U(On,"RemoteStore shutting down."),i.Ea.add(5),await jr(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Wa.provider={build:()=>new Wa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Rt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new F(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(r,i){const o=$(r),c={documents:i.map(p=>Ji(o.serializer,p))},l=await o.Ho("BatchGetDocuments",o.serializer.databaseId,ie.emptyPath(),c,i.length),u=new Map;l.forEach(p=>{const m=TE(o.serializer,p);u.set(m.key.toString(),m)});const d=[];return i.forEach(p=>{const m=u.get(p.toString());te(!!m,55234,{key:p}),d.push(m)}),d}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new mc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const r=B.fromPath(n);this.mutations.push(new Rf(r,this.precondition(r)))}),await async function(n,r){const i=$(n),o={writes:r.map(c=>Mf(i.serializer,c))};await i.Go("Commit",i.serializer.databaseId,ie.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw H(50498,{Gu:e.constructor.name});t=z.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new F(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(z.min())?Ue.exists(!1):Ue.updateTime(t):Ue.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(z.min()))throw new F(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ue.updateTime(t)}return Ue.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.zu=n.maxAttempts,this.M_=new Ac(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new ew(this.datastore),t=this.Hu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(r=>{this.Yu(r)}))}).catch(n=>{this.Yu(n)})})}Hu(e){try{const t=this.updateFunction(e);return!Vr(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Pf(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="FirestoreClient";class nw{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Me.UNAUTHENTICATED,this.clientId=cc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{U(cn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(U(cn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Cc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ea(s,e){s.asyncQueue.verifyOperationInProgress(),U(cn,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener(async r=>{n.isEqual(r)||(await Gf(e.localStore,r),n=r)}),e.persistence.setDatabaseDeletedListener(()=>s.terminate()),s._offlineComponents=e}async function _h(s,e){s.asyncQueue.verifyOperationInProgress();const t=await sw(s);U(cn,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener(n=>dh(e.remoteStore,n)),s.setAppCheckTokenChangeListener((n,r)=>dh(e.remoteStore,r)),s._onlineComponents=e}async function sw(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){U(cn,"Using user provided OfflineComponentProvider");try{await Ea(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===O.FAILED_PRECONDITION||r.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;ls("Error using user provided cache. Falling back to memory cache: "+t),await Ea(s,new to)}}else U(cn,"Using default OfflineComponentProvider"),await Ea(s,new ZT(void 0));return s._offlineComponents}async function Oc(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(U(cn,"Using user provided OnlineComponentProvider"),await _h(s,s._uninitializedComponentsProvider._online)):(U(cn,"Using default OnlineComponentProvider"),await _h(s,new Wa))),s._onlineComponents}function rw(s){return Oc(s).then(e=>e.syncEngine)}function iw(s){return Oc(s).then(e=>e.datastore)}async function $a(s){const e=await Oc(s),t=e.eventManager;return t.onListen=jT.bind(null,e.syncEngine),t.onUnlisten=HT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=BT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qT.bind(null,e.syncEngine),t}function ow(s,e,t={}){const n=new At;return s.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new cp({next:m=>{d.Nu(),o.enqueueAndForget(()=>Jf(i,p));const y=m.docs.has(c);!y&&m.fromCache?u.reject(new F(O.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new F(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Zf(_o(c.path),d,{includeMetadataChanges:!0,qa:!0});return Xf(i,p)}(await $a(s),s.asyncQueue,e,t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="firestore.googleapis.com",Eh=!0;class Th{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=up,this.ssl=Eh}else this.host=e.host,this.ssl=e.ssl??Eh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ME)throw new F(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ty("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lp(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ro{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Th({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Th(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hy;switch(n.type){case"firstParty":return new my(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=yh.get(t);n&&(U("ComponentProvider","Removing Datastore"),yh.delete(t),n.terminate())}(this),Promise.resolve()}}function aw(s,e,t,n={}){var u;s=at(s,Ro);const r=bs(e),i=s._getSettings(),o={...i,emulatorOptions:s._getEmulatorOptions()},c=`${e}:${t}`;r&&(Od(`https://${c}`),Nd("Firestore",!0)),i.host!==up&&i.host!==c&&ls("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:r,emulatorOptions:n};if(!kn(l,o)&&(s._setSettings(l),n.mockUserToken)){let d,p;if(typeof n.mockUserToken=="string")d=n.mockUserToken,p=Me.MOCK_USER;else{d=Mb(n.mockUserToken,(u=s._app)==null?void 0:u.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new F(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Me(m)}s._authCredentials=new dy(new $d(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new dn(this.firestore,e,this._query)}}class fe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}toJSON(){return{type:fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Mr(t,fe._jsonSchema))return new fe(e,n||null,new B(ie.fromString(t.referencePath)))}}fe._jsonSchemaVersion="firestore/documentReference/1.0",fe._jsonSchema={type:Ee("string",fe._jsonSchemaVersion),referencePath:Ee("string")};class Zt extends dn{constructor(e,t,n){super(e,t,_o(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new B(e))}withConverter(e){return new Zt(this.firestore,e,this._path)}}function hp(s,e,...t){if(s=Te(s),Qd("collection","path",e),s instanceof Ro){const n=ie.fromString(e,...t);return Nu(n),new Zt(s,null,n)}{if(!(s instanceof fe||s instanceof Zt))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ie.fromString(e,...t));return Nu(n),new Zt(s.firestore,null,n)}}function vs(s,e,...t){if(s=Te(s),arguments.length===1&&(e=cc.newId()),Qd("doc","path",e),s instanceof Ro){const n=ie.fromString(e,...t);return Ou(n),new fe(s,null,new B(n))}{if(!(s instanceof fe||s instanceof Zt))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ie.fromString(e,...t));return Ou(n),new fe(s.firestore,s instanceof Zt?s.converter:null,new B(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="AsyncQueue";class Ah{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ac(this,"async_queue_retry"),this._c=()=>{const n=ya();n&&U(wh,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=ya();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ya();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new At;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ts(e))throw e;U(wh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(n=>{throw this.nc=n,this.rc=!1,Rt("INTERNAL UNHANDLED ERROR: ",vh(n)),n}).then(n=>(this.rc=!1,n))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Pc.createAndSchedule(this,e,t,n,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&H(47125,{Pc:vh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function vh(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(s){return function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(s,["next","error","complete"])}class Nn extends Ro{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Ah,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ah(e),this._firestoreClient=void 0,await e}}}function cw(s,e){const t=typeof s=="object"?s:Fd(),n=typeof s=="string"?s:Ki,r=oc(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=Nb("firestore");i&&aw(r,...i)}return r}function Po(s){if(s._terminated)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||lw(s),s._firestoreClient}function lw(s){var n,r,i;const e=s._freezeSettings(),t=function(c,l,u,d){return new Dy(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,lp(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(s._databaseId,((n=s._app)==null?void 0:n.options.appId)||"",s._persistenceKey,e);s._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new nw(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qe(Ne.fromBase64String(e))}catch(t){throw new F(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qe(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Mr(e,qe._jsonSchema))return qe.fromBase64String(e.bytes)}}qe._jsonSchemaVersion="firestore/bytes/1.0",qe._jsonSchema={type:Ee("string",qe._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new F(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new F(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new F(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:lt._jsonSchemaVersion}}static fromJSON(e){if(Mr(e,lt._jsonSchema))return new lt(e.latitude,e.longitude)}}lt._jsonSchemaVersion="firestore/geoPoint/1.0",lt._jsonSchema={type:Ee("string",lt._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ut._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Mr(e,ut._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ut(e.vectorValues);throw new F(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ut._jsonSchemaVersion="firestore/vectorValue/1.0",ut._jsonSchema={type:Ee("string",ut._jsonSchemaVersion),vectorValues:Ee("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=/^__.*__$/;class hw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new hn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fr(e,this.data,t,this.fieldTransforms)}}class dp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new hn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function fp(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{Ac:s})}}class Nc{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Nc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.gc(e),n}yc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.Vc({path:t,fc:!1});return n.Rc(),n}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return no(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(fp(this.Ac)&&uw.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||vo(e)}Cc(e,t,n,r=!1){return new Nc({Ac:e,methodName:t,Dc:n,path:Oe.emptyPath(),fc:!1,bc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xo(s){const e=s._freezeSettings(),t=vo(s._databaseId);return new dw(s._databaseId,!!e.ignoreUndefinedProperties,t)}function Lc(s,e,t,n,r,i={}){const o=s.Cc(i.merge||i.mergeFields?2:0,e,t,r);Vc("Data must be an object, but it was:",o,n);const c=pp(n,o);let l,u;if(i.merge)l=new ze(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Qa(e,p,t);if(!o.contains(m))throw new F(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);gp(d,m)||d.push(m)}l=new ze(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new hw(new Fe(c),l,u)}class Do extends ko{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Do}}class Mc extends ko{_toFieldTransform(e){return new rE(e.path,new Ir)}isEqual(e){return e instanceof Mc}}function fw(s,e,t,n){const r=s.Cc(1,e,t);Vc("Data must be an object, but it was:",r,n);const i=[],o=Fe.empty();un(n,(l,u)=>{const d=Fc(e,l,t);u=Te(u);const p=r.yc(d);if(u instanceof Do)i.push(d);else{const m=Gr(u,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new ze(i);return new dp(o,c,r.fieldTransforms)}function pw(s,e,t,n,r,i){const o=s.Cc(1,e,t),c=[Qa(e,n,t)],l=[r];if(i.length%2!=0)throw new F(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Qa(e,i[m])),l.push(i[m+1]);const u=[],d=Fe.empty();for(let m=c.length-1;m>=0;--m)if(!gp(u,c[m])){const y=c[m];let P=l[m];P=Te(P);const x=o.yc(y);if(P instanceof Do)u.push(y);else{const R=Gr(P,x);R!=null&&(u.push(y),d.set(y,R))}}const p=new ze(u);return new dp(d,p,o.fieldTransforms)}function mw(s,e,t,n=!1){return Gr(t,s.Cc(n?4:3,e))}function Gr(s,e){if(mp(s=Te(s)))return Vc("Unsupported field value:",e,s),pp(s,e);if(s instanceof ko)return function(n,r){if(!fp(r.Ac))throw r.Sc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Sc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(n,r){const i=[];let o=0;for(const c of n){let l=Gr(c,r.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(s,e)}return function(n,r){if((n=Te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tE(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=le.fromDate(n);return{timestampValue:Xi(r.serializer,i)}}if(n instanceof le){const i=new le(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Xi(r.serializer,i)}}if(n instanceof lt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qe)return{bytesValue:Df(r.serializer,n._byteString)};if(n instanceof fe){const i=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw r.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_c(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof ut)return function(o,c){return{mapValue:{fields:{[rf]:{stringValue:of},[Wi]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return pc(c.serializer,u)})}}}}}}(n,r);throw r.Sc(`Unsupported field value: ${mo(n)}`)}(s,e)}function pp(s,e){const t={};return Jd(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):un(s,(n,r)=>{const i=Gr(r,e.mc(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function mp(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof le||s instanceof lt||s instanceof qe||s instanceof fe||s instanceof ko||s instanceof ut)}function Vc(s,e,t){if(!mp(t)||!Yd(t)){const n=mo(t);throw n==="an object"?e.Sc(s+" a custom object"):e.Sc(s+" "+n)}}function Qa(s,e,t){if((e=Te(e))instanceof Co)return e._internalPath;if(typeof e=="string")return Fc(s,e);throw no("Field path arguments must be of type string or ",s,!1,void 0,t)}const gw=new RegExp("[~\\*/\\[\\]]");function Fc(s,e,t){if(e.search(gw)>=0)throw no(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new Co(...e.split("."))._internalPath}catch{throw no(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function no(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new F(O.INVALID_ARGUMENT,c+s+l)}function gp(s,e){return s.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Oo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bw extends so{data(){return super.data()}}function Oo(s,e){return typeof e=="string"?Fc(s,e):e instanceof Co?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new F(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Uc{}class jc extends Uc{}function Sh(s,e,...t){let n=[];e instanceof Uc&&n.push(e),n=n.concat(t),function(i){const o=i.filter(l=>l instanceof Bc).length,c=i.filter(l=>l instanceof No).length;if(o>1||o>0&&c>0)throw new F(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const r of n)s=r._apply(s);return s}class No extends jc{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new No(e,t,n)}_apply(e){const t=this._parse(e);return bp(e._query,t),new dn(e.firestore,e.converter,Ua(e._query,t))}_parse(e){const t=xo(e.firestore);return function(i,o,c,l,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new F(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){kh(p,d);const P=[];for(const x of p)P.push(Ch(l,i,x));m={arrayValue:{values:P}}}else m=Ch(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||kh(p,d),m=mw(c,o,p,d==="in"||d==="not-in");return ye.create(u,d,m)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function yw(s,e,t){const n=e,r=Oo("where",s);return No._create(r,n,t)}class Bc extends Uc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Ze.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let o=r;const c=i.getFlattenedFilters();for(const l of c)bp(o,l),o=Ua(o,l)}(e._query,t),new dn(e.firestore,e.converter,Ua(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gc extends jc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Gc(e,t)}_apply(e){const t=function(r,i,o){if(r.startAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vr(i,o)}(e._query,this._field,this._direction);return new dn(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new ws(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function Rh(s,e="asc"){const t=e,n=Oo("orderBy",s);return Gc._create(n,t)}class Hc extends jc{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Hc(e,t,n)}_apply(e){return new dn(e.firestore,e.converter,Qi(e._query,this._limit,this._limitType))}}function Ph(s){return Hc._create("limit",s,"F")}function Ch(s,e,t){if(typeof(t=Te(t))=="string"){if(t==="")throw new F(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pf(e)&&t.indexOf("/")!==-1)throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ie.fromString(t));if(!B.isDocumentKey(n))throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Gu(s,new B(n))}if(t instanceof fe)return Gu(s,t._key);throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mo(t)}.`)}function kh(s,e){if(!Array.isArray(s)||s.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bp(s,e){const t=function(r,i){for(const o of r)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(s.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class _p{convertValue(e,t="none"){switch(on(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return un(e,(r,i)=>{n[r]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,r,i;const t=(i=(r=(n=e.fields)==null?void 0:n[Wi].arrayValue)==null?void 0:r.values)==null?void 0:i.map(o=>me(o.doubleValue));return new ut(t)}convertGeoPoint(e){return new lt(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=bo(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Tr(e));default:return null}}convertTimestamp(e){const t=sn(e);return new le(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ie.fromString(e);te(Uf(n),9688,{name:e});const r=new wr(n.get(1),n.get(3)),i=new B(n.popFirst(5));return r.isEqual(t)||Rt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(s,e,t){let n;return n=s?t&&(t.merge||t.mergeFields)?s.toFirestore(e,t):s.toFirestore(e):e,n}class Ew extends _p{constructor(e){super(),this.firestore=e}convertBytes(e){return new qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fe(this.firestore,null,t)}}class es{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class en extends so{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Di(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Oo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=en._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}en._jsonSchemaVersion="firestore/documentSnapshot/1.0",en._jsonSchema={type:Ee("string",en._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Di extends en{data(e={}){return super.data(e)}}class rs{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new es(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Di(this._firestore,this._userDataWriter,n.key,n,new es(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new F(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(c=>{const l=new Di(r._firestore,r._userDataWriter,c.doc.key,c.doc,new es(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Di(r._firestore,r._userDataWriter,c.doc.key,c.doc,new es(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:Tw(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=rs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Tw(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(s){s=at(s,fe);const e=at(s.firestore,Nn);return ow(Po(e),s._key).then(t=>Ep(e,s,t))}rs._jsonSchemaVersion="firestore/querySnapshot/1.0",rs._jsonSchema={type:Ee("string",rs._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Kc extends _p{constructor(e){super(),this.firestore=e}convertBytes(e){return new qe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fe(this.firestore,null,t)}}function ww(s,e,t){s=at(s,fe);const n=at(s.firestore,Nn),r=qc(s.converter,e,t);return yp(n,[Lc(xo(n),"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,Ue.none())])}function Aw(s,e){const t=at(s.firestore,Nn),n=vs(s),r=qc(s.converter,e);return yp(t,[Lc(xo(s.firestore),"addDoc",n._key,r,s.converter!==null,{}).toMutation(n._key,Ue.exists(!1))]).then(()=>n)}function vw(s,...e){var l,u,d;s=Te(s);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||Ih(e[n])||(t=e[n++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Ih(e[n])){const p=e[n];e[n]=(l=p.next)==null?void 0:l.bind(p),e[n+1]=(u=p.error)==null?void 0:u.bind(p),e[n+2]=(d=p.complete)==null?void 0:d.bind(p)}let i,o,c;if(s instanceof fe)o=at(s.firestore,Nn),c=_o(s._key.path),i={next:p=>{e[n]&&e[n](Ep(o,s,p))},error:e[n+1],complete:e[n+2]};else{const p=at(s,dn);o=at(p.firestore,Nn),c=p._query;const m=new Kc(o);i={next:y=>{e[n]&&e[n](new rs(o,m,p,y))},error:e[n+1],complete:e[n+2]},_w(s._query)}return function(m,y,P,x){const R=new cp(x),k=new Zf(y,R,P);return m.asyncQueue.enqueueAndForget(async()=>Xf(await $a(m),k)),()=>{R.Nu(),m.asyncQueue.enqueueAndForget(async()=>Jf(await $a(m),k))}}(Po(o),c,r,i)}function yp(s,e){return function(n,r){const i=new At;return n.asyncQueue.enqueueAndForget(async()=>zT(await rw(n),r,i)),i.promise}(Po(s),e)}function Ep(s,e,t){const n=t.docs.get(e._key),r=new Kc(s);return new en(s,r,e._key,n,new es(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={maxAttempts:5};function or(s,e){if((s=Te(s)).firestore!==e)throw new F(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=xo(e)}get(e){const t=or(e,this._firestore),n=new Ew(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return H(24041);const i=r[0];if(i.isFoundDocument())return new so(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new so(this._firestore,n,t._key,null,t.converter);throw H(18433,{doc:i})})}set(e,t,n){const r=or(e,this._firestore),i=qc(r.converter,t,n),o=Lc(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,n);return this._transaction.set(r._key,o),this}update(e,t,n,...r){const i=or(e,this._firestore);let o;return o=typeof(t=Te(t))=="string"||t instanceof Co?pw(this._dataReader,"Transaction.update",i._key,t,n,r):fw(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=or(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends Sw{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=or(e,this._firestore),n=new Kc(this._firestore);return super.get(e).then(r=>new en(this._firestore,n,t._key,r._document,new es(!1,!1),t.converter))}}function Pw(s,e,t){s=at(s,Nn);const n={...Iw,...t};return function(i){if(i.maxAttempts<1)throw new F(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,o,c){const l=new At;return i.asyncQueue.enqueueAndForget(async()=>{const u=await iw(i);new tw(i.asyncQueue,u,c,o,l).ju()}),l.promise}(Po(s),r=>e(new Rw(s,r)),n)}function Cw(){return new Mc("serverTimestamp")}(function(e,t=!0){(function(r){ys=r})(_s),cs(new xn("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new Nn(new fy(n.getProvider("auth-internal")),new gy(o,n.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(u.options.projectId,d)}(o,r),o);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Xt(Cu,ku,e),Xt(Cu,ku,"esm2020")})();function Tp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kw=Tp,wp=new Nr("auth","Firebase",Tp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new rc("@firebase/auth");function xw(s,...e){ro.logLevel<=Y.WARN&&ro.warn(`Auth (${_s}): ${s}`,...e)}function Oi(s,...e){ro.logLevel<=Y.ERROR&&ro.error(`Auth (${_s}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(s,...e){throw Wc(s,...e)}function ht(s,...e){return Wc(s,...e)}function Ap(s,e,t){const n={...kw(),[e]:t};return new Nr("auth","Firebase",n).create(e,{appName:s.name})}function tn(s){return Ap(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wc(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return wp.create(s,...e)}function K(s,e,...t){if(!s)throw Wc(e,...t)}function Et(s){const e="INTERNAL ASSERTION FAILED: "+s;throw Oi(e),new Error(e)}function Ct(s,e){s||Et(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function Dw(){return xh()==="http:"||xh()==="https:"}function xh(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dw()||Gb()||"connection"in navigator)?navigator.onLine:!0}function Nw(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ct(t>e,"Short delay should be less than long delay!"),this.isMobile=Ub()||Hb()}get(){return Ow()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(s,e){Ct(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Vw=new Hr(3e4,6e4);function Fn(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function fn(s,e,t,n,r={}){return Ip(s,r,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=Lr({key:s.config.apiKey,...o}).slice(1),l=await s._getAdditionalHeaders();l["Content-Type"]="application/json",s.languageCode&&(l["X-Firebase-Locale"]=s.languageCode);const u={method:e,headers:l,...i};return Bb()||(u.referrerPolicy="no-referrer"),s.emulatorConfig&&bs(s.emulatorConfig.host)&&(u.credentials="include"),vp.fetch()(await Sp(s,s.config.apiHost,t,c),u)})}async function Ip(s,e,t){s._canInitEmulator=!1;const n={...Lw,...e};try{const r=new Uw(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wi(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wi(s,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wi(s,"email-already-in-use",o);if(l==="USER_DISABLED")throw wi(s,"user-disabled",o);const d=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ap(s,d,u);et(s,d)}}catch(r){if(r instanceof xt)throw r;et(s,"network-request-failed",{message:String(r)})}}async function Lo(s,e,t,n,r={}){const i=await fn(s,e,t,n,r);return"mfaPendingCredential"in i&&et(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function Sp(s,e,t,n){const r=`${e}${t}?${n}`,i=s,o=i.config.emulator?$c(s.config,r):`${s.config.apiScheme}://${r}`;return Mw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Fw(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Uw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(ht(this.auth,"network-request-failed")),Vw.get())})}}function wi(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=ht(s,e,n);return r.customData._tokenResponse=t,r}function Dh(s){return s!==void 0&&s.enterprise!==void 0}class jw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Fw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Bw(s,e){return fn(s,"GET","/v2/recaptchaConfig",Fn(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(s,e){return fn(s,"POST","/v1/accounts:delete",e)}async function io(s,e){return fn(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hw(s,e=!1){const t=Te(s),n=await t.getIdToken(e),r=Qc(n);K(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:n,authTime:mr(Ta(r.auth_time)),issuedAtTime:mr(Ta(r.iat)),expirationTime:mr(Ta(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ta(s){return Number(s)*1e3}function Qc(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cd(t);return r?JSON.parse(r):(Oi("Failed to decode base64 JWT payload"),null)}catch(r){return Oi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Oh(s){const e=Qc(s);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof xt&&qw(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function qw({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(s){var p;const e=s.auth,t=await s.getIdToken(),n=await Pr(s,io(e,{idToken:t}));K(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=(p=r.providerUserInfo)!=null&&p.length?Rp(r.providerUserInfo):[],o=Ww(s.providerData,i),c=s.isAnonymous,l=!(s.email&&r.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new Xa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(s,d)}async function Kw(s){const e=Te(s);await oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ww(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function Rp(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w(s,e){const t=await Ip(s,{},async()=>{const n=Lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,o=await Sp(s,r,"/v1/token",`key=${i}`),c=await s._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return s.emulatorConfig&&bs(s.emulatorConfig.host)&&(l.credentials="include"),vp.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Qw(s,e){return fn(s,"POST","/v2/accounts:revokeToken",Fn(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=Oh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await $w(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new is;return n&&(K(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&(K(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return Et("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(s,e){K(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Je{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new zw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Pr(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hw(this,e)}reload(){return Kw(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Je({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await oo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await Pr(this,Gw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:y,providerData:P,stsTokenManager:x}=t;K(p&&x,e,"internal-error");const R=is.fromJSON(this.name,x);K(typeof p=="string",e,"internal-error"),Bt(n,e.name),Bt(r,e.name),K(typeof m=="boolean",e,"internal-error"),K(typeof y=="boolean",e,"internal-error"),Bt(i,e.name),Bt(o,e.name),Bt(c,e.name),Bt(l,e.name),Bt(u,e.name),Bt(d,e.name);const k=new Je({uid:p,auth:e,email:r,emailVerified:m,displayName:n,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:R,createdAt:u,lastLoginAt:d});return P&&Array.isArray(P)&&(k.providerData=P.map(D=>({...D}))),l&&(k._redirectEventId=l),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new is;r.updateFromServerResponse(t);const i=new Je({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await oo(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];K(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Rp(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new is;c.updateFromIdToken(n);const l=new Je({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Xa(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=new Map;function Tt(s){Ct(s instanceof Function,"Expected a class definition");let e=Nh.get(s);return e?(Ct(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,Nh.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Pp.type="NONE";const Lh=Pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(s,e,t){return`firebase:${s}:${e}:${t}`}class os{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Ni(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ni("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await io(this.auth,{idToken:e}).catch(()=>{});return t?Je._fromGetAccountInfoResponse(this.auth,t,e):null}return Je._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new os(Tt(Lh),e,n);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Tt(Lh);const o=Ni(n,e.config.apiKey,e.name);let c=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await io(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Je._fromGetAccountInfoResponse(e,m,d)}else p=Je._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new os(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new os(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Np(e))return"Blackberry";if(Lp(e))return"Webos";if(kp(e))return"Safari";if((e.includes("chrome/")||xp(e))&&!e.includes("edge/"))return"Chrome";if(Op(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Cp(s=Ve()){return/firefox\//i.test(s)}function kp(s=Ve()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xp(s=Ve()){return/crios\//i.test(s)}function Dp(s=Ve()){return/iemobile/i.test(s)}function Op(s=Ve()){return/android/i.test(s)}function Np(s=Ve()){return/blackberry/i.test(s)}function Lp(s=Ve()){return/webos/i.test(s)}function Yc(s=Ve()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function Yw(s=Ve()){var e;return Yc(s)&&!!((e=window.navigator)!=null&&e.standalone)}function Xw(){return qb()&&document.documentMode===10}function Mp(s=Ve()){return Yc(s)||Op(s)||Lp(s)||Np(s)||/windows phone/i.test(s)||Dp(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(s,e=[]){let t;switch(s){case"Browser":t=Mh(Ve());break;case"Worker":t=`${Mh(Ve())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${_s}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(s,e={}){return fn(s,"GET","/v2/passwordPolicy",Fn(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=6;class tA{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??eA,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vh(this),this.idTokenSubscription=new Vh(this),this.beforeStateQueue=new Jw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tt(t)),this._initializationPromise=this.queue(async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await io(this,{idToken:e}),n=await Je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(n=l.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(tn(this));const t=e?Te(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zw(this),t=new tA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Qw(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tt(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&xw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Is(s){return Te(s)}class Vh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jb(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sA(s){Mo=s}function Fp(s){return Mo.loadJS(s)}function rA(){return Mo.recaptchaEnterpriseScript}function iA(){return Mo.gapiScript}function oA(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class aA{constructor(){this.enterprise=new cA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class cA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const lA="recaptcha-enterprise",Up="NO_RECAPTCHA";class uA{constructor(e){this.type=lA,this.auth=Is(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Bw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new jw(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function r(i,o,c){const l=window.grecaptcha;Dh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Up)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(c=>{if(!t&&Dh(window.grecaptcha))r(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=rA();l.length!==0&&(l+=c),Fp(l).then(()=>{r(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Fh(s,e,t,n=!1,r=!1){const i=new uA(s);let o;if(r)o=Up;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Uh(s,e,t,n,r){var i;if((i=s._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Fh(s,e,t,t==="getOobCode");return n(s,o)}else return n(s,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Fh(s,e,t,t==="getOobCode");return n(s,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(s,e){const t=oc(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(kn(i,e??{}))return r;et(r,"already-initialized")}return t.initialize({options:e})}function dA(s,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Tt);e!=null&&e.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function fA(s,e,t){const n=Is(s);K(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=jp(e),{host:o,port:c}=pA(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){K(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),K(kn(u,n.config.emulator)&&kn(d,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=d,n.settings.appVerificationDisabledForTesting=!0,bs(o)?(Od(`${i}//${o}${l}`),Nd("Auth",!0)):mA()}function jp(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function pA(s){const e=jp(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:jh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:jh(o)}}}function jh(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function mA(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Et("not implemented")}_getIdTokenResponse(e){return Et("not implemented")}_linkToIdToken(e,t){return Et("not implemented")}_getReauthenticationResolver(e){return Et("not implemented")}}async function gA(s,e){return fn(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(s,e){return Lo(s,"POST","/v1/accounts:signInWithPassword",Fn(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(s,e){return Lo(s,"POST","/v1/accounts:signInWithEmailLink",Fn(s,e))}async function yA(s,e){return Lo(s,"POST","/v1/accounts:signInWithEmailLink",Fn(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Xc{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Cr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Cr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uh(e,t,"signInWithPassword",bA);case"emailLink":return _A(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uh(e,n,"signUpPassword",gA);case"emailLink":return yA(e,{idToken:t,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(s,e){return Lo(s,"POST","/v1/accounts:signInWithIdp",Fn(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="http://localhost";class Ln extends Xc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const o=new Ln(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return as(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,as(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,as(e,t)}buildRequest(){const e={requestUri:EA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Lr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wA(s){const e=tr(nr(s)).link,t=e?tr(nr(e)).deep_link_id:null,n=tr(nr(s)).deep_link_id;return(n?tr(nr(n)).link:null)||n||t||e||s}class Jc{constructor(e){const t=tr(nr(e)),n=t.apiKey??null,r=t.oobCode??null,i=TA(t.mode??null);K(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=wA(e);try{return new Jc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,t){return Cr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Jc.parseLink(t);return K(n,"argument-error"),Cr._fromEmailAndCode(e,n.code,n.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Bp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends qr{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ht.credential(e.oauthAccessToken)}catch{return null}}}Ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ht.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends qr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ln._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return qt.credential(t,n)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends qr{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zt.credential(e.oauthAccessToken)}catch{return null}}}zt.GITHUB_SIGN_IN_METHOD="github.com";zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends qr{constructor(){super("twitter.com")}static credential(e,t){return Ln._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Kt.credential(t,n)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Je._fromIdTokenResponse(e,n,r),o=Bh(n);return new ms({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Bh(n);return new ms({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Bh(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends xt{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ao.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ao(e,t,n,r)}}function Gp(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ao._fromErrorAndOperation(s,i,e,n):i})}async function AA(s,e,t=!1){const n=await Pr(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return ms._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(s,e,t=!1){const{auth:n}=s;if(Xe(n.app))return Promise.reject(tn(n));const r="reauthenticate";try{const i=await Pr(s,Gp(n,r,e,s),t);K(i.idToken,n,"internal-error");const o=Qc(i.idToken);K(o,n,"internal-error");const{sub:c}=o;return K(s.uid===c,n,"user-mismatch"),ms._forOperation(s,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&et(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(s,e,t=!1){if(Xe(s.app))return Promise.reject(tn(s));const n="signIn",r=await Gp(s,n,e),i=await ms._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}async function IA(s,e){return Hp(Is(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SA(s){const e=Is(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function RA(s,e,t){return Xe(s.app)?Promise.reject(tn(s)):IA(Te(s),Ss.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&SA(s),n})}function PA(s,e,t,n){return Te(s).onIdTokenChanged(e,t,n)}function CA(s,e,t){return Te(s).beforeAuthStateChanged(e,t)}function kA(s,e,t,n){return Te(s).onAuthStateChanged(e,t,n)}function xA(s){return Te(s).signOut()}const co="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(co,"1"),this.storage.removeItem(co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=1e3,OA=10;class zp extends qp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Xw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,OA):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},DA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zp.type="LOCAL";const NA=zp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp extends qp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kp.type="SESSION";const Wp=Kp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new Vo(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const c=Array.from(o).map(async u=>u(t.origin,i)),l=await LA(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Zc("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return window}function VA(s){dt().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){return typeof dt().WorkerGlobalScope<"u"&&typeof dt().importScripts=="function"}async function FA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UA(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function jA(){return $p()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="firebaseLocalStorageDb",BA=1,lo="firebaseLocalStorage",Yp="fbase_key";class zr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fo(s,e){return s.transaction([lo],e?"readwrite":"readonly").objectStore(lo)}function GA(){const s=indexedDB.deleteDatabase(Qp);return new zr(s).toPromise()}function Ja(){const s=indexedDB.open(Qp,BA);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(lo,{keyPath:Yp})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(lo)?e(n):(n.close(),await GA(),e(await Ja()))})})}async function Gh(s,e,t){const n=Fo(s,!0).put({[Yp]:e,value:t});return new zr(n).toPromise()}async function HA(s,e){const t=Fo(s,!1).get(e),n=await new zr(t).toPromise();return n===void 0?null:n.value}function Hh(s,e){const t=Fo(s,!0).delete(e);return new zr(t).toPromise()}const qA=800,zA=3;class Xp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>zA)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $p()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(jA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await FA(),!this.activeServiceWorker)return;this.sender=new MA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ja();return await Gh(e,co,"1"),await Hh(e,co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>HA(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Fo(r,!1).getAll();return new zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xp.type="LOCAL";const KA=Xp;new Hr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(s,e){return e?Tt(e):(K(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Xc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,t){return as(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $A(s){return Hp(s.auth,new el(s),s.bypassAuthState)}function QA(s){const{auth:e,user:t}=s;return K(t,e,"internal-error"),vA(t,new el(s),s.bypassAuthState)}async function YA(s){const{auth:e,user:t}=s;return K(t,e,"internal-error"),AA(t,new el(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $A;case"linkViaPopup":case"linkViaRedirect":return YA;case"reauthViaPopup":case"reauthViaRedirect":return QA;default:et(this.auth,"internal-error")}}resolve(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA=new Hr(2e3,1e4);class ts extends Jp{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const e=Zc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,XA.get())};e()}}ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="pendingRedirect",Li=new Map;class ZA extends Jp{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Li.get(this.auth._key());if(!e){try{const n=await ev(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Li.set(this.auth._key(),e)}return this.bypassAuthState||Li.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ev(s,e){const t=sv(e),n=nv(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function tv(s,e){Li.set(s._key(),e)}function nv(s){return Tt(s._redirectPersistence)}function sv(s){return Ni(JA,s.config.apiKey,s.name)}async function rv(s,e,t=!1){if(Xe(s.app))return Promise.reject(tn(s));const n=Is(s),r=WA(n,e),o=await new ZA(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=10*60*1e3;class ov{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!av(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Zp(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iv&&this.cachedEventUids.clear(),this.cachedEventUids.has(qh(e))}saveEventToCache(e){this.cachedEventUids.add(qh(e)),this.lastProcessedEventTime=Date.now()}}function qh(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function Zp({type:s,error:e}){return s==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function av(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zp(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cv(s,e={}){return fn(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uv=/^https?/;async function hv(s){if(s.config.emulator)return;const{authorizedDomains:e}=await cv(s);for(const t of e)try{if(dv(t))return}catch{}et(s,"unauthorized-domain")}function dv(s){const e=Ya(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!uv.test(t))return!1;if(lv.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=new Hr(3e4,6e4);function zh(){const s=dt().___jsl;if(s!=null&&s.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function pv(s){return new Promise((e,t)=>{var r,i,o;function n(){zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zh(),t(ht(s,"network-request-failed"))},timeout:fv.get()})}if((i=(r=dt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=dt().gapi)!=null&&o.load)n();else{const c=oA("iframefcb");return dt()[c]=()=>{gapi.load?n():t(ht(s,"network-request-failed"))},Fp(`${iA()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Mi=null,e})}let Mi=null;function mv(s){return Mi=Mi||pv(s),Mi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Hr(5e3,15e3),bv="__/auth/iframe",_v="emulator/auth/iframe",yv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tv(s){const e=s.config;K(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?$c(e,_v):`https://${s.config.authDomain}/${bv}`,n={apiKey:e.apiKey,appName:s.name,v:_s},r=Ev.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Lr(n).slice(1)}`}async function wv(s){const e=await mv(s),t=dt().gapi;return K(t,s,"internal-error"),e.open({where:document.body,url:Tv(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yv,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const o=ht(s,"network-request-failed"),c=dt().setTimeout(()=>{i(o)},gv.get());function l(){dt().clearTimeout(c),r(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vv=500,Iv=600,Sv="_blank",Rv="http://localhost";class Kh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pv(s,e,t,n=vv,r=Iv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l={...Av,width:n.toString(),height:r.toString(),top:i,left:o},u=Ve().toLowerCase();t&&(c=xp(u)?Sv:t),Cp(u)&&(e=e||Rv,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,P])=>`${m}${y}=${P},`,"");if(Yw(u)&&c!=="_self")return Cv(e||"",c),new Kh(null);const p=window.open(e||"",c,d);K(p,s,"popup-blocked");try{p.focus()}catch{}return new Kh(p)}function Cv(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="__/auth/handler",xv="emulator/auth/handler",Dv=encodeURIComponent("fac");async function Wh(s,e,t,n,r,i){K(s.config.authDomain,s,"auth-domain-config-required"),K(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:_s,eventId:r};if(e instanceof Bp){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",Xb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof qr){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}s.tenantId&&(o.tid=s.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await s._getAppCheckToken(),u=l?`#${Dv}=${encodeURIComponent(l)}`:"";return`${Ov(s)}?${Lr(c).slice(1)}${u}`}function Ov({config:s}){return s.emulator?$c(s,xv):`https://${s.authDomain}/${kv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="webStorageSupport";class Nv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wp,this._completeRedirectFn=rv,this._overrideRedirectResult=tv}async _openPopup(e,t,n,r){var o;Ct((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Wh(e,t,n,Ya(),r);return Pv(e,i,Zc())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await Wh(e,t,n,Ya(),r);return VA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Ct(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await wv(e),n=new ov(e);return t.register("authEvent",r=>(K(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wa,{type:wa},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[wa];i!==void 0&&t(!!i),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=hv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mp()||kp()||Yc()}}const Lv=Nv;var $h="@firebase/auth",Qh="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fv(s){cs(new xn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vp(s)},u=new nA(n,r,i,l);return dA(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),cs(new xn("auth-internal",e=>{const t=Is(e.getProvider("auth").getImmediate());return(n=>new Mv(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt($h,Qh,Vv(s)),Xt($h,Qh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=5*60,jv=Dd("authIdTokenMaxAge")||Uv;let Yh=null;const Bv=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>jv)return;const r=t==null?void 0:t.token;Yh!==r&&(Yh=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Gv(s=Fd()){const e=oc(s,"auth");if(e.isInitialized())return e.getImmediate();const t=hA(s,{popupRedirectResolver:Lv,persistence:[KA,NA,Wp]}),n=Dd("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=Bv(i.toString());CA(t,o,()=>o(t.currentUser)),PA(t,c=>o(c))}}const r=kd("auth");return r&&fA(t,`http://${r}`),t}function Hv(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}sA({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=ht("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",Hv().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fv("Browser");const qv={apiKey:"AIzaSyAfsWy2TC4reH-C2B_SuaDgO6vf4GgzEjc",authDomain:"moon-73219.firebaseapp.com",projectId:"moon-73219",appId:"1:236058396603:web:96d8a55306db8d7468e69e"},em=Vd(qv),ln=cw(em),gr=Gv(em),Rn=Cw;async function tm(){if(gr.currentUser)return gr.currentUser;const s=prompt("ADMIN email"),e=prompt("ADMIN password");if(!s||!e)throw new Error("로그인이 필요합니다");const{user:t}=await RA(gr,s,e);return t}function zv(s){return kA(gr,s)}async function Kv(){await xA(gr)}function Xh(s){if(!s)return null;if(typeof(s==null?void 0:s.toDate)=="function")return s.toDate();if(s instanceof Date)return isNaN(s)?null:s;const e=new Date(s);return isNaN(e)?null:e}function Jh(s,e){if(!s||!e)return null;const t=Math.round((e-s)/36e5);return Math.max(0,t)}function Wv(s,e,t){const n=e.bigStageDurations||{},r=e.bigStageStartedAt||{},i=String(s+1),o=n[i];if(o!=null&&!Number.isNaN(Number(o)))return`~${Number(o)}h`;const c=Xh(r[String(s)]),l=Xh(r[i]);if(c&&l){const u=Jh(c,l);return u!=null?`~${u}h`:"–"}if(s===Number(e.big)&&c){const u=Jh(c,t);return u!=null?`~${u}h`:"–"}return"–"}function $v(s,e,t){const n=Wv(s,e,t);return`
    <div class="cell">
      <span class="st">${s}</span>
      <span class="hr">${n}</span>
    </div>
  `}function Qv(s,e,t){const n=document.querySelector(s);n&&(n.innerHTML=`
    <div class="bigstage-box">
      <div class="stage-grid" id="mpv2-stage-grid"></div>
    </div>
  `,tl(s,e,t))}function tl(s,e,t){const n=document.querySelector(s);if(!n)return;const r=n.querySelector("#mpv2-stage-grid");if(!r)return;const i=e.find(u=>u.serverId===t)||e[0];if(!i){r.innerHTML="";return}const o=new Date,c=[],l=Dr;for(let u=1;u<=l;u++)c.push($v(u,i,o));r.innerHTML=c.join("")}let nm=!1;const Zh=document.getElementById("lp-admin-login"),ed=document.getElementById("lp-admin-logout"),td=document.getElementById("lp-admin-status");Zh&&Zh.addEventListener("click",async()=>{try{await tm()}catch(s){alert(s.message)}});ed&&ed.addEventListener("click",async()=>{await Kv()});zv(async s=>{var t;td&&(td.textContent=s?`관리자: ${s.email}`:"로그아웃");let e=!1;if(s)try{const n=await zc(vs(ln,"roles",s.uid));e=n.exists()&&((t=n.data())==null?void 0:t.admin)===!0}catch(n){e=!1,console.warn("[roles] read failed:",n)}nm=e,document.documentElement.classList.toggle("lp-admin-auth",e)});const re={tabs:document.querySelectorAll("[data-lp-tab]"),subTitle:document.getElementById("lp-subtitle"),topTitle:document.getElementById("lp-top-title"),topLoc:document.getElementById("lp-top-location"),topDistBar:document.getElementById("lp-top-distance-bar"),miniUpd:document.getElementById("lp-updated-mini"),cmList:document.getElementById("lp-comments"),cmForm:document.getElementById("lp-comment-form"),cmInput:document.getElementById("lp-comment-input"),cmScope:document.getElementById("lp-comment-scope"),btnDec:document.getElementById("lp-dec"),btnInc:document.getElementById("lp-inc")};let wt="tonbery",Qn=null;const sm=s=>Math.max(0,Math.min(1,s)),Yv=(s,e)=>{var t;return(t=s==null?void 0:s.style)==null?void 0:t.setProperty("--pct",sm(e))},Xv=s=>String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;"),rm=s=>typeof(s==null?void 0:s.toDate)=="function"?s.toDate():s?new Date(s):null;function Jv(s,e){return`${Number(s)}/${Dr}-${Number(e)}`}async function gs(){return await Promise.all(wd.map(async e=>{const t=vs(ln,"progress",e),n=await zc(t);if(!n.exists())return{serverId:e,title:e,big:1,small:0,bigStageStartedAt:{},bigStageDurations:{},updated_at:null};const r=n.data();return{serverId:e,title:r.title??e,big:Number(r.big??1),small:Number(r.small??0),bigStageStartedAt:r.bigStageStartedAt||{},bigStageDurations:r.bigStageDurations||{},updated_at:r.updated_at??null}}))}async function kr(s,e=null){const t=s;let n=e==null?void 0:e[t];if(!n){const i=vs(ln,"progress",t),o=await zc(i),c=o.exists()?o.data():null;n={serverId:t,title:(c==null?void 0:c.title)??t,big:Number((c==null?void 0:c.big)??1),small:Number((c==null?void 0:c.small)??0),bigStageStartedAt:(c==null?void 0:c.bigStageStartedAt)||{},bigStageDurations:(c==null?void 0:c.bigStageDurations)||{},updated_at:(c==null?void 0:c.updated_at)??null}}re.topTitle&&(re.topTitle.textContent=n.title||t),re.topLoc&&(re.topLoc.textContent=Jv(n.big,n.small));const r=sm((n.small??0)/vn);if(Yv(re.topDistBar,r),re.miniUpd){const i=rm(n.updated_at);re.miniUpd.textContent=i?`수정시각: ${Ad(i)}`:""}return{id:t,data:n,pct:r}}async function Za(s){var i;if(await tm(),!nm){alert("관리자 권한이 필요합니다.");return}const e=wt,t=vs(ln,"progress",e);await Pw(ln,async o=>{const l=(await o.get(t)).data()||{};let u=Number(l.big??1),d=Number(l.small??0);const p=u,m=d;d+=s,d>vn?u<Dr?(u+=1,d=0):d=vn:d<0&&(u>1?(u-=1,d=vn):d=0);const y={big:u,small:d,updated_at:Rn()};if(u===p+1&&m===vn&&d===0){const x=l.bigStageStartedAt||{},R=l.bigStageDurations||{},k=new Date,D=rm(x[String(p)]),N={...R};if(D){const G=Math.max(0,Math.round((k-D)/36e5)),q=String(u);N[q]==null&&(N[q]=G)}const M={...x};M[String(u)]||(M[String(u)]=Rn()),M[1]||(M[1]=Rn()),y.bigStageDurations=N,y.bigStageStartedAt=M}else{const x=l.bigStageStartedAt||{};x[1]||(y.bigStageStartedAt={...x,1:Rn()})}o.set(t,y,{merge:!0})});const n=await gs(),r=Object.fromEntries(n.map(o=>[o.serverId,o]));await kr(e,r),tl("#mpv2-progress-root",n,e),(i=window.Route)==null||i.setAll(n),window.dispatchEvent(new Event("lp-progress-updated"))}function Zv(s){const e=re.cmList;if(!e)return;if(!(s!=null&&s.length)){e.innerHTML='<li class="lp-comment" style="opacity:.7">아직 댓글이 없습니다.</li>';return}const t=s.map(n=>{var d;const r=n.data(),i=(r.server_id||"-").toString(),o=(d=r.created_at)!=null&&d.toDate?r.created_at.toDate():null,c=o?Ad(o):"-",l=(r.content??"").toString();return`
      <li class="lp-comment">
        <span class="lp-cm-tag">${(i[0]||"?").toUpperCase()}</span>
        <div>${Xv(l)}</div>
        <time>${c}</time>
      </li>
    `}).join("");e.innerHTML=t}function br(s="all"){if(!re.cmList)return()=>{};typeof Qn=="function"&&(Qn(),Qn=null);const e=hp(ln,"comments"),t=s==="all"?Sh(e,Rh("created_at","desc"),Ph(30)):Sh(e,yw("server_id","==",s),Rh("created_at","desc"),Ph(30));return Qn=vw(t,n=>Zv(n.docs),n=>{console.error("[comments:onSnapshot]",n),re.cmList.innerHTML='<li class="lp-comment" style="opacity:.7">댓글을 불러오지 못했습니다.</li>'}),()=>{Qn&&Qn()}}async function nl(s,e){const t=(e??"").trim();if(!t.length)return;if(t.length>500){alert("댓글은 최대 500자까지 가능합니다.");return}const n=s&&s!=="all"?s:wt;await Aw(hp(ln,"comments"),{server_id:n,content:t,created_at:Rn()})}function nd(s){var e;wt=s,(e=re.tabs)==null||e.forEach(t=>{var r;const n=((r=t==null?void 0:t.dataset)==null?void 0:r.lpTab)===s;t.classList.toggle("is-active",n),t.classList.toggle("on",n),t.setAttribute("aria-current",n?"true":"false")})}async function im(s=null){var e;(e=re.tabs)==null||e.forEach(t=>{t.addEventListener("click",async n=>{var c,l,u;const r=(l=(c=n.currentTarget)==null?void 0:c.dataset)==null?void 0:l.lpTab;if(!r||!wd.includes(r))return;nd(r);const i=await gs(),o=Object.fromEntries(i.map(d=>[d.serverId,d]));await kr(r,o),tl("#mpv2-progress-root",i,r),(u=window.Route)==null||u.setAll(i),re.cmScope&&(re.cmScope.value=r),br(r)},{passive:!0})}),re.btnDec&&re.btnDec.addEventListener("click",()=>Za(-1)),re.btnInc&&re.btnInc.addEventListener("click",()=>Za(1)),re.cmScope&&re.cmScope.addEventListener("change",()=>{const t=re.cmScope.value||"all";br(t)}),re.cmForm&&re.cmInput&&re.cmForm.addEventListener("submit",async t=>{var i;t.preventDefault();const n=((i=re.cmScope)==null?void 0:i.value)||"all",r=re.cmInput.value.trim();if(r)try{await nl(n,r),re.cmInput.value=""}catch{alert("댓글 저장 실패")}});try{nd(wt);const t=s||await gs(),n=Object.fromEntries(t.map(r=>[r.serverId,r]));await kr(wt,n),re.cmScope&&(re.cmScope.value=wt),br(wt)}catch(t){console.error("[LP:init]",t)}}let sd=!1;async function om(){var t;if(sd)return;sd=!0;const s=await gs();Qv("#mpv2-progress-root",s,wt),(t=window.Route)==null||t.setAll(s,{animate:!1});const e=document.querySelector("#server-progress-old");return e&&(e.innerHTML=""),im(s)}async function am(s="tonbery",{title:e,big:t=1,small:n=0}={}){await ww(vs(ln,"progress",s),{title:e??s[0].toUpperCase()+s.slice(1),big:t,small:n,bigStageStartedAt:{[String(t)]:Rn()},bigStageDurations:{},updated_at:Rn()},{merge:!0})}window.LP={seed:am,fetchProgressAll:gs,refreshTop:kr,listenComments:br,postComment:nl,adjustProgress:Za,get active(){return wt}};const rd=Object.freeze(Object.defineProperty({__proto__:null,fetchProgressAll:gs,initLP:im,listenComments:br,mountLP:om,postComment:nl,refreshTop:kr,seedProgress:am},Symbol.toStringTag,{value:"Module"}));om();const eI=document.getElementById("goCanvas"),tI=document.getElementById("goLicense");eI.href=new URL("../licenses/CANVAS.html",location.href).href;tI.href=new URL("../licenses/license.html",location.href).href;const Uo=document.getElementById("homeDd"),sl=document.getElementById("homeToggle");function rl(){Uo.classList.remove("open"),sl.setAttribute("aria-expanded","false")}function nI(){Uo.classList.add("open"),sl.setAttribute("aria-expanded","true")}sl.addEventListener("click",s=>{s.stopPropagation(),Uo.classList.contains("open")?rl():nI()});document.addEventListener("click",s=>{Uo.contains(s.target)||rl()});document.addEventListener("keydown",s=>{s.key==="Escape"&&rl()});
