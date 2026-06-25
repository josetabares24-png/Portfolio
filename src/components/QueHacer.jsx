import Reveal from './Reveal'

const STAGES = [
  { n: '01', title: 'No reingreses a edificios dañados', text: 'Aunque parezcan en pie, las grietas y daños estructurales pueden colapsar con las réplicas. Espera la evaluación de Protección Civil antes de volver a entrar.' },
  { n: '02', title: 'Reporta que estás bien, en varias plataformas', text: 'Si tienes señal, márcate como localizado en Venezuela Te Busca, Encuéntralos o SOS Venezuela 2026, así tu familia no te sigue buscando sin necesidad.' },
  { n: '03', title: 'Prioriza SMS y redes sobre llamadas', text: 'Las llamadas saturan la red en emergencias. Un mensaje de texto o una publicación con tu estado suele llegar cuando una llamada no entra.' },
  { n: '04', title: 'Ten a la mano agua, documentos y medicinas', text: 'Si tu vivienda tiene daños o estás en un refugio temporal, prioriza identificación, medicamentos esenciales y agua potable.' },
]

export default function QueHacer() {
  return (
    <section className="process" id="que-hacer">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow mono">Si estás en zona afectada</p>
          <h2 className="display">Mientras la ayuda llega,<br />protege lo <em>esencial.</em></h2>
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
