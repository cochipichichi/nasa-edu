export const $ = (s,el=document)=>el.querySelector(s);
export const $$ = (s,el=document)=>[...el.querySelectorAll(s)];
export const setTheme = (t)=>{ document.documentElement.setAttribute('data-theme', t); localStorage.setItem('theme', t); };
export const initTheme = ()=> setTheme(localStorage.getItem('theme')||'dark');
export const toast = (msg)=>{ const el=document.createElement('div'); el.className='card'; el.style.position='fixed'; el.style.bottom='16px'; el.style.right='16px'; el.textContent=msg; document.body.appendChild(el); setTimeout(()=>el.remove(),2000); };
export function tooltip(target, text){
  const tip=document.createElement('div'); tip.className='tooltip'; tip.textContent=text; tip.hidden=true; document.body.appendChild(tip);
  const show=()=>{ const r=target.getBoundingClientRect(); tip.style.left=(r.left+r.width/2)+'px'; tip.style.top=(r.top+window.scrollY-10)+'px'; tip.hidden=false; };
  const hide=()=>{ tip.hidden=true; };
  target.addEventListener('mouseenter',show); target.addEventListener('mouseleave',hide);
  target.addEventListener('focus',show); target.addEventListener('blur',hide);
}