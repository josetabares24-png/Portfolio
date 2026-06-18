import Reveal from './Reveal'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-text">
          <p className="eyebrow mono">Quién está detrás</p>
          <p>
            Dirigí un canal de <em>true crime</em> y un proyecto de <em>viajes</em>. Aprendí que un video puede estar bien editado y aun así fallar si no sostiene atención.
          </p>
          <p>
            Por eso no trabajo solo "cómo se ve". Trabajo <em>por qué alguien seguiría mirando.</em>
          </p>
        </Reveal>

        <div className="about-divider" aria-hidden="true"></div>

        <Reveal className="stats" delay={0.08}>
          <div className="stat">
            <div className="stat-n">3+</div>
            <div className="stat-l mono">Años creando contenido</div>
          </div>
          <div className="stat">
            <div className="stat-n">2</div>
            <div className="stat-l mono">Canales propios dirigidos</div>
          </div>
          <div className="stat">
            <div className="stat-n">∞</div>
            <div className="stat-l mono">Obsesión por retención</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
