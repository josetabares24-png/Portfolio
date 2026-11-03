const $=(selector,context=document)=>context.querySelector(selector);
const $$=(selector,context=document)=>Array.from(context.querySelectorAll(selector));
const toggle=$('.mobile-toggle'), menu=$('.mobile-nav');
function setMenu(open){if(!toggle||!menu)return;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');menu.hidden=!open;document.body.classList.toggle('menu-open',open)}
if(toggle&&menu){toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));$$('a',menu).forEach(link=>link.addEventListener('click',()=>setMenu(false)));window.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)})}
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals=$$('.reveal');if(!reduce&&'IntersectionObserver' in window){const observer=new IntersectionObserver((entries)=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}},{threshold:.1});reveals.forEach(el=>observer.observe(el));}else{reveals.forEach(el=>el.classList.add('in-view'))}
if(document.body.dataset.page==='home'){
  const preview=$('.hover-preview');let px=0,py=0,x=0,y=0,frame=null;
  const items=$$('.index-item');
  function tick(){x+=(px-x)*.18;y+=(py-y)*.18;preview.style.transform=`translate3d(${x}px,${y}px,0) rotate(${(px-x)*-.03}deg)`;frame=requestAnimationFrame(tick)}
  if(preview&&window.matchMedia('(hover:hover) and (pointer:fine)').matches&&!reduce){frame=requestAnimationFrame(tick);items.forEach(item=>{item.addEventListener('mouseenter',()=>{preview.classList.add('visible');preview.dataset.project=item.dataset.preview;$('.preview-id',preview).textContent=item.dataset.preview==='lisboa'?'01':'02';$('.preview-title',preview).textContent=item.dataset.preview==='lisboa'?'ESTABA EN LISBOA':'MIL SABORES';$('.preview-sub',preview).textContent=item.dataset.preview==='lisboa'?'GUÍA EDITORIAL':'WEB DE RESTAURACIÓN'});item.addEventListener('mousemove',e=>{px=Math.max(0,Math.min(innerWidth-340,e.clientX+22));py=Math.max(0,Math.min(innerHeight-255,e.clientY-40))});item.addEventListener('mouseleave',()=>preview.classList.remove('visible'));item.addEventListener('focus',()=>preview.classList.remove('visible'))})}
  window.addEventListener('pagehide',()=>{if(frame)cancelAnimationFrame(frame)})
}