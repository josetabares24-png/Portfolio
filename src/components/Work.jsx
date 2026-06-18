import Reveal from './Reveal'

const SECONDARY_CASES = [
  {
    kicker: 'True Crime · Estaba Investigando',
    title: 'Suspenso, claridad y retención',
    img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1000&q=85',
    alt: 'Proyecto de true crime',
    metrics: ['Hook', 'Audio', 'Tensión'],
  },
  {
    kicker: "Editor's Cut · Reel",
    title: 'Un resumen visual de criterio',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1000&q=85',
    alt: 'Portfolio reel de edición',
    metrics: ['Color', 'Subtítulos', 'Pulso'],
  },
]

export default function Work() {
  return (
    <section className="work" id="trabajo">
      <div className="wrap">
        <Reveal className="work-head">
          <div>
            <p className="eyebrow mono">Trabajo seleccionado</p>
            <h2 className="display">No muestres solo videos.<br />Muestra <em>decisiones.</em></h2>
          </div>
          <p className="section-copy">
            Sustituye estas tarjetas por clips reales, links a piezas publicadas y métricas cuando las tengas. Esta sección debe vender evidencia, no decoración.
          </p>
        </Reveal>

        <div className="work-grid">
          <Reveal as="article" className="case case-featured">
            <div className="case-media">
              <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1000&q=85" alt="Proyecto de travel content" loading="lazy" />
              <div className="case-content">
                <p className="case-kicker mono">Travel · Estaba sin Rumbo</p>
                <h3>De clip bonito a historia con tensión</h3>
                <div className="case-metrics">
                  <span className="metric-pill">Gancho</span>
                  <span className="metric-pill">Ritmo</span>
                  <span className="metric-pill">Narrativa</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="case-list">
            {SECONDARY_CASES.map((c, i) => (
              <Reveal as="article" className="case case-row" key={c.kicker} delay={i * 0.06 + 0.06}>
                <div className="case-media">
                  <img src={c.img} alt={c.alt} loading="lazy" />
                  <div className="case-content">
                    <p className="case-kicker mono">{c.kicker}</p>
                    <h3>{c.title}</h3>
                    <div className="case-metrics">
                      {c.metrics.map((m) => <span className="metric-pill" key={m}>{m}</span>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal as="p" className="case-note mono">
          Nota: cambia estas imágenes por frames reales y añade enlaces a TikTok, Instagram o YouTube cuando publiques el portfolio.
        </Reveal>
      </div>
    </section>
  )
}
