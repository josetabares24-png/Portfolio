import Reveal from './Reveal'

export default function SobreElProyecto() {
  return (
    <section className="about" id="sobre">
      <div className="wrap about-grid">
        <Reveal className="about-text">
          <p className="eyebrow mono">Sobre esta página</p>
          <p>
            Esto <em>no es un sitio oficial.</em> Es un proyecto independiente, creado por una persona venezolana que
            quería que la información dejara de estar repartida en diez pestañas distintas.
          </p>
          <p>
            Cada enlace de aquí apunta a una fuente real: gobierno, Cruz Roja o iniciativas ciudadanas que ya están en
            funcionamiento. La idea no es crear una fuente nueva, sino <em>conectar las que ya existen.</em>
          </p>
        </Reveal>

        <div className="about-divider" aria-hidden="true"></div>

        <Reveal className="stats" delay={0.08}>
          <div className="stat">
            <div className="stat-n">5</div>
            <div className="stat-l mono">Plataformas de búsqueda conectadas</div>
          </div>
          <div className="stat">
            <div className="stat-n">0</div>
            <div className="stat-l mono">Datos inventados — todo enlaza a la fuente original</div>
          </div>
          <div className="stat">
            <div className="stat-n">25 jun</div>
            <div className="stat-l mono">Última revisión de este resumen</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
