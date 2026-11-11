// PROTOTYPE A — "The One Shot": one continuous camera move driven by scroll.
// desk → into the camera lens → laptop screen → code assembles a website → back out to the desk.
import * as THREE from 'three';
import { C } from './content.js';

const CSS = `
html,body{margin:0;background:#0c0a08;color:#f3efe8;font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.os-stage{position:fixed;inset:0;z-index:0}
.os-stage canvas{display:block;width:100%;height:100%}
.os-vig{position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse at 50% 45%,transparent 50%,rgba(0,0,0,.6) 100%)}
.os-grain{position:fixed;inset:-50%;pointer-events:none;z-index:2;opacity:.06;animation:osg 1s steps(6) infinite;
 background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")}
@keyframes osg{0%{transform:translate(0,0)}20%{transform:translate(-3%,2%)}40%{transform:translate(2%,-3%)}60%{transform:translate(-2%,-1%)}80%{transform:translate(3%,2%)}}
.os-flash{position:fixed;inset:0;pointer-events:none;opacity:0;z-index:3}
.os-scroll{height:1100vh}
.os-nav{position:fixed;top:0;left:0;right:0;display:flex;justify-content:space-between;align-items:center;padding:22px 4vw;z-index:10;font-size:14px}
.os-nav b{font-family:Fraunces,serif;font-weight:500;font-size:19px;letter-spacing:-.01em}
.os-nav a{color:#f3efe8;opacity:.65;text-decoration:none;margin-left:26px;cursor:pointer;transition:opacity .2s}
.os-nav a:hover{opacity:1}
.os-bar{position:fixed;top:0;left:0;height:2px;z-index:11;width:0;background:linear-gradient(90deg,#ffcf8a,#ff8a5c)}
.os-ov{position:fixed;z-index:5;max-width:min(470px,88vw);opacity:0;pointer-events:none;padding:30px 32px;border-radius:24px;background:rgba(12,9,7,.55);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,230,200,.1)}
.os-ov.hero{background:none;backdrop-filter:none;-webkit-backdrop-filter:none;border:0;padding:0}
.os-ov.l{left:6vw;bottom:13vh}.os-ov.r{right:6vw;bottom:13vh}
.os-ov.c{left:50%;top:50%;transform:translate(-50%,-50%);text-align:center}
.os-ov .k{font-size:12px;letter-spacing:.24em;text-transform:uppercase;color:#ffcf8a;margin-bottom:14px}
.os-ov h1{font-family:Fraunces,serif;font-weight:300;font-size:clamp(60px,9vw,132px);line-height:.9;margin:0 0 14px;letter-spacing:-.03em}
.os-ov h2{font-family:Fraunces,serif;font-weight:300;font-size:clamp(36px,4.6vw,62px);line-height:1;margin:0 0 16px;letter-spacing:-.02em}
.os-ov p{font-size:17px;line-height:1.55;color:rgba(243,239,232,.8);margin:0 0 16px;text-shadow:0 2px 20px rgba(0,0,0,.8)}
.os-ov .tag{font-family:Fraunces,serif;font-style:italic;font-size:28px;color:#ffcf8a;margin:0 0 18px}
.os-ov ul{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:8px}
.os-ov li{border:1px solid rgba(243,239,232,.22);border-radius:99px;padding:7px 14px;font-size:13px;backdrop-filter:blur(10px);background:rgba(10,8,6,.35)}
.os-ov .work li{border-radius:10px;display:flex;flex-direction:column;gap:2px;padding:10px 14px}
.os-ov .work li small{opacity:.6;font-size:11px}
.os-btn{pointer-events:auto;display:inline-block;margin-top:6px;padding:15px 28px;border-radius:99px;background:#ffcf8a;color:#1a1208;font-weight:600;text-decoration:none}
.os-hud{position:fixed;inset:9vh 7vw;z-index:4;pointer-events:none;opacity:0;font:12px/1 'JetBrains Mono',monospace;color:#fff}
.os-hud i{position:absolute;width:40px;height:40px;border:2px solid rgba(255,255,255,.85)}
.os-hud i:nth-child(1){top:0;left:0;border-right:0;border-bottom:0}.os-hud i:nth-child(2){top:0;right:0;border-left:0;border-bottom:0}
.os-hud i:nth-child(3){bottom:0;left:0;border-right:0;border-top:0}.os-hud i:nth-child(4){bottom:0;right:0;border-left:0;border-top:0}
.os-hud .rec{position:absolute;top:14px;left:60px;display:flex;align-items:center;gap:8px}
.os-hud .rec:before{content:'';width:10px;height:10px;border-radius:50%;background:#ff3b3b;animation:osr 1s infinite}
@keyframes osr{50%{opacity:.2}}
.os-hud .set{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);letter-spacing:.15em}
.os-hint{position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:5;font-size:11px;letter-spacing:.3em;text-transform:uppercase;opacity:.55}
@media (max-width:700px){.os-nav a{display:none}.os-ov.l,.os-ov.r{left:6vw;right:6vw;bottom:11vh}}
`;

