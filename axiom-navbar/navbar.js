const q=document.getElementById('q');
if(/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent))document.getElementById('mod').textContent='\u2318';
const mq=matchMedia('(max-width:640px)');
function ph(){q.placeholder=mq.matches?'Where to next?':'Where to next? Pick your route, dates and seat.'}
ph();mq.addEventListener('change',ph);
addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();q.focus()}});
q.addEventListener('keydown',e=>{if(e.key==='Enter'&&q.value.trim()){const [from,to]=q.value.split(/->|\u2192|to/i).map(s=>s.trim().toUpperCase());console.log('Search flights',from,to)}});
const nav=document.getElementById('nav');
document.getElementById('login').onclick=()=>nav.classList.add('signed');
document.getElementById('me').onclick=()=>nav.classList.remove('signed');
