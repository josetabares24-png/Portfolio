// ---------- Configuración: edita aquí frases, imágenes y duración ----------
const CONFIG = {
  // Duración total de cada ciclo (entrada + hold + zoom de salida), en ms
  duration: 5200,

  // Cada slide define el texto (usa "\n" para forzar un salto de línea) y el fondo.
  // Reemplaza "image" por url('ruta/o/enlace-a-tu-foto.jpg') para usar fotos reales.
  slides: [
    { text: 'MENOS RUIDO,\nMÁS IMPACTO', image: 'linear-gradient(135deg, #1f1c2c, #3a2c4d)' },
    { text: 'CONTENIDO QUE\nRETIENE', image: 'linear-gradient(135deg, #1a2a2e, #244b4f)' },
    { text: 'ESTRATEGIA\nCON CRITERIO', image: 'linear-gradient(135deg, #241a1a, #4a2c2c)' },
    { text: 'CRECE SIN\nPERDER VOZ', image: 'linear-gradient(135deg, #1a1f2e, #2c3a5e)' },
  ],
};

// ---------- Estado y referencias ----------
const textEl = document.getElementById('heroText');
const bgLayers = {
  a: document.querySelector('.hero__bg[data-layer="a"]'),
  b: document.querySelector('.hero__bg[data-layer="b"]'),
};

let slideIndex = 0;
let activeLayerKey = 'a';

// Fuerza un reflow para poder reiniciar una animación CSS que ya se usó antes
function restartAnimation(el, className) {
  el.classList.remove(className);
  // eslint-disable-next-line no-unused-expressions
  el.offsetWidth; // leer una propiedad de layout reinicia el motor de animación
  el.classList.add(className);
}

function showNextSlide() {
  const slide = CONFIG.slides[slideIndex % CONFIG.slides.length];
  slideIndex++;

  // --- 6. Cambiar imagen de fondo (crossfade entre las dos capas) ---
  const incomingKey = activeLayerKey === 'a' ? 'b' : 'a';
  const incoming = bgLayers[incomingKey];
  const outgoing = bgLayers[activeLayerKey];

  incoming.style.backgroundImage = slide.image;
  incoming.style.animationDuration = `${CONFIG.duration}ms`;
  restartAnimation(incoming, 'is-kenburns'); // reinicia el zoom lento (Ken Burns)
  incoming.classList.add('is-active');
  outgoing.classList.remove('is-active');

  activeLayerKey = incomingKey;

  // --- 7. Nuevo texto + animación de entrada/zoom/salida ---
  textEl.textContent = slide.text;
  textEl.style.animationDuration = `${CONFIG.duration}ms`;
  restartAnimation(textEl, 'is-animating');
}

// --- 8. Ciclo infinito: al terminar la animación del texto, pasa al siguiente slide ---
textEl.addEventListener('animationend', showNextSlide);

// Primer slide al cargar la página
document.addEventListener('DOMContentLoaded', showNextSlide);
