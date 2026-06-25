import Reveal from './Reveal'

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero-inner wrap">
        <div className="hero-grid">
          <Reveal>
            <p className="hero-tag mono"><span className="pulse-dot" aria-hidden="true"></span>Terremoto en Venezuela · 24 jun 2026 · Yaracuy</p>
            <h1>La información dispersa cuesta tiempo.<br />Aquí la conectamos <em>en un solo lugar.</em></h1>
          </Reveal>

          <Reveal className="hero-right" delay={0.06}>
            <p className="hero-sub">
              El 24 de junio, dos sismos (magnitud 7,2 y 7,5) sacudieron el estado Yaracuy y se sintieron en buena
              parte del país. Esta página reúne las plataformas oficiales y ciudadanas para buscar personas,
              verificar la información y ayudar, sin tener que revisar diez sitios distintos.
            </p>
            <div className="hero-actions">
              <a href="#buscar" className="btn">Buscar o reportar a alguien <span className="arr">→</span></a>
              <a href="#ayudar" className="btn secondary">Cómo ayudar</a>
            </div>
            <p className="hero-disclaimer mono">Proyecto ciudadano independiente, no oficial · verifica siempre con las fuentes enlazadas</p>
          </Reveal>
        </div>

        <Reveal className="hero-proof" aria-label="Datos confirmados del sismo" delay={0.12}>
          <div className="proof-item">
            <span className="proof-k">7,5</span>
            <span className="proof-l mono">Magnitud máxima · la más fuerte en +100 años</span>
          </div>
          <div className="proof-item">
            <span className="proof-k">Yaracuy</span>
            <span className="proof-l mono">Epicentro, cerca de Morón y San Felipe</span>
          </div>
          <div className="proof-item">
            <span className="proof-k">+160</span>
            <span className="proof-l mono">Fallecidos reportados · cifra cambia, ver fuente oficial</span>
          </div>
          <div className="proof-item">
            <span className="proof-k">La Guaira</span>
            <span className="proof-l mono">Declarado zona de desastre</span>
          </div>
        </Reveal>
      </div>

      <div className="scroll-hint mono"><span className="line"></span> Desliza</div>
    </header>
  )
}
