import { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import Floating from './Floating'

const HERO_PHOTO = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1800&q=85'

// Titulares que se ciclan en el mismo lugar del antiguo <h1> estático.
const HEADLINES = [
  'No edito para que\nse vea bonito.',
  'Edito para que\nse queden.',
  'Mejor gancho.\nMejor retención.',
  'Cada corte,\ncon intención.',
]

const CYCLE_MS = 5200

export default function Hero() {
  const headlineRef = useRef(null)
  const bgARef = useRef(null)
  const bgBRef = useRef(null)

  // Orquesta el ciclo: crossfade del fondo + zoom/blur/fade del titular, loop infinito.
  useEffect(() => {
    const headline = headlineRef.current
    const layers = { a: bgARef.current, b: bgBRef.current }
    let index = 0
    let activeKey = 'a'

    const restart = (el, className) => {
      el.classList.remove(className)
      void el.offsetWidth // fuerza reflow para poder reiniciar la animación CSS
      el.classList.add(className)
    }

    const showNext = () => {
      const text = HEADLINES[index % HEADLINES.length]
      index++

      const incomingKey = activeKey === 'a' ? 'b' : 'a'
      const incoming = layers[incomingKey]
      const outgoing = layers[activeKey]

      incoming.style.animationDuration = `${CYCLE_MS}ms`
      restart(incoming, 'is-kenburns')
      incoming.classList.add('is-active')
      outgoing.classList.remove('is-active')
      activeKey = incomingKey

      headline.textContent = text
      headline.style.animationDuration = `${CYCLE_MS}ms`
      restart(headline, 'is-animating')
    }

    headline.addEventListener('animationend', showNext)
    showNext()

    return () => headline.removeEventListener('animationend', showNext)
  }, [])

  return (
    <header className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img ref={bgARef} src={HERO_PHOTO} alt="" fetchPriority="high" />
        <img ref={bgBRef} src={HERO_PHOTO} alt="" />
      </div>

      <Floating className="hero-card" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=85" alt="" loading="lazy" />
        <span className="hero-card-tag mono">Último corte</span>
      </Floating>

      <div className="hero-inner wrap">
        <div className="hero-grid">
          <Reveal>
            <p className="hero-tag mono">Retención · Edición · Crecimiento</p>
            {/* h1 real (oculto visualmente) para SEO/accesibilidad: el texto animado de abajo es decorativo */}
            <h1 className="sr-only">No edito para que se vea bonito. Edito para que se queden.</h1>
            <p className="hero-headline" aria-hidden="true" ref={headlineRef} />
          </Reveal>

          <Reveal className="hero-right" delay={0.06}>
            <p className="hero-sub">
              Ayudo a creadores a convertir ideas grabadas en videos que retienen: mejor gancho, mejor ritmo,
              mejor estructura y decisiones basadas en métricas reales.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn">Quiero una auditoría <span className="arr">→</span></a>
              <a href="#trabajo" className="btn secondary">Ver enfoque</a>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero-proof" aria-label="Datos de experiencia" delay={0.12}>
          <div className="proof-item">
            <span className="proof-k">3+</span>
            <span className="proof-l mono">Años creando contenido</span>
          </div>
          <div className="proof-item">
            <span className="proof-k">2</span>
            <span className="proof-l mono">Canales propios dirigidos</span>
          </div>
          <div className="proof-item">
            <span className="proof-k">2</span>
            <span className="proof-l mono">Nichos trabajados</span>
          </div>
          <div className="proof-item">
            <span className="proof-k">1</span>
            <span className="proof-l mono">Objetivo: retención</span>
          </div>
        </Reveal>
      </div>

      <div className="scroll-hint mono"><span className="line"></span> Scroll</div>
    </header>
  )
}
