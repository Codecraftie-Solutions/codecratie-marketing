/* CodeCraftie motion layer. Verbatim from the approved prototype; each block is isolated so a missing landmark on one page can't stop the others. */
(function(){if(window.__ccm)return;window.__ccm=1;function go(){
try{(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.documentElement.classList.add('js');
var h=document.querySelector('h1');var i=0;
h.innerHTML=h.textContent.trim().split(/\s+/).map(function(w){return '<span class="w" style="--i:'+(i++)+'"><span>'+w+'</span></span>'}).join(' ');
h.setAttribute('aria-label',h.textContent.replace(/\s+/g,' '));
var sel='.svc li,.steps li,.proj,.why>div,.cap>div,.eco>div,.intro .wrap>*,.lede,.empty,.cta .wrap>*,.k+h2';
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll(sel).forEach(function(el,n){var sib=Array.prototype.indexOf.call(el.parentNode.children,el);el.style.setProperty('--d',Math.min(sib,5)*.07+'s');el.classList.add('rv');io.observe(el)});
if(rm){var a=document.querySelector('svg animate');if(a)a.remove();return}
var pg=document.getElementById('pg'),ph=document.querySelector('.phone'),ar=document.querySelector('.arch'),t=false;
function f(){t=false;var y=scrollY,m=document.documentElement.scrollHeight-innerHeight;pg.style.transform='scaleX('+(m>0?y/m:0)+')';
if(y<1000&&ph){ph.style.setProperty('--py',(-y*.07)+'px');ar.style.setProperty('--py',(y*.04)+'px')}}
addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(f)}},{passive:true});f();
if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.btn.p').forEach(function(b){
b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.14)+'px,'+((e.clientY-r.top-r.height/2)*.22)+'px)'});
b.addEventListener('pointerleave',function(){b.style.transform=''})});
})();}catch(e){console.warn("motion",e)}
try{(function(){
var D=document,R=D.documentElement;
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
function rel(){R.classList.remove('hold')}
try{
 if(sessionStorage.getItem('cc')){rel()}else{
  var p=D.createElement('div');p.id='pre';p.setAttribute('aria-hidden','true');
  p.innerHTML='<div class="pw">'+'CodeCraftie'.split('').map(function(c,i){return '<span style="--i:'+i+'">'+c+'</span>'}).join('')+'</div><div class="pc">000</div>';
  D.body.appendChild(p);var pc=p.querySelector('.pc'),t0=performance.now();
  (function tick(t){var k=Math.min((t-t0)/1500,1),e=1-Math.pow(1-k,3);pc.textContent=('00'+Math.round(e*100)).slice(-3);
   if(k<1)requestAnimationFrame(tick);else{p.classList.add('go');setTimeout(rel,380);setTimeout(function(){p.remove()},1200);try{sessionStorage.setItem('cc','1')}catch(e){}}})(t0);
 }}catch(e){rel()}
var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.2});
D.querySelectorAll('h2').forEach(function(h){var i=0;h.setAttribute('aria-label',h.textContent.replace(/\s+/g,' ').trim());
 h.innerHTML=h.textContent.trim().split(/\s+/).map(function(w){return '<span class="w2" aria-hidden="true" style="--i:'+(i++)+'"><span>'+w+'</span></span>'}).join(' ');
 h.classList.add('sp');if(!h.classList.contains('rv'))h.classList.add('rv');o.observe(h)});
var g=D.querySelector('.giant');g.innerHTML=g.textContent.split('').map(function(c,i){return '<span style="--i:'+i+'">'+c+'</span>'}).join('');o.observe(g);
var mq=D.querySelector('.mq>div'),x=0,last=scrollY,v=0,dir=1;
(function m(){if(!mq)return;var dy=scrollY-last;last=scrollY;v+=(dy-v)*.1;if(Math.abs(dy)>.5)dir=dy>0?1:-1;
 x-=(.5+Math.min(Math.abs(v),60)*.25)*dir;var h=mq.scrollWidth/2;if(x<=-h)x+=h;if(x>0)x-=h;mq.style.transform='translateX('+x+'px)';requestAnimationFrame(m)})();
var bl=D.querySelectorAll('.bl'),tk=false;
function fill(){tk=false;var vh=innerHeight;bl.forEach(function(b){var r=b.getBoundingClientRect(),k=Math.max(0,Math.min(1,(vh*.9-r.top)/(vh*.4)));b.style.setProperty('--p',(k*100)+'%')})}
addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(fill)}},{passive:true});addEventListener('resize',fill);fill();
if(matchMedia('(hover:hover) and (pointer:fine)').matches){
 var fr=D.querySelector('.frag')||D.createElement('div'),w=fr.querySelector('.win')||fr,ph=fr.querySelector('.phone')||fr,ar=fr.querySelector('.arch')||fr;
 fr.addEventListener('pointermove',function(e){var r=fr.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;
  w.style.setProperty('--ry',(dx*9)+'deg');w.style.setProperty('--rx',(-dy*7)+'deg');ph.style.setProperty('--mx',(dx*-22)+'px');ar.style.setProperty('--mx',(dx*16)+'px')});
 fr.addEventListener('pointerleave',function(){['--ry','--rx','--mx'].forEach(function(k){w.style.removeProperty(k);ph.style.removeProperty(k);ar.style.removeProperty(k)})});
 var c=D.createElement('div');c.className='cr';c.setAttribute('aria-hidden','true');D.body.appendChild(c);
 var tx=0,ty=0,cx=0,cy=0;
 addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;c.style.opacity=1});
 D.addEventListener('mouseover',function(e){c.classList.toggle('big',!!e.target.closest('a,button,summary,.shot,.tm,.circ'))});
 R.addEventListener('mouseleave',function(){c.style.opacity=0});
 (function l(){cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;c.style.transform='translate3d('+cx+'px,'+cy+'px,0)';requestAnimationFrame(l)})();
}
})();}catch(e){console.warn("motion",e)}
try{(function(){
var D=document,R=D.documentElement,H=D.querySelector('header'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* tone transitions */
var to=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target.getAttribute('data-tone');if(t)R.setAttribute('data-tone',t);else R.removeAttribute('data-tone')}})},{rootMargin:'-50% 0px -50% 0px'});
D.querySelectorAll('main>section,.mq,footer').forEach(function(el){to.observe(el)});
/* nav indicator */
var ul=D.querySelector('header nav ul'),ind=D.createElement('span'),links=[].slice.call(ul.querySelectorAll('a')),act=null;
ind.className='ind';ul.appendChild(ind);
function mv(a){if(!a){ind.style.opacity=0;return}ind.style.opacity=1;ind.style.width=a.offsetWidth+'px';ind.style.transform='translateX('+a.offsetLeft+'px)'}
function set(a){act=a;links.forEach(function(l){l.classList.toggle('on',l===a)});mv(a)}
links.forEach(function(l){l.addEventListener('mouseenter',function(){mv(l)});l.addEventListener('focus',function(){mv(l)})});
ul.addEventListener('mouseleave',function(){mv(act)});
var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){set(ul.querySelector('a[data-sec="'+e.target.id+'"]'))}})},{rootMargin:'-45% 0px -50% 0px'});
['solutions','work','products','ecosystem','about'].forEach(function(id){var el=D.getElementById(id);if(el)so.observe(el)});
var top=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)set(null)})},{rootMargin:'-45% 0px -50% 0px'});if(D.querySelector('.hero'))top.observe(D.querySelector('.hero'));
addEventListener('resize',function(){mv(act)});
/* hide on scroll down, shrink */
if(!rm){var ly=scrollY,tk=false;addEventListener('scroll',function(){if(tk)return;tk=true;requestAnimationFrame(function(){tk=false;var y=scrollY,d=y-ly;
 H.classList.toggle('sm',y>40);if(!R.classList.contains('menu')){if(y>260&&d>6)H.classList.add('hide');else if(d<-6||y<260)H.classList.remove('hide')}ly=y})},{passive:true});
 H.addEventListener('focusin',function(){H.classList.remove('hide')})}
