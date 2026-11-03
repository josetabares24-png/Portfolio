const $=(selector,context=document)=>context.querySelector(selector)
const $$=(selector,context=document)=>Array.from(context.querySelectorAll(selector))
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
const button=$('.menu-button'),menu=$('.mobile-menu')
function setMenu(open){
 if(!button||!menu)return
 button.setAttribute('aria-expanded',String(open))
 button.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')
 menu.hidden=!open
 document.body.classList.toggle('menu-is-open',open)
}
if(button&&menu){
 button.addEventListener('click',()=>setMenu(button.getAttribute('aria-expanded')!=='true'))
 $$('a',menu).forEach(a=>a.addEventListener('click',()=>setMenu(false)))
 window.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)})
}
const revealItems=$$('[data-reveal]')
if(!reduced&&'IntersectionObserver' in window){
 const o=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.08})
 revealItems.forEach(item=>o.observe(item))
}else revealItems.forEach(item=>item.classList.add('visible'))

if(document.body.dataset.page==='home'){
 const rows=$$('.index-row'),preview=$('.cursor-preview')
 const fine=matchMedia('(hover:hover) and (pointer:fine)').matches
 if(preview && fine && !reduced){
  let raf=0,x=0,y=0,tx=0,ty=0,active=false
  const onFrame=()=>{if(!active){raf=0;return}x+=(tx-x)*.22;y+=(ty-y)*.22;preview.style.transform=`translate3d(${x}px,${y}px,0)`;raf=requestAnimationFrame(onFrame)}
  const stop=()=>{active=false;preview.classList.remove('is-visible');if(raf)cancelAnimationFrame(raf);raf=0}
  rows.forEach(row=>{
   row.addEventListener('pointerenter',()=>{
    const label=row.querySelector('.index-project-name')?.textContent||''
    preview.dataset.project=row.dataset.project
    $('.cursor-name',preview).textContent=label
    $('.cursor-num',preview).textContent=row.dataset.project==='lisboa'?'01 /':'02 /'
    const image=$('.cursor-preview-img',preview)
    if(image){image.src=row.dataset.project==='lisboa'
      ? 'https://raw.githubusercontent.com/josetabares24-png/portugal-autentico-v2/main/docs/qa/grok-2026-11-02/home-full-final-1440.jpg'
      : 'https://raw.githubusercontent.com/josetabares24-png/milsabores/main/public/images/Mil%20Sabores/Brunch%20Americano.webp'}
    active=true;preview.classList.add('is-visible');if(!raf)raf=requestAnimationFrame(onFrame)
   })
   row.addEventListener('pointermove',e=>{tx=Math.max(10,Math.min(innerWidth-320,e.clientX+28));ty=Math.max(10,Math.min(innerHeight-230,e.clientY-70))})
   row.addEventListener('pointerleave',stop)
   row.addEventListener('focusin',stop)
  })
  window.addEventListener('blur',stop)
  window.addEventListener('pagehide',stop)
 }
}