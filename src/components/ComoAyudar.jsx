import SourceCard from './SourceCard'
import Reveal from './Reveal'

const CHANNELS = [
  {
    tier: 'Fondo internacional',
    title: 'GlobalGiving — Venezuela Earthquake Relief Fund',
    forWhom: 'Para canalizar dinero a organizaciones locales verificadas.',
    text: 'Plataforma con más de 20 años de trayectoria en respuesta a desastres; reparte los fondos entre organizaciones locales que entregan comida, agua, refugio y atención médica.',
    items: ['Organizaciones verificadas en terreno', 'Respuesta rápida y flexible', 'Activo desde el 24 de junio'],
    href: 'https://www.globalgiving.org/projects/venezuela-earthquake-relief-fund/',
    link: 'Donar en GlobalGiving →',
    featured: true,
    badge: 'Fondo verificado',
  },
  {
    tier: 'Infancia',
    title: 'Save the Children',
    forWhom: 'Para apoyo enfocado en niñas, niños y adolescentes.',
    text: 'Campaña específica para la respuesta al terremoto en Venezuela 2026, con foco en protección infantil y necesidades básicas.',
    items: ['Protección de la niñez', 'Ayuda humanitaria de emergencia', 'ONG internacional reconocida'],
    href: 'https://www.savethechildren.es/donacion-ong/terremoto-en-venezuela-2026',
    link: 'Donar a Save the Children →',
  },
  {
    tier: 'Cruz Roja',
    title: 'Cruz Roja Española — Ayuda Venezuela 2026',
    forWhom: 'Para apoyar la respuesta humanitaria de la Cruz Roja.',
    text: 'Canal de la Cruz Roja Española dedicado a esta emergencia, coordinado con la Cruz Roja Venezolana y la Federación Internacional.',
    items: ['Coordinado con Cruz Roja Venezolana', 'Parte de la Red Internacional de la Cruz Roja', 'Ayuda humanitaria y reunificación familiar'],
    href: 'https://www2.cruzroja.es/-/ayuda-terremoto-venezuela-2026',
    link: 'Donar a Cruz Roja Española →',
  },
]

export default function ComoAyudar() {
  return (
    <section className="work" id="ayudar">
      <div className="wrap">
        <Reveal className="work-head">
          <div>
            <p className="eyebrow mono">Cómo ayudar</p>
            <h2 className="display">Dona a organizaciones que puedas<br />verificar, no a <em>cuentas sueltas.</em></h2>
          </div>
          <p className="section-copy">
            Estos canales tienen trayectoria e historial públicos. Si alguien te pide dinero por mensaje privado o
            a una cuenta personal "para los damnificados", desconfía: es uno de los fraudes más comunes tras un desastre.
          </p>
        </Reveal>

        <div className="svc-grid">
          {CHANNELS.map((channel, i) => (
            <SourceCard key={channel.title} {...channel} delay={i * 0.06} />
          ))}
        </div>

        <p className="note-line mono">
          ¿Prefieres ayudar dentro de Venezuela? Hay centros de acopio reportados por prensa local (sujetos a cambios):
          confirma vigencia antes de movilizarte.{' '}
          <a href="https://theobjective.com/internacional/2026-06-25/guia-ayuda-venezuela-espana-terremoto/" target="_blank" rel="noopener">
            Ver guía de ayuda →
          </a>
        </p>
      </div>
    </section>
  )
}
