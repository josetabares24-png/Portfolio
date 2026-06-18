import Reveal from './Reveal'
import Floating from './Floating'

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1800&q=85" alt="" fetchPriority="high" />
      </div>

      <Floating className="hero-card" aria-hidden="true">
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=85" alt="" loading="lazy" />
        <span className="hero-card-tag mono">Último corte</span>
      </Floating>

      <div className="hero-inner wrap">
        <div className="hero-grid">
          <Reveal>
            <p className="hero-tag mono">Retención · Edición · Crecimiento</p>
            <h1>No edito para que se vea bonito.<br />Edito para que se <em>queden.</em></h1>
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
