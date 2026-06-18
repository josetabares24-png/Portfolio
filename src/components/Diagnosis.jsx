import Reveal from './Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Miramos el canal como lo mira un espectador nuevo',
    text: 'Primera impresión, promesa del contenido, claridad del nicho, miniaturas, títulos y consistencia de formato.',
  },
  {
    n: '02',
    title: 'Revisamos la retención como si fuera un mapa',
    text: 'Buscamos el segundo exacto donde la gente se va, qué parte sostiene interés y qué patrones se repiten entre videos.',
  },
  {
    n: '03',
    title: 'Convertimos datos en decisiones de edición',
    text: 'Ajustamos estructura, ritmo, subtítulos, tensión narrativa, audio, color y cierre para que el próximo video salga con intención.',
  },
]

export default function Diagnosis() {
  return (
    <section className="diagnosis" id="diagnostico">
      <div className="wrap section-split">
        <Reveal as="aside" className="diag-card">
          <p className="eyebrow mono">Mi enfoque</p>
          <h3>Primero diagnosticamos. Después editamos.</h3>
          <p>
            No tiene sentido maquillar un video si el problema está en la promesa, el orden de las ideas o la falta de tensión.
            Por eso trabajo desde la estructura antes de tocar el color.
          </p>
          <ul className="checklist">
            <li>Detectar dónde cae la atención.</li>
            <li>Reescribir el gancho si hace falta.</li>
            <li>Editar para sostener curiosidad.</li>
            <li>Medir qué cambió después de publicar.</li>
          </ul>
        </Reveal>

        <div className="steps">
          {STEPS.map((step, i) => (
            <Reveal as="article" className="step" key={step.n} delay={i * 0.06}>
              <small className="mono">Paso {step.n}</small>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
