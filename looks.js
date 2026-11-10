/* Ilustraciones de looks del dress code (SVG generado) */
(function(){
const ORO='#f2ae0b', ORO2='#ffd56a', BL='#ffffff', LINEA='#d8ccb6', PLIEGUE='#ebe2d2', TINTA='#161412';

const piel = t => t;
const brazo = (x1,y1,x2,y2,c,w=13) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><circle cx="${x2}" cy="${y2+4}" r="${w/2+1}" fill="${c}"/>`;
const pierna = (x1,y1,x2,y2,c,w=15) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
const sandalia = (x,y,dir=1) => `<path d="M${x-9*dir} ${y+6} Q${x} ${y-2} ${x+11*dir} ${y+6} Z" fill="#9a6a22"/><path d="M${x-8} ${y-14} L${x+8} ${y-4} M${x+8} ${y-14} L${x-8} ${y-4} M${x-8} ${y-28} L${x+8} ${y-18} M${x+8} ${y-28} L${x-8} ${y-18}" stroke="#9a6a22" stroke-width="2.4" stroke-linecap="round"/>`;
const zapato = (x,y,c='#d9c7a6') => `<path d="M${x-9} ${y+5} Q${x-9} ${y-4} ${x} ${y-4} Q${x+14} ${y-2} ${x+15} ${y+5} Z" fill="${c}"/>`;
const laurel = (cx,cy,w=46) => {
  let h=`<path d="M${cx-w/2} ${cy+6} Q${cx} ${cy-10} ${cx+w/2} ${cy+6}" fill="none" stroke="${ORO}" stroke-width="2.2"/>`;
  for(let i=0;i<5;i++){const t=(i+.5)/5,x=cx-w/2+w*t,y=cy+6-16*t*(1-t)*1.6;const a=(t-.5)*70;
    h+=`<ellipse cx="${x}" cy="${y-4}" rx="3.2" ry="7" fill="${ORO}" transform="rotate(${a-35} ${x} ${y-4})"/><ellipse cx="${x}" cy="${y-4}" rx="3.2" ry="7" fill="${ORO2}" transform="rotate(${a+35} ${x} ${y-4})"/>`;}
  return h;
};
const cabeza = (skin, pelo, tipo) => {
  let back='', front='';
  if(tipo==='largo'){ back=`<path d="M76 56 Q74 26 100 24 Q126 26 124 56 L130 120 Q100 128 70 120 Z" fill="${pelo}"/>`;
    front=`<path d="M78 58 Q78 30 100 30 Q122 30 122 58 Q116 40 100 38 Q86 40 78 58Z" fill="${pelo}"/>`; }
  if(tipo==='mono'){ back=`<circle cx="100" cy="30" r="13" fill="${pelo}"/>`;
    front=`<path d="M78 58 Q78 30 100 32 Q122 30 122 58 Q118 42 100 40 Q84 42 78 58Z" fill="${pelo}"/>`; }
  if(tipo==='ondas'){ back=`<path d="M74 60 Q70 26 100 24 Q130 26 126 60 Q132 86 122 100 L78 100 Q68 86 74 60Z" fill="${pelo}"/>`;
    front=`<path d="M78 58 Q76 28 100 30 Q124 28 122 58 Q114 38 96 40 Q84 44 78 58Z" fill="${pelo}"/>`; }
  if(tipo==='corto'){ front=`<path d="M78 56 Q76 30 100 30 Q124 30 122 56 Q120 42 112 40 Q100 44 86 40 Q80 44 78 56Z" fill="${pelo}"/>`; }
  if(tipo==='rizos'){ front=`<g fill="${pelo}"><circle cx="84" cy="44" r="9"/><circle cx="96" cy="36" r="10"/><circle cx="108" cy="36" r="10"/><circle cx="118" cy="46" r="8"/><circle cx="80" cy="54" r="6"/><circle cx="121" cy="56" r="6"/></g>`; }
  if(tipo==='barba'){ front=`<path d="M78 56 Q76 30 100 30 Q124 30 122 56 Q120 42 100 42 Q80 42 78 56Z" fill="${pelo}"/>`;
    front+=`<path d="M80 62 Q82 92 100 94 Q118 92 120 62 Q114 80 100 80 Q86 80 80 62Z" fill="${pelo}"/>`; }
  return back + `<rect x="93" y="74" width="14" height="22" rx="5" fill="${skin}"/><ellipse cx="100" cy="58" rx="21" ry="24" fill="${skin}"/>` + front;
};
const svg = body => `<svg viewBox="0 0 200 380" xmlns="http://www.w3.org/2000/svg" role="img">${body}</svg>`;

const LOOKS = {
 ella: [
  { n:'Peplo drapeado', d:'Vestido largo de un solo hombro, caída fluida y cinturón dorado.', s: svg((()=>{const k='#e7b48f';return `
    ${cabeza(k,'#3b2618','largo')}
    ${brazo(78,104,64,214,k)}${brazo(122,104,136,214,k)}
    <line x1="70" y1="140" x2="66" y2="152" stroke="${ORO}" stroke-width="5"/>
    <path d="M80 100 L116 92 Q127 98 124 114 L122 150 Q142 232 152 354 L48 354 Q58 232 78 150 Q73 122 80 100Z" fill="${BL}" stroke="${LINEA}" stroke-width="1.5"/>
    <path d="M90 162 L76 352 M100 164 L100 352 M110 162 L124 352 M84 104 Q100 120 118 100" stroke="${PLIEGUE}" stroke-width="2" fill="none"/>
    <path d="M78 146 Q100 156 122 146 L122 155 Q100 165 78 155Z" fill="${ORO}"/>
    <circle cx="117" cy="96" r="4" fill="${ORO}"/>
    ${laurel(100,36)}`})()) },
  { n:'Lino mediterráneo', d:'Vestido midi de tiras en lino blanco, sandalias doradas y accesorios.', s: svg((()=>{const k='#c98b62';return `
    ${cabeza(k,'#1f140d','ondas')}
    ${pierna(90,270,88,342,k,13)}${pierna(110,270,112,342,k,13)}
    ${sandalia(88,346)}${sandalia(112,346)}
    ${brazo(77,104,66,212,k)}${brazo(123,104,134,212,k)}
    <line x1="64" y1="196" x2="69" y2="203" stroke="${ORO}" stroke-width="4"/>
    <path d="M84 100 L84 94 M116 100 L116 94" stroke="${BL}" stroke-width="3"/>
    <path d="M80 104 Q100 98 120 104 L122 150 Q138 220 146 292 Q100 302 54 292 Q62 220 78 150Z" fill="${BL}" stroke="${LINEA}" stroke-width="1.5"/>
    <path d="M90 160 L80 292 M110 160 L120 292 M100 160 L100 296" stroke="${PLIEGUE}" stroke-width="2"/>
    <path d="M80 146 Q100 152 120 146" stroke="${ORO}" stroke-width="4" fill="none"/>
    <circle cx="100" cy="112" r="3" fill="${ORO}"/><path d="M90 98 Q100 108 110 98" stroke="${ORO}" stroke-width="1.5" fill="none"/>`})()) },
  { n:'Diosa con capa', d:'Vestido columna blanco con capa dorada y corona de laurel.', s: svg((()=>{const k='#f0c9a8';return `
    <path d="M74 98 Q100 92 126 98 L158 356 L42 356Z" fill="${ORO2}" stroke="${ORO}" stroke-width="1.5"/>
    ${cabeza(k,'#8a5a2b','mono')}
    ${brazo(78,104,70,214,k)}${brazo(122,104,130,214,k)}
    <path d="M80 102 Q100 112 120 102 L124 150 Q132 250 132 354 L68 354 Q68 250 76 150Z" fill="${BL}" stroke="${LINEA}" stroke-width="1.5"/>
    <path d="M86 108 L82 102 M114 108 L118 102" stroke="${ORO}" stroke-width="5"/>
    <path d="M94 158 L88 354 M106 158 L112 354" stroke="${PLIEGUE}" stroke-width="2"/>
    <path d="M76 146 Q100 154 124 146 M100 151 L96 190 M100 151 L104 190" stroke="${ORO}" stroke-width="3" fill="none"/>
    <circle cx="74" cy="100" r="5" fill="${ORO}"/><circle cx="126" cy="100" r="5" fill="${ORO}"/>
    ${laurel(100,34)}`})()) }
 ],
 el: [
  { n:'Quitón y estola', d:'Túnica blanca a la rodilla, estola dorada cruzada y sandalias.', s: svg((()=>{const k='#d9a07a';return `
    ${pierna(88,250,86,340,k)}${pierna(112,250,114,340,k)}
    ${sandalia(86,346,-1)}${sandalia(114,346)}
    ${brazo(68,106,58,226,k,15)}${brazo(132,106,142,226,k,15)}
    ${cabeza(k,'#2a1a10','rizos')}
    <path d="M66 96 L134 96 L142 132 L131 135 L130 168 Q138 220 142 266 L58 266 Q62 220 70 168 L69 135 L58 132Z" fill="${BL}" stroke="${LINEA}" stroke-width="1.5"/>
    <path d="M84 176 L76 266 M100 176 L100 266 M116 176 L124 266" stroke="${PLIEGUE}" stroke-width="2"/>
    <path d="M66 96 L84 96 L138 186 L124 194Z" fill="${ORO}" opacity=".95"/>
    <path d="M70 166 L130 166 L130 174 L70 174Z" fill="${ORO}"/>
    <circle cx="74" cy="100" r="5" fill="${ORO2}" stroke="${ORO}"/>
    ${laurel(100,36)}`})()) },
  { n:'Lino de verano', d:'Camisa de lino blanca abierta al cuello y pantalón claro con mocasines.', s: svg((()=>{const k='#8d5a3b';return `
    ${brazo(70,108,60,222,k,14)}${brazo(130,108,140,222,k,14)}
    ${cabeza(k,'#15100c','corto')}
    <path d="M72 196 L128 196 L132 342 L106 342 L100 230 L94 342 L68 342Z" fill="#efe6d4" stroke="${LINEA}" stroke-width="1.5"/>
    ${zapato(82,348)}${zapato(118,348)}
    <path d="M66 98 L134 98 L144 152 L130 156 L128 202 L72 202 L70 156 L56 152Z" fill="${BL}" stroke="${LINEA}" stroke-width="1.5"/>
    <path d="M90 98 L100 124 L110 98" fill="${k}"/><path d="M90 98 L100 124 L110 98" fill="none" stroke="${LINEA}" stroke-width="1.5"/>
    <path d="M100 124 L100 200" stroke="${LINEA}" stroke-width="1.5"/>
    <path d="M58 146 L70 148 M142 146 L130 148" stroke="${LINEA}" stroke-width="3"/>
    <path d="M72 198 L128 198" stroke="#b07a2a" stroke-width="4"/>`})()) },
  { n:'Toga elegante', d:'Total white con banda drapeada sobre el hombro y detalles dorados.', s: svg((()=>{const k='#f1c7a3';return `
    ${brazo(70,106,62,222,k,14)}${brazo(130,106,138,222,k,14)}
    ${cabeza(k,'#6b4423','barba')}
    <path d="M72 196 L128 196 L131 342 L106 342 L100 232 L94 342 L69 342Z" fill="${BL}" stroke="${LINEA}" stroke-width="1.5"/>
    ${zapato(82,348,'#9a6a22')}${zapato(118,348,'#9a6a22')}
    <path d="M66 98 L134 98 L144 150 L130 154 L128 202 L72 202 L70 154 L56 150Z" fill="${BL}" stroke="${LINEA}" stroke-width="1.5"/>
    <path d="M118 96 L138 100 Q120 170 72 204 L64 190 Q104 160 118 96Z" fill="#f7f0e2" stroke="${LINEA}" stroke-width="1.5"/>
    <path d="M124 104 Q110 160 70 196" stroke="${ORO}" stroke-width="3" fill="none"/>
    <circle cx="128" cy="102" r="6" fill="${ORO}"/>
    <path d="M92 98 Q100 108 108 98" stroke="${LINEA}" stroke-width="1.5" fill="none"/>
    ${laurel(100,36)}`})()) }
 ]
};
window.LOOKS = LOOKS;
})();