/* mobile overlay */
var mb=D.querySelector('.mb'),ov=D.getElementById('ov');
function tg(o){R.classList.toggle('menu',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu');ov.setAttribute('aria-hidden',!o);if(o)H.classList.remove('hide')}
mb.addEventListener('click',function(){tg(!R.classList.contains('menu'))});
ov.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){tg(false)})});
addEventListener('keydown',function(e){if(e.key==='Escape')tg(false)});
addEventListener('resize',function(){if(innerWidth>860)tg(false)});
})();}catch(e){console.warn("motion",e)}
try{(function(){
var D=document,R=D.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* per-section accent */
var ao=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)R.style.setProperty('--accent',e.target.getAttribute('data-accent')||'#E8A317')})},{rootMargin:'-50% 0px -50% 0px'});
D.querySelectorAll('main>section,.mq,footer').forEach(function(el){ao.observe(el)});
/* theme toggle */
function cur(){return R.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light')}
function lab(){var d=cur()==='dark';D.querySelectorAll('.tgl').forEach(function(b){b.setAttribute('aria-label',d?'Switch to light theme':'Switch to dark theme')})}
function apply(t){R.setAttribute('data-theme',t);try{localStorage.setItem('cc-theme',t)}catch(e){}lab()}
lab();
D.querySelectorAll('.tgl').forEach(function(b){b.addEventListener('click',function(){
 var nt=cur()==='dark'?'light':'dark';b.classList.add('spin');setTimeout(function(){b.classList.remove('spin')},800);
 if(rm||!D.startViewTransition){apply(nt);return}
 var r=b.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,rad=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
 R.classList.add('nt');
 var vt=D.startViewTransition(function(){apply(nt)});
 vt.ready.then(function(){R.animate({clipPath:['circle(0px at '+x+'px '+y+'px)','circle('+rad+'px at '+x+'px '+y+'px)']},{duration:850,easing:'cubic-bezier(.65,0,.2,1)',pseudoElement:'::view-transition-new(root)'})});
 vt.finished.then(function(){R.classList.remove('nt')},function(){R.classList.remove('nt')});
})});
})();}catch(e){console.warn("motion",e)}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',go);else go()})();
