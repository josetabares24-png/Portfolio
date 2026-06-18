import Reveal from './Reveal'

const PAINS = [
  {
    n: '01',
    title: 'La gente se va antes de entender el video',
    text: 'El contenido puede ser bueno, pero si el inicio no abre una pregunta clara, la audiencia no espera a que llegue "la parte buena".',
  },
  {
    n: '02',
    title: 'La edición se ve trabajada, pero no empuja la historia',
    text: 'Cortes, zooms y subtítulos no sirven si no sostienen tensión, claridad y ritmo. La edición debe tener intención, no solo movimiento.',
  },
  {
    n: '03',
    title: 'Tienes métricas, pero no una lectura',
    text: 'Retención, clics, duración media y comentarios cuentan una historia. Si no sabes interpretarla, el siguiente video vuelve a cometer el mismo error.',
  },
]

export default function Problem() {
  return (
    <section className="problem" id="problema">
      <div className="wrap section-split">
        <Reveal>
          <p className="eyebrow mono">Lo que casi nadie te dice</p>
          <h2 className="display">El problema no es publicar más.<br />Es publicar sin saber <em>por qué falla.</em></h2>
          <p className="section-copy">
            Muchos creadores trabajan el doble y crecen igual. El cuello de botella casi nunca es "falta de ganas":
            suele estar en los primeros segundos, la estructura del relato y la lectura de métricas.
          </p>
        </Reveal>

        <div className="pains">
          {PAINS.map((pain, i) => (
            <Reveal as="article" className="pain" key={pain.n} delay={i * 0.06}>
              <div className="pain-n">{pain.n}</div>
              <div>
                <h3>{pain.title}</h3>
                <p>{pain.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
