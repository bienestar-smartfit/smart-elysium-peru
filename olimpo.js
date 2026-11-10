/* Música y animaciones del Olimpo */
(function(){
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = s => document.querySelector(s);

/* ---------- Música ---------- */
const audio = new Audio('musica-olimpo.mp3');
audio.loop = true; audio.preload = 'auto'; audio.volume = 0;
const btn = document.createElement('button');
btn.id = 'lira'; btn.setAttribute('aria-label','Activar música');
btn.innerHTML = `<svg viewBox="0 0 48 48" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 8c-6 6-4 18 4 22h16c8-4 10-16 4-22"/><path d="M10 8h6M32 8h6M16 30v10h16V30M14 40h20"/><path d="M20 14v16M24 12v18M28 14v16"/></g></svg><span class="eq"><i></i><i></i><i></i></span>`;
document.body.appendChild(btn);
let fadeT;
const fade = (to, ms=1600) => { clearInterval(fadeT); const from=audio.volume, t0=performance.now();
  fadeT=setInterval(()=>{const k=Math.min(1,(performance.now()-t0)/ms); audio.volume=from+(to-from)*k; if(k>=1){clearInterval(fadeT); if(to===0) audio.pause();}},40); };
const play = () => audio.play().then(()=>{ fade(.55); btn.classList.add('sonando'); btn.setAttribute('aria-label','Pausar música'); }).catch(()=>{});
const stop = () => { fade(0,700); btn.classList.remove('sonando'); btn.setAttribute('aria-label','Activar música'); };
btn.addEventListener('click', () => btn.classList.contains('sonando') ? stop() : play());
document.addEventListener('visibilitychange', () => { if (document.hidden && !audio.paused) audio.pause(); else if (!document.hidden && btn.classList.contains('sonando')) audio.play(); });

/* ---------- Rayo de Zeus al entrar ---------- */
const rayo = document.createElement('div');
rayo.id = 'rayo';
rayo.innerHTML = `<svg viewBox="0 0 120 400" preserveAspectRatio="xMidYMin meet"><path d="M70 0 L38 170 L64 170 L30 400 L96 140 L68 140 L92 0Z" fill="#fff8d6" stroke="#fdb813" stroke-width="5" stroke-linejoin="round"/></svg>`;
document.body.appendChild(rayo);
$('#entrar')?.addEventListener('click', () => {
  play();
  if (reduce) return;
  rayo.classList.remove('caer'); void rayo.offsetWidth; rayo.classList.add('caer');
  if (navigator.vibrate) navigator.vibrate([30,40,60]);
});

if (reduce) return;

/* ---------- Polvo de ambrosía (partículas doradas) ---------- */
const cv = document.createElement('canvas'); cv.id = 'ambrosia'; document.body.appendChild(cv);
const ctx = cv.getContext('2d'); let W,H,DPR=Math.min(2,devicePixelRatio||1);
const N = innerWidth < 700 ? 26 : 50;
const P = [];
const size = () => { W=cv.width=innerWidth*DPR; H=cv.height=innerHeight*DPR; cv.style.width=innerWidth+'px'; cv.style.height=innerHeight+'px'; };
size(); addEventListener('resize', size);
const nueva = (y) => ({x:Math.random()*W, y:y ?? Math.random()*H, r:(Math.random()*1.8+.6)*DPR, vy:-(Math.random()*.35+.12)*DPR, vx:(Math.random()-.5)*.2*DPR, f:Math.random()*6.28, s:Math.random()<.18});
for (let i=0;i<N;i++) P.push(nueva());
const estrella = (x,y,r) => { ctx.beginPath(); for(let i=0;i<8;i++){const a=i*Math.PI/4, rr=i%2?r*.35:r*1.8; ctx.lineTo(x+Math.cos(a)*rr,y+Math.sin(a)*rr);} ctx.closePath(); ctx.fill(); };
const chispas = [];
(function loop(t){
  ctx.clearRect(0,0,W,H);
  for (const p of P){
    p.y+=p.vy; p.x+=p.vx+Math.sin(t/1400+p.f)*.15*DPR; p.f+=.01;
    if (p.y < -10) Object.assign(p, nueva(H+10));
    const a = .35+.45*Math.abs(Math.sin(t/900+p.f*3));
    ctx.fillStyle = `rgba(253,184,19,${a})`;
    if (p.s) estrella(p.x,p.y,p.r*1.6); else { ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fill(); }
  }
  for (let i=chispas.length-1;i>=0;i--){ const c=chispas[i]; c.x+=c.vx; c.y+=c.vy; c.vy+=.06*DPR; c.v-=.022;
    if (c.v<=0){chispas.splice(i,1);continue;} ctx.fillStyle=`rgba(253,184,19,${c.v})`; estrella(c.x,c.y,c.r*c.v); }
  requestAnimationFrame(loop);
})(0);

/* ---------- Destello dorado al tocar ---------- */
addEventListener('pointerdown', e => {
  for (let i=0;i<10;i++){ const a=Math.random()*6.28, v=(Math.random()*2.5+1.5)*DPR;
    chispas.push({x:e.clientX*DPR,y:e.clientY*DPR,vx:Math.cos(a)*v,vy:Math.sin(a)*v-1*DPR,r:(Math.random()*2+2)*DPR,v:1}); }
});

/* ---------- Destellos sobre el título ---------- */
document.querySelectorAll('.hero .titulo, #portal .titulo').forEach(img => {
  const box = document.createElement('div'); box.className = 'brillos';
  img.parentNode.insertBefore(box, img); box.appendChild(img);
  [[8,20],[22,8],[78,12],[92,30],[50,4],[15,70],[88,72],[60,92]].forEach(([x,y],i) => {
    const s=document.createElement('span'); s.style.left=x+'%'; s.style.top=y+'%'; s.style.animationDelay=(i*.45)+'s'; box.appendChild(s); });
});

/* ---------- Nubes del Olimpo ---------- */
const nube = w => `<svg viewBox="0 0 240 90" width="${w}"><path d="M30 80 Q0 80 8 58 Q14 40 40 46 Q46 18 80 22 Q100 0 130 16 Q160 4 176 30 Q210 24 216 50 Q240 56 232 72 Q228 82 210 80Z" fill="#fff" opacity=".85"/></svg>`;
const hero = $('.hero');
if (hero){ const n=document.createElement('div'); n.className='nubes';
  n.innerHTML = `<div class="n1">${nube(260)}</div><div class="n2">${nube(180)}</div><div class="n3">${nube(220)}</div>`; hero.prepend(n); }

/* ---------- Columnas que emergen + parallax suave ---------- */
document.querySelectorAll('.leyenda .col, .templo .col').forEach(c => c.classList.add('emerge'));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.querySelectorAll('.emerge').forEach(c=>c.classList.add('arriba')); io.unobserve(e.target);} }), {threshold:.15});
document.querySelectorAll('.leyenda, .templo').forEach(c => io.observe(c));
})();
