import Reveal from './Reveal'

const SERVICES = [
  {
    tier: '01 — Auditoría',
    title: 'El diagnóstico',
    forWhom: 'Para saber qué está frenando tu canal.',
    text: 'Revisión de contenido, nicho, métricas y estructura. Sales con una lectura clara de qué cambiar y qué dejar de repetir.',
    items: ['Auditoría de canal y formatos', 'Análisis de ganchos y retención', 'Plan de acción para próximos videos'],
    link: 'Pedir diagnóstico →',
  },
  {
    tier: '02 — Edición estratégica',
    title: 'El video que retiene',
    forWhom: 'Para quien graba, pero necesita convertirlo en una pieza fuerte.',
    text: 'Edición pensada para audiencia real: gancho, ritmo, subtítulos, sonido, color, storytelling y cierre con intención.',
    items: ['Reestructura del material bruto', 'Gancho y ritmo optimizados', 'Audio, color, subtítulos y entrega final'],
    link: 'Cotizar edición →',
    featured: true,
    badge: 'Más recomendado',
  },
  {
    tier: '03 — Acompañamiento',
    title: 'El laboratorio',
    forWhom: 'Para creadores que quieren mejorar cada semana.',
    text: 'Sesiones 1-a-1 para revisar ideas, publicaciones, métricas y decisiones creativas antes de volver a grabar.',
    items: ['Revisión continua de métricas', 'Feedback sobre ideas y guiones', 'Corrección de rumbo semanal o mensual'],
    link: 'Aplicar al laboratorio →',
  },
]

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="wrap">
        <Reveal className="services-head">
          <div>
            <p className="eyebrow mono">Cómo podemos trabajar</p>
            <h2 className="display">Tres entradas.<br />Un mismo objetivo: <em>crecer con criterio.</em></h2>
          </div>
          <p className="section-copy">
            Puedes venir por una auditoría puntual, por edición con estrategia o por acompañamiento constante si quieres mejorar cada publicación.
          </p>
        </Reveal>

        <div className="svc-grid">
          {SERVICES.map((svc, i) => (
            <Reveal
              as="article"
              className={`svc${svc.featured ? ' featured' : ''}`}
              key={svc.tier}
              delay={i * 0.06}
            >
              {svc.badge && <span className="svc-badge">{svc.badge}</span>}
              <span className="svc-tier mono">{svc.tier}</span>
              <h3>{svc.title}</h3>
              <p className="svc-for">{svc.forWhom}</p>
              <p>{svc.text}</p>
              <ul>
                {svc.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a className="svc-link" href="#contacto">{svc.link}</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
