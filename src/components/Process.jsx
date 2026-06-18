import Reveal from './Reveal'

const STAGES = [
  { n: '01', title: 'Me pasas el material y el objetivo', text: 'Qué quieres lograr, dónde se publicará y qué tipo de audiencia necesita quedarse mirando.' },
  { n: '02', title: 'Reviso la estructura antes de cortar', text: 'Ordeno la idea, busco el gancho y detecto dónde puede caer la atención.' },
  { n: '03', title: 'Edito pensando en retención', text: 'Ritmo, subtítulos, sonido, color, tensión narrativa y cierre. Todo con una razón.' },
  { n: '04', title: 'Leemos el resultado', text: 'Después de publicar, revisamos qué funcionó para que el siguiente video no empiece desde cero.' },
]

export default function Process() {
  return (
    <section className="process" id="proceso">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mono">Proceso</p>
          <h2 className="display">Simple para ti.<br />Preciso por <em>dentro.</em></h2>
        </Reveal>

        <div className="process-grid">
          {STAGES.map((stage, i) => (
            <Reveal as="article" className="process-card" key={stage.n} delay={i * 0.05}>
              <span className="mono">{stage.n}</span>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
