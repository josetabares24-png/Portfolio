import SourceCard from './SourceCard'
import Reveal from './Reveal'

const SOURCES = [
  {
    tier: 'Sismología',
    title: 'FUNVISIS',
    forWhom: 'Para datos técnicos del sismo y sus réplicas.',
    text: 'Fundación Venezolana de Investigaciones Sismológicas: el organismo oficial que monitorea la actividad sísmica del país.',
    items: ['Magnitud y epicentro confirmados', 'Reporte de réplicas', 'Adscrita al Ministerio de Interior, Justicia y Paz'],
    href: 'http://www.funvisis.gob.ve/',
    link: 'Ir a FUNVISIS →',
  },
  {
    tier: 'Emergencias',
    title: 'Protección Civil',
    forWhom: 'Para coordinación de la respuesta y refugios.',
    text: 'Organización Nacional de Protección Civil y Administración de Desastres, a cargo de la respuesta oficial del Estado venezolano.',
    items: ['Albergues y zonas de riesgo', 'Recomendaciones de seguridad', 'Línea nacional de emergencia: 171'],
    href: 'https://www.pcivil.gob.ve/',
    link: 'Ir a Protección Civil →',
    featured: true,
    badge: 'Emergencia: 171',
  },
  {
    tier: 'Ayuda humanitaria',
    title: 'Cruz Roja Venezolana',
    forWhom: 'Para asistencia humanitaria y reunificación familiar.',
    text: 'Presencia en todo el territorio nacional, brindando asistencia y protección a personas afectadas por el desastre.',
    items: ['Restablecimiento de Contacto Familiar', 'Primeros auxilios y atención', 'Filiales en varios estados'],
    href: 'https://cruzroja.ve/',
    link: 'Ir a Cruz Roja Venezolana →',
  },
]

export default function FuentesOficiales() {
  return (
    <section className="services" id="fuentes">
      <div className="wrap">
        <Reveal className="services-head">
          <div>
            <p className="eyebrow mono">Fuentes oficiales</p>
            <h2 className="display">Antes de creer un rumor,<br />revisa la fuente <em>original.</em></h2>
          </div>
          <p className="section-copy">
            Durante una emergencia circula mucha información sin confirmar. Estas son las instituciones venezolanas
            responsables de monitorear el sismo y coordinar la respuesta.
          </p>
        </Reveal>

        <div className="svc-grid">
          {SOURCES.map((source, i) => (
            <SourceCard key={source.title} {...source} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  )
}
