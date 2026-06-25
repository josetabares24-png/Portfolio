import Reveal from './Reveal'

const STEPS = [
  {
    n: '01',
    title: 'Cruz Roja Venezolana — Restablecimiento de Contacto Familiar',
    text: 'Servicio gratuito y confidencial del Movimiento de la Cruz Roja para ayudar a restablecer el contacto entre familiares separados por la emergencia. Es el canal oficial, en coordinación con la Cruz Roja Internacional.',
    href: 'https://cruzroja.ve/',
    link: 'Contactar a Cruz Roja Venezolana →',
  },
  {
    n: '02',
    title: 'Venezuela Te Busca',
    text: 'Registro ciudadano creado por Julia Alessandra Mariano. Es, hasta ahora, la plataforma con más reportes registrados (más de 20.000 casos). Permite publicar un caso, revisar reportes existentes y marcar a alguien como localizado.',
    href: 'https://venezuela-te-busca-app.hellogafaro.workers.dev/',
    link: 'Ir a Venezuela Te Busca →',
  },
  {
    n: '03',
    title: 'Encuéntralos',
    text: 'Plataforma ciudadana, gratuita y sin fines de lucro para reportar y buscar personas desaparecidas tras el sismo. No es un servicio oficial ni gubernamental.',
    href: 'https://encuentralos.tecnosoft.dev/',
    link: 'Ir a Encuéntralos →',
  },
  {
    n: '04',
    title: 'Desaparecidos Terremoto Venezuela',
    text: 'Otra iniciativa ciudadana que centraliza reportes de personas con ubicación desconocida, pensada para facilitar la reunificación familiar.',
    href: 'https://desaparecidosterremotovenezuela.com/',
    link: 'Ir a Desaparecidos Terremoto Venezuela →',
  },
  {
    n: '05',
    title: 'SOS Venezuela 2026',
    text: 'Mapa colaborativo en tiempo real con reportes de daños, búsqueda de personas, refugios y primeros auxilios. Tu ubicación exacta nunca se hace pública. También lista la línea de emergencia nacional: 171.',
    href: 'https://sosvenezuela2026.com/',
    link: 'Ir a SOS Venezuela 2026 →',
  },
]

export default function BuscarPersonas() {
  return (
    <section className="diagnosis" id="buscar">
      <div className="wrap section-split">
        <Reveal as="aside" className="diag-card">
          <p className="eyebrow mono">Si buscas a alguien</p>
          <h3>No busques en un solo lugar.<br />Repórtalo en varios a la vez.</h3>
          <p>
            Estas plataformas no se reemplazan entre sí: cada una llega a una red distinta de gente.
            Reportar en más de una aumenta las posibilidades de que alguien con información te encuentre.
          </p>
          <ul className="checklist">
            <li>Reporta el mismo caso en al menos 2 plataformas.</li>
            <li>Incluye nombre completo, edad, zona y una foto reciente.</li>
            <li>Si encuentras a la persona, actualiza o cierra el reporte.</li>
            <li>Nunca compartas tu ubicación exacta públicamente.</li>
          </ul>
        </Reveal>

        <div className="steps">
          {STEPS.map((step, i) => (
            <Reveal as="article" className="step" key={step.n} delay={i * 0.06}>
              <small className="mono">Opción {step.n}</small>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              <a className="svc-link" href={step.href} target="_blank" rel="noopener">{step.link}</a>
            </Reveal>
          ))}
        </div>
      </div>

      <p className="wrap note-line mono">
        ¿Estás fuera de Venezuela y perdiste contacto con tu familia? La Cruz Roja de tu país también puede ayudar a
        ubicarlos: hay líneas activas en Argentina, Costa Rica, Colombia, Ecuador, Honduras y México.{' '}
        <a href="https://www.teletica.com/nacional/sin-noticias-de-sus-seres-queridos-en-venezuela-cruz-roja-ofrece-ayuda-gratuita-para-ubicarlos_412299" target="_blank" rel="noopener">
          Ver cómo contactarlas →
        </a>
      </p>
    </section>
  )
}