const OVERLAYS = [
  { a: -1, b: 0.11, cls: 'l hero', html: `<div class="k">${C.domain}</div><h1>${C.brand}</h1><p class="tag">${C.tagline}</p><p>${C.intro}</p>` },
  { a: 0.17, b: 0.29, cls: 'r', html: svc(C.services[1]) + `<p style="margin-top:14px">${C.services[2].title}: ${C.services[2].line}</p>` },
  { a: 0.44, b: 0.56, cls: 'l', html: svc(C.services[0]) },
  { a: 0.64, b: 0.79, cls: 'r', html: `<div class="k">Selected work</div><h2>From idea to live.</h2><ul class="work">${C.work.map(w => `<li>${w.title}<small>${w.kind}</small></li>`).join('')}</ul>` },
  { a: 0.83, b: 0.905, cls: 'l', html: `<div class="k">How pricing works</div><h2>${C.values.title}</h2><p>${C.values.body}</p>` },
  { a: 0.925, b: 2, cls: 'r', html: `<div class="k">About</div><h2>${C.about.title}</h2><p>${C.about.body}</p><h2 style="margin-top:28px">${C.contact.title}</h2><a class="os-btn" href="mailto:${C.contact.email}">${C.contact.email}</a>` },
];
function svc(s) { return `<div class="k">${s.title}</div><h2>${s.head}</h2><p>${s.line}</p><ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>`; }

const NAV = [['Photo & Video', 0.23], ['Web & IT', 0.5], ['Work', 0.72], ['Pricing', 0.87], ['Contact', 1]];

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const seg = (t, a, b) => clamp((t - a) / (b - a));
const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const sstep = (a, b, t) => { const x = clamp((t - a) / (b - a)); return x * x * (3 - 2 * x); };
const V = (x, y, z) => new THREE.Vector3(x, y, z);

