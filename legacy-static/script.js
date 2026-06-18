const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

function setNavState() {
  nav.classList.toggle('scrolled', window.scrollY > 36);
}

window.addEventListener('scroll', setNavState, { passive: true });
setNavState();

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(isOpen));
  burger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Abrir menú');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${Math.min(index % 4, 3) * 0.06}s`;
  revealObserver.observe(el);
});

document.querySelectorAll('.faq-item').forEach((item) => {
  const question = item.querySelector('.faq-q');
  const answer = item.querySelector('.faq-a');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach((otherItem) => {
      otherItem.classList.remove('open');
      otherItem.querySelector('.faq-a').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

(function initBeforeAfter() {
  const stage = document.getElementById('baStage');
  if (!stage) return;

  const after = document.getElementById('baAfter');
  const handle = document.getElementById('baHandle');
  const knob = document.getElementById('baKnob');
  const inner = after.querySelector('.ba-after-inner');
  const afterImage = after.querySelector('.ba-after');
  let dragging = false;

  function syncWidths() {
    const width = stage.getBoundingClientRect().width;
    inner.style.width = `${width}px`;
    afterImage.style.width = `${width}px`;
  }

  function setPosition(clientX) {
    const rect = stage.getBoundingClientRect();
    let ratio = (clientX - rect.left) / rect.width;
    ratio = Math.min(1, Math.max(0, ratio));
    const percent = `${ratio * 100}%`;
    after.style.width = percent;
    handle.style.left = percent;
    knob.style.left = percent;
    stage.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
  }

  function pointerX(event) {
    return event.touches ? event.touches[0].clientX : event.clientX;
  }

  function startDrag(event) {
    dragging = true;
    setPosition(pointerX(event));
  }

  function moveDrag(event) {
    if (!dragging) return;
    if (event.cancelable) event.preventDefault();
    setPosition(pointerX(event));
  }

  function endDrag() {
    dragging = false;
  }

  stage.addEventListener('mousedown', startDrag);
  stage.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('mousemove', moveDrag);
  window.addEventListener('touchmove', moveDrag, { passive: false });
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);

  stage.addEventListener('keydown', (event) => {
    const rect = stage.getBoundingClientRect();
    const current = parseFloat(after.style.width) || 50;
    if (event.key === 'ArrowLeft') {
      setPosition(rect.left + ((current - 5) / 100) * rect.width);
    } else if (event.key === 'ArrowRight') {
      setPosition(rect.left + ((current + 5) / 100) * rect.width);
    }
  });

  window.addEventListener('resize', syncWidths, { passive: true });
  syncWidths();
})();
