// Simple script for nav & year
document.addEventListener('DOMContentLoaded',()=>{
  const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
});
function toggleMenu(){document.getElementById('navlist').classList.toggle('open');}
window.addEventListener('scroll',()=>{
  const sections=['accueil','emdr','breathwork','apropos','contact','mentions'].map(id=>document.getElementById(id));
  const links=Array.from(document.querySelectorAll('nav a'));
  let pos=window.scrollY+120;
  for(let s of sections){if(!s)continue;if(pos>=s.offsetTop&&pos<s.offsetTop+s.offsetHeight){links.forEach(a=>a.classList.remove('active'));let active=document.querySelector(`nav a[href="#${s.id}"]`);if(active)active.classList.add('active');}}
});

// EMDR — pastilles actives au scroll
(function(){
  const chips = document.querySelectorAll('#emdr .toc-chips .chip');
  if (!chips.length) return;

  const anchors = [...document.querySelectorAll('#emdr h3[id]')];
  const map = new Map(anchors.map(a => [a.id, document.querySelector(`#emdr .toc-chips .chip[href="#${a.id}"]`)]));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        chips.forEach(c => c.classList.remove('active'));
        const chip = map.get(e.target.id);
        if (chip) chip.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });

  anchors.forEach(a => io.observe(a));
})();
// === EMDR : pastilles actives au scroll ===
(function(){
  const scope = document.querySelector('#emdr');
  if(!scope) return;
  const chips = scope.querySelectorAll('.toc-chips .chip');
  if(!chips.length) return;

  const anchors = [...scope.querySelectorAll('h3[id]')];
  const map = new Map(anchors.map(a => [a.id, scope.querySelector(`.toc-chips .chip[href="#${a.id}"]`)]));

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        chips.forEach(c=>c.classList.remove('active'));
        const chip = map.get(e.target.id);
        if(chip) chip.classList.add('active');
      }
    });
  }, {rootMargin:"-40% 0px -55% 0px", threshold:0.01});
  anchors.forEach(a=>io.observe(a));
})();