export function mount(root) {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.append(style);
  root.insertAdjacentHTML('afterbegin', `
    <div class="os-stage"><canvas></canvas></div><div class="os-vig"></div><div class="os-grain"></div><div class="os-flash"></div>
    <div class="os-hud"><i></i><i></i><i></i><i></i><div class="rec">REC 00:00:12</div><div class="set">50mm · f/1.8 · 1/250 · ISO 200</div></div>
    <div class="os-bar"></div>
    <nav class="os-nav"><b>${C.brand}</b><div>${NAV.map(([l, t]) => `<a data-t="${t}">${l}</a>`).join('')}</div></nav>
    ${OVERLAYS.map((o, i) => `<div class="os-ov ${o.cls}" data-i="${i}">${o.html}</div>`).join('')}
    <div class="os-hint">Scroll</div>
    <div class="os-scroll"></div>`);

  const $ = s => root.querySelector(s);
  const ovEls = [...root.querySelectorAll('.os-ov')];
  const flashEl = $('.os-flash'), hud = $('.os-hud'), bar = $('.os-bar'), hint = $('.os-hint');
  root.querySelectorAll('.os-nav a').forEach(a => (a.onclick = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    scrollTo({ top: +a.dataset.t * max, behavior: 'smooth' });
  }));

  const renderer = new THREE.WebGLRenderer({ canvas: $('.os-stage canvas'), antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const cam = new THREE.PerspectiveCamera(42, 1, 0.002, 120);

  const D = buildDesk(renderer);
  const K = buildCodeWorld();

  const resize = () => {
    renderer.setSize(innerWidth, innerHeight, false);
    cam.aspect = innerWidth / innerHeight;
    cam.updateProjectionMatrix();
  };
  addEventListener('resize', resize);
  resize();

  // Key points
  const W0 = V(0.35, 0.95, 1.55), L0 = V(0, 0.02, 0);
  const W1 = V(0.05, 0.55, 1.05), L1 = V(-0.15, 0.04, 0);
  const lensDir = D.lensFront.clone().sub(D.lensBack).normalize();
  const approach = new THREE.CatmullRomCurve3([
    W1, V(-0.15, 0.32, 0.75),
    D.lensFront.clone().addScaledVector(lensDir, 0.32).add(V(0, 0.03, 0)),
    D.lensFront.clone().addScaledVector(lensDir, 0.045),
  ]);
  const WEND = V(0.05, 0.85, 1.35), LEND = V(0.42, 0.05, 0.0);

  let cur = 0, screenState = '';
  const flashes = [[0.42, '#fff8ec'], [0.58, '#0d1117'], [0.8, '#0d1117']];

  function cameraAt(t, time) {
    const pos = new THREE.Vector3(), look = new THREE.Vector3();
    let scene = D.scene;
    if (t < 0.14) {
      const u = ease(seg(t, 0, 0.14));
      pos.lerpVectors(W0, W1, u); look.lerpVectors(L0, L1, u);
    } else if (t < 0.3) {
      const u = ease(seg(t, 0.14, 0.3));
      pos.copy(approach.getPoint(u)); look.lerpVectors(L1, D.lensFront, sstep(0, 0.7, u));
    } else if (t < 0.42) {
      const u = seg(t, 0.3, 0.42), e = u * u * (3 - 2 * u) * 0.35 + u * u * 0.65;
      pos.lerpVectors(D.lensFront.clone().addScaledVector(lensDir, 0.045), D.lensBack.clone().addScaledVector(lensDir, 0.006), e);
      look.copy(pos).addScaledVector(lensDir, -1);
    } else if (t < 0.58) {
      const u = ease(seg(t, 0.42, 0.58));
      const from = D.screenC.clone().addScaledVector(D.screenN, 0.75).add(V(0.12, 0.08, 0));
      pos.lerpVectors(from, D.screenC.clone().addScaledVector(D.screenN, 0.022), u);
      look.copy(D.screenC);
    } else if (t < 0.8) {
      scene = K.scene;
      const u = seg(t, 0.58, 0.8);
      const z = THREE.MathUtils.lerp(1.2, -7.6, ease(sstep(0, 0.88, u)));
      pos.set(Math.sin(u * 3) * 0.25 * (1 - u), Math.cos(u * 2.4) * 0.15 * (1 - u), z);
      look.lerpVectors(V(0, 0, z - 6), V(0, 0, -12), sstep(0.45, 0.85, u));
      K.update(u, time);
    } else {
      const u = ease(seg(t, 0.8, 1));
      pos.lerpVectors(D.screenC.clone().addScaledVector(D.screenN, 0.022), WEND, u);
      look.lerpVectors(D.screenC, LEND, u);
    }
    // a touch of handheld drift
    const d = 0.0025 * Math.min(1, pos.distanceTo(look));
    pos.x += Math.sin(time * 0.0007) * d; pos.y += Math.cos(time * 0.0009) * d;
    return { pos, look, scene };
  }

  function frame(time) {
    const max = document.documentElement.scrollHeight - innerHeight;
    const tgt = max > 0 ? clamp(scrollY / max) : 0;
    cur += (tgt - cur) * 0.075;
    if (Math.abs(tgt - cur) < 1e-5) cur = tgt;
    const t = cur;

    // laptop screen content
    let st;
    if (t < 0.42) st = 'idle';
    else if (t < 0.6) st = 'code' + Math.round(seg(t, 0.43, 0.56) * 300);
    else st = 'site';
    if (st !== screenState) {
      screenState = st;
      if (st === 'idle') D.drawCode(0.18); else if (st === 'site') D.drawSite(); else D.drawCode(seg(t, 0.43, 0.56));
    }
    D.sensorLight.intensity = 0.05 + sstep(0.33, 0.42, t) * (1 - sstep(0.42, 0.44, t)) * 3;

    const { pos, look, scene } = cameraAt(t, time);
    cam.position.copy(pos);
    cam.lookAt(look);
    renderer.render(scene, cam);

    // overlays
    ovEls.forEach((el, i) => {
      const o = OVERLAYS[i];
      const op = Math.min(sstep(o.a, o.a + 0.02, t), 1 - sstep(o.b - 0.02, o.b, t));
      el.style.opacity = op;
      el.style.pointerEvents = op > 0.5 ? 'auto' : 'none';
      if (!o.cls.includes('c')) el.style.transform = `translateY(${(1 - op) * 24}px)`;
    });
    let f = 0, fc = '#fff';
    for (const [c, col] of flashes) { const v = 1 - Math.abs(t - c) / 0.016; if (v > f) { f = v; fc = col; } }
    flashEl.style.opacity = clamp(f);
    flashEl.style.background = fc;
    hud.style.opacity = Math.min(sstep(0.27, 0.31, t), 1 - sstep(0.4, 0.42, t));
    bar.style.width = t * 100 + '%';
    hint.style.opacity = 0.55 * (1 - sstep(0, 0.03, t));
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---------------- desk scene ---------------- */
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); draw(g, w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return { tex: t, g, c };
}

function buildDesk(renderer) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0c0a08');
  scene.fog = new THREE.Fog('#0c0a08', 2.2, 6);

  const wood = canvasTex(1024, 512, (g, w, h) => {
    g.fillStyle = '#4a3122'; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 260; i++) {
      const y = Math.random() * h;
      g.strokeStyle = `rgba(${15 + Math.random() * 40},${8 + Math.random() * 18},4,${0.12 + Math.random() * 0.3})`;
      g.lineWidth = 0.5 + Math.random() * 2.5;
      g.beginPath(); g.moveTo(0, y);
      for (let x = 0; x <= w; x += 24) g.lineTo(x, y + Math.sin(x * 0.004 + i) * 7 + Math.random());
      g.stroke();
    }
  }).tex;
  wood.wrapS = wood.wrapT = THREE.RepeatWrapping; wood.repeat.set(1, 1);

  const desk = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.06, 1.4), new THREE.MeshStandardMaterial({ map: wood, roughness: 0.55 }));
  desk.position.y = -0.03; desk.receiveShadow = true; scene.add(desk);

  // lights
  scene.add(new THREE.HemisphereLight(0xffeedd, 0x1a120c, 0.45));
  const key = new THREE.SpotLight(0xffd2a0, 14, 5, 0.95, 0.6, 1.4);
  key.position.set(-0.9, 1.35, 0.5); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -0.0004; key.shadow.camera.near = 0.3;
  scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0x8fb4ff, 0.7); rim.position.set(0.8, 0.7, -1.6); scene.add(rim);

  const alu = new THREE.MeshStandardMaterial({ color: 0xa4a6ad, metalness: 0.85, roughness: 0.32 });
  const black = new THREE.MeshStandardMaterial({ color: 0x141414, roughness: 0.5, metalness: 0.25 });
  const shadowed = m => { m.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); return m; };

  // laptop
  const laptop = new THREE.Group(); laptop.position.set(0.2, 0, -0.14); laptop.rotation.y = -0.28;
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.016, 0.235), alu); base.position.y = 0.008;
  const kb = new THREE.Mesh(new THREE.PlaneGeometry(0.29, 0.1), new THREE.MeshStandardMaterial({ color: 0x1b1b1d, roughness: 0.8 }));
  kb.rotation.x = -Math.PI / 2; kb.position.set(0, 0.0165, -0.03);
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(0.11, 0.07), new THREE.MeshStandardMaterial({ color: 0x8d8f96, roughness: 0.4, metalness: 0.6 }));
  pad.rotation.x = -Math.PI / 2; pad.position.set(0, 0.0166, 0.065);
  const hinge = new THREE.Group(); hinge.position.set(0, 0.016, -0.1175); hinge.rotation.x = -0.3;
  const lid = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.225, 0.008), alu); lid.position.set(0, 0.1125, -0.004);
  const scr = canvasTex(1024, 640, () => {});
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.316, 0.198), new THREE.MeshBasicMaterial({ map: scr.tex, toneMapped: false }));
  screen.position.set(0, 0.114, 0.0006);
  hinge.add(lid, screen); laptop.add(base, kb, pad, hinge); scene.add(shadowed(laptop));
  screen.castShadow = false;

  // camera
  const camObj = new THREE.Group(); camObj.position.set(-0.45, 0, 0.12); camObj.rotation.y = 0.6;
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.09, 0.075), black); body.position.y = 0.045;
  const hump = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.026, 0.055), black); hump.position.set(0, 0.1, 0);
  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.088, 0.09), black); grip.position.set(-0.058, 0.044, 0.008);
  const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.01, 24), alu); dial.position.set(0.045, 0.095, 0);
  const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.006, 16), new THREE.MeshStandardMaterial({ color: 0xc23b22 })); btn.position.set(-0.055, 0.092, 0.02);
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.075, 48, 1, true), black);
  barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 0.045, 0.075);
  camObj.add(body, hump, grip, dial, btn, barrel);
  for (let i = 0; i < 3; i++) {
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.0355, 0.0018, 8, 48), i === 1 ? alu : new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.9 }));
    r.position.set(0, 0.045, 0.05 + i * 0.022); camObj.add(r);
  }
  const frontRing = new THREE.Mesh(new THREE.TorusGeometry(0.032, 0.003, 12, 48), alu); frontRing.position.set(0, 0.045, 0.1125); camObj.add(frontRing);
  // the tunnel you fly through
  const tunnel = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, 0.2, 48, 1, true),
    new THREE.MeshStandardMaterial({ color: 0x1c1d22, roughness: 0.45, metalness: 0.4, side: THREE.BackSide }));
  tunnel.rotation.x = Math.PI / 2; tunnel.position.set(0, 0.045, 0.0125); camObj.add(tunnel);
  const glowCols = [0x6fb7ff, 0xffb35a, 0xa98bff, 0x6fffd8];
  for (let i = 0; i < 9; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.0285 - i * 0.0006, 0.0009, 8, 64),
      new THREE.MeshStandardMaterial({ color: 0x111111, emissive: glowCols[i % 4], emissiveIntensity: 3.5, metalness: 0.5, roughness: 0.3 }));
    ring.position.set(0, 0.045, 0.105 - i * 0.021); camObj.add(ring);
  }
  [0.108, 0.07, 0.01, -0.04].forEach(z => {
    const glass = new THREE.Mesh(new THREE.CircleGeometry(0.03, 48), new THREE.MeshPhysicalMaterial({
      color: 0x9fc4ff, transparent: true, opacity: 0.14, roughness: 0, metalness: 0.1, side: THREE.DoubleSide, depthWrite: false,
    }));
    glass.position.set(0, 0.045, z); camObj.add(glass);
  });
  const aperture = new THREE.Mesh(new THREE.RingGeometry(0.014, 0.031, 6), new THREE.MeshStandardMaterial({ color: 0x6a6c72, metalness: 0.8, roughness: 0.35, side: THREE.DoubleSide }));
  aperture.position.set(0, 0.045, 0.03); aperture.rotation.z = 0.3; camObj.add(aperture);
  const sensorTex = canvasTex(256, 170, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, h);
    ['#7a5cff', '#36c6ff', '#4dffb5', '#ffd25a', '#ff6a8a'].forEach((c, i, a) => gr.addColorStop(i / (a.length - 1), c));
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(0,0,0,.25)';
    for (let x = 0; x < w; x += 4) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
  }).tex;
  const sensor = new THREE.Mesh(new THREE.PlaneGeometry(0.036, 0.024), new THREE.MeshBasicMaterial({ map: sensorTex, toneMapped: false }));
  sensor.position.set(0, 0.045, -0.085); camObj.add(sensor);
  const backCap = new THREE.Mesh(new THREE.CircleGeometry(0.032, 48), new THREE.MeshBasicMaterial({ color: 0x050506 })); backCap.position.set(0, 0.045, -0.087); camObj.add(backCap);
  const lensLight = new THREE.PointLight(0xcfe3ff, 0.12, 0.3, 1); lensLight.position.set(0, 0.045, 0.085); camObj.add(lensLight);
  const sensorLight = new THREE.PointLight(0xffe7c2, 0.05, 0.25, 1.5); sensorLight.position.set(0, 0.045, -0.06); camObj.add(sensorLight);
  scene.add(shadowed(camObj));
  tunnel.castShadow = false;

  // props
  const ceramic = new THREE.MeshStandardMaterial({ color: 0xf1ece4, roughness: 0.35 });
  const mug = new THREE.Group(); mug.position.set(0.62, 0, 0.18);
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.042, 0.036, 0.095, 40, 1, true), ceramic); cup.position.y = 0.0475;
  cup.material.side = THREE.DoubleSide;
  const coffee = new THREE.Mesh(new THREE.CircleGeometry(0.04, 40), new THREE.MeshStandardMaterial({ color: 0x3a2214, roughness: 0.2 }));
  coffee.rotation.x = -Math.PI / 2; coffee.position.y = 0.082;
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.036, 40), ceramic); bottom.rotation.x = -Math.PI / 2; bottom.position.y = 0.001;
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.024, 0.007, 12, 24, Math.PI), ceramic);
  handle.position.set(0.042, 0.05, 0); handle.rotation.z = -Math.PI / 2;
  mug.add(cup, coffee, bottom, handle); scene.add(shadowed(mug));

  const note = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.012, 0.27), new THREE.MeshStandardMaterial({
    map: canvasTex(400, 540, (g, w, h) => {
      g.fillStyle = '#efe6d4'; g.fillRect(0, 0, w, h);
      g.strokeStyle = 'rgba(70,110,170,.25)'; for (let y = 60; y < h; y += 26) { g.beginPath(); g.moveTo(20, y); g.lineTo(w - 20, y); g.stroke(); }
      g.fillStyle = '#2a2a3a'; g.font = '34px Caveat, cursive'; g.fillText('Grace Labs — ideas', 30, 50);
      g.font = '26px Caveat, cursive'; ['• bakery site (de/en/hu)', '• church livestream', '• Sunday photos', '• pay what fits ♥'].forEach((s, i) => g.fillText(s, 34, 108 + i * 52));
    }).tex, roughness: 0.9,
  }));
  note.position.set(-0.08, 0.006, 0.36); note.rotation.y = 0.18; scene.add(shadowed(note));
  const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.004, 0.15, 12), new THREE.MeshStandardMaterial({ color: 0x1c3d6e, metalness: 0.4, roughness: 0.3 }));
  pen.rotation.z = Math.PI / 2; pen.rotation.y = 0.5; pen.position.set(0.1, 0.016, 0.38); scene.add(shadowed(pen));
  const phone = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.008, 0.155), black); phone.position.set(0.66, 0.004, -0.18); phone.rotation.y = -0.4; scene.add(shadowed(phone));
  const plant = new THREE.Group(); plant.position.set(-0.85, 0, -0.35);
  const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.055, 0.12, 32), new THREE.MeshStandardMaterial({ color: 0xc9b8a2, roughness: 0.8 })); pot.position.y = 0.06;
  plant.add(pot);
  for (let i = 0; i < 9; i++) {
    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 8), new THREE.MeshStandardMaterial({ color: 0x3f6b3a, roughness: 0.6 }));
    leaf.scale.set(0.35, 1.3, 0.12); const a = (i / 9) * Math.PI * 2;
    leaf.position.set(Math.cos(a) * 0.035, 0.17 + (i % 3) * 0.02, Math.sin(a) * 0.035); leaf.rotation.set(Math.sin(a) * 0.5, a, Math.cos(a) * 0.5);
    plant.add(leaf);
  }
  scene.add(shadowed(plant));

  scene.updateMatrixWorld(true);
  const lensFront = camObj.localToWorld(V(0, 0.045, 0.1125));
  const lensBack = camObj.localToWorld(V(0, 0.045, -0.07));
  const screenC = screen.localToWorld(V(0, 0, 0));
  const screenN = V(0, 0, 1).applyQuaternion(screen.getWorldQuaternion(new THREE.Quaternion())).normalize();

  return {
    scene, lensFront, lensBack, screenC, screenN, sensorLight,
    drawCode: p => { drawCode(scr.g, 1024, 640, p); scr.tex.needsUpdate = true; },
    drawSite: () => { drawSite(scr.g, 1024, 640); scr.tex.needsUpdate = true; },
  };
}

const CODE = [
  [['kw', 'const '], ['id', 'site'], ['op', ' = '], ['fn', 'craft'], ['op', '({']],
  [['id', '  client'], ['op', ': '], ['str', '"your bakery"'], ['op', ',']],
  [['id', '  pages'], ['op', ': ['], ['str', '"home"'], ['op', ', '], ['str', '"menu"'], ['op', ', '], ['str', '"contact"'], ['op', '],']],
  [['id', '  languages'], ['op', ': ['], ['str', '"de"'], ['op', ', '], ['str', '"en"'], ['op', ', '], ['str', '"hu"'], ['op', '],']],
  [['id', '  photos'], ['op', ': '], ['fn', 'shoot'], ['op', '('], ['str', '"golden hour"'], ['op', '),']],
  [['id', '  budget'], ['op', ': '], ['str', '"pay what fits"'], ['op', ',']],
  [['op', '});']],
  [['op', '']],
  [['kw', 'await '], ['id', 'site'], ['op', '.'], ['fn', 'launch'], ['op', '();  '], ['cm', '// live ✨']],
];
const COL = { kw: '#ff7b72', id: '#e6edf3', op: '#8b949e', fn: '#d2a8ff', str: '#a5d6ff', cm: '#7ee787' };
const TOTAL = CODE.flat().reduce((n, [, s]) => n + s.length, 0);

function drawCode(g, w, h, p) {
  g.fillStyle = '#0d1117'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#161b22'; g.fillRect(0, 0, w, 44);
  ['#ff5f56', '#ffbd2e', '#27c93f'].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(28 + i * 24, 22, 7, 0, 7); g.fill(); });
  g.fillStyle = '#8b949e'; g.font = '18px "JetBrains Mono", monospace'; g.fillText('site.js — Grace Labs', 120, 28);
  g.font = '27px "JetBrains Mono", monospace';
  let left = Math.floor(p * TOTAL), y = 100, cx = 70, cy = 100;
  CODE.forEach((line, li) => {
    let x = 70;
    g.fillStyle = '#3b434d'; g.fillText(String(li + 1).padStart(2), 18, y);
    for (const [k, s] of line) {
      const part = s.slice(0, Math.max(0, left)); left -= s.length;
      g.fillStyle = COL[k]; g.fillText(part, x, y); x += g.measureText(part).width;
      if (part.length) { cx = x; cy = y; }
    }
    y += 52;
  });
  if (p < 1) { g.fillStyle = '#ffcf8a'; g.fillRect(cx + 2, cy - 24, 14, 30); }
}

function drawSite(g, w, h) {
  g.fillStyle = '#f6f1ea'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#fff'; g.fillRect(0, 0, w, 58);
  g.fillStyle = '#2a1d12'; g.font = '600 24px Fraunces, serif'; g.fillText('Bakery Müller', 36, 38);
  g.font = '16px Inter, sans-serif'; g.fillStyle = '#7a6e60';
  ['Menu', 'About', 'Visit'].forEach((s, i) => g.fillText(s, w - 260 + i * 80, 36));
  g.fillStyle = '#1b1b1f'; g.font = '300 58px Fraunces, serif'; g.fillText('Fresh every', 50, 170); g.fillText('morning.', 50, 232);
  g.fillStyle = '#9b8f80'; g.font = '18px Inter, sans-serif'; g.fillText('Sourdough, croissants & coffee since 1987.', 52, 275);
  g.fillStyle = '#e8783a'; roundRect(g, 52, 302, 170, 50, 25); g.fill();
  g.fillStyle = '#fff'; g.font = '600 17px Inter, sans-serif'; g.fillText('See the menu', 78, 333);
  const gr = g.createLinearGradient(560, 90, 960, 380); gr.addColorStop(0, '#f0b77b'); gr.addColorStop(1, '#9a5b2c');
  g.fillStyle = gr; roundRect(g, 560, 90, 410, 290, 18); g.fill();
  g.fillStyle = 'rgba(255,255,255,.25)'; g.beginPath(); g.ellipse(765, 250, 120, 60, -0.2, 0, 7); g.fill();
  [50, 370, 690].forEach((x, i) => {
    g.fillStyle = '#ebe2d5'; roundRect(g, x, 420, 285, 180, 14); g.fill();
    g.fillStyle = '#2a1d12'; g.font = '500 22px Fraunces, serif'; g.fillText(['Breads', 'Pastries', 'Coffee'][i], x + 22, 460);
  });
}
function roundRect(g, x, y, w, h, r) { g.beginPath(); g.roundRect(x, y, w, h, r); }

/* ---------------- code world ---------------- */
function buildCodeWorld() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0d1117');
  scene.fog = new THREE.Fog('#0d1117', 3, 24);

  const snippets = [
    ['<header class="hero">', '  <h1>Fresh every morning.</h1>', '  <a href="/menu">See the menu</a>', '</header>'],
    ['.hero {', '  display: grid;', '  gap: 2rem;', '}'],
    ['export async function', '  getMenu(lang) {', '  return db.items(lang)', '}'],
    ['photos.map(p =>', '  <img src={p.url}', '   loading="lazy" />)'],
    ['const i18n = {', '  de: "Frisch jeden Morgen",', '  hu: "Mindig friss"', '}'],
    ['fetch("/api/booking", {', '  method: "POST",', '  body', '})'],
  ];
  const codeTex = snippets.map(lines => canvasTex(512, 256, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.font = '24px "JetBrains Mono", monospace';
    lines.forEach((l, i) => { g.fillStyle = ['#a5d6ff', '#d2a8ff', '#e6edf3', '#7ee787'][(i + l.length) % 4]; g.fillText(l, 12, 46 + i * 48); });
  }).tex);

  const RECTS = [
    { x: 0, y: 0, w: 4.2, h: 3.1, c: '#f6f1ea', z: -0.03 },
    { x: 0, y: 1.32, w: 4.0, h: 0.24, c: '#ffffff' },
    { x: -0.95, y: 0.62, w: 1.8, h: 0.46, c: '#f6f1ea', text: 'Fresh every morning.' },
    { x: -1.15, y: 0.2, w: 1.4, h: 0.1, c: '#b5aa9b' },
    { x: -1.5, y: -0.12, w: 0.7, h: 0.2, c: '#e8783a' },
    { x: 1.0, y: 0.42, w: 1.8, h: 1.15, c: '#c99a6b', grad: true },
    { x: -1.35, y: -0.95, w: 1.2, h: 0.75, c: '#ebe2d5' },
    { x: 0, y: -0.95, w: 1.2, h: 0.75, c: '#ebe2d5' },
    { x: 1.35, y: -0.95, w: 1.2, h: 0.75, c: '#ebe2d5' },
  ];
  const PAGE_Z = -12;
  const tiles = RECTS.map((r, i) => {
    let mat;
    if (r.text || r.grad) {
      const t = canvasTex(512, Math.round(512 * r.h / r.w), (g, w, h) => {
        if (r.grad) { const gr = g.createLinearGradient(0, 0, w, h); gr.addColorStop(0, '#f0b77b'); gr.addColorStop(1, '#9a5b2c'); g.fillStyle = gr; }
        else g.fillStyle = r.c;
        g.fillRect(0, 0, w, h);
        if (r.text) { g.fillStyle = '#1b1b1f'; g.font = `300 ${h * 0.42}px Fraunces, serif`; g.fillText(r.text, 4, h * 0.62); }
      }).tex;
      mat = new THREE.MeshBasicMaterial({ map: t, transparent: true, opacity: 0 });
    } else mat = new THREE.MeshBasicMaterial({ color: r.c, transparent: true, opacity: 0 });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(r.w, r.h), mat);
    m.position.set(r.x, r.y, PAGE_Z + (r.z || 0) + 0.002 * i);
    scene.add(m);
    return m;
  });

  const planes = [];
  for (let i = 0; i < 80; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 0.8), new THREE.MeshBasicMaterial({
      map: codeTex[i % codeTex.length], transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    const r = 1.2 + Math.random() * 4.5, a = Math.random() * Math.PI * 2;
    m.position.set(Math.cos(a) * r, Math.sin(a) * r * 0.65, -1 - Math.random() * 20);
    m.rotation.set((Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.3);
    m.userData = { start: m.position.clone(), rot: m.rotation.clone(), target: RECTS[i] && i > 0 ? RECTS[i] : null, dir: V(Math.cos(a), Math.sin(a), 0) };
    scene.add(m); planes.push(m);
  }

  const N = 1500, pts = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pts[i * 3] = (Math.random() - 0.5) * 16; pts[i * 3 + 1] = (Math.random() - 0.5) * 10; pts[i * 3 + 2] = 4 - Math.random() * 30; }
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.BufferAttribute(pts, 3));
  const dust = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0x7fc8ff, size: 0.02, transparent: true, opacity: 0.6 }));
  scene.add(dust);

  function update(u, time) {
    const a = sstep(0.35, 0.8, u);
    planes.forEach((m, i) => {
      const d = m.userData;
      if (d.target) {
        m.position.lerpVectors(d.start, V(d.target.x, d.target.y, PAGE_Z + 0.05), a);
        m.scale.set(THREE.MathUtils.lerp(1, d.target.w / 1.6, a), THREE.MathUtils.lerp(1, d.target.h / 0.8, a), 1);
        m.rotation.set(d.rot.x * (1 - a), d.rot.y * (1 - a), d.rot.z * (1 - a));
        m.material.opacity = 0.9 * (1 - sstep(0.75, 0.95, u));
      } else {
        m.position.copy(d.start).addScaledVector(d.dir, a * 7);
        m.position.y += Math.sin(time * 0.0006 + i) * 0.05;
        m.material.opacity = 0.75 * (1 - a);
      }
    });
    tiles.forEach((m, i) => {
      const k = sstep(0.55 + i * 0.025, 0.72 + i * 0.025, u);
      m.material.opacity = k;
      m.scale.setScalar(0.85 + 0.15 * k);
    });
    dust.material.opacity = 0.6 * (1 - a * 0.7);
  }
  return { scene, update };
}
