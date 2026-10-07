/* Hero carousel: advances the background photo and the headline/text together, on a timer. No manual controls.
   Markup: components/hero/HeroCarousel.tsx (photos) and Hero.tsx (text). Interval: data-interval on [data-hc]. */
(function(){if(window.__cch)return;window.__cch=1;
function init(){var r=document.querySelector('[data-hc]');if(!r)return;
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var sec=r.parentNode,S=[].slice.call(r.querySelectorAll('[data-s]')),X=[].slice.call(sec.querySelectorAll('[data-x]')),n=S.length;if(n<2)return;
var dur=+r.getAttribute('data-interval')||7000,cur=0,prev=-1,off=false,tm=0,cl=0,R=document.documentElement;
function paint(){for(var i=0;i<n;i++){var on=i===cur,pv=i===prev;S[i].classList.toggle('is-on',on);S[i].classList.toggle('is-prev',pv);if(X[i]){X[i].classList.toggle('is-on',on);X[i].classList.toggle('is-prev',pv)}}}
function go(k){prev=cur;cur=k;r.classList.add('go');paint();clearTimeout(cl);cl=setTimeout(function(){prev=-1;paint()},1500)}
function tick(){if(!off&&!document.hidden&&!R.classList.contains('hold'))go((cur+1)%n);tm=setTimeout(tick,dur)}
if('IntersectionObserver' in window)new IntersectionObserver(function(es){off=!es[0].isIntersecting},{threshold:.15}).observe(sec);
tm=setTimeout(tick,dur)}
init()})();
