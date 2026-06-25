import Reveal from './Reveal'

const FACTS = [
  {
    n: '01',
    title: 'Dos sismos en 40 segundos',
    text: 'El 24 de junio, poco después de las 6:00 p.m., un sismo de magnitud 7,2 fue seguido 40 segundos después por uno de magnitud 7,5, con epicentro en el estado Yaracuy, cerca de Morón, San Felipe y Yumare. Según FUNVISIS, es el más fuerte registrado en Venezuela en más de 100 años, solo superado por uno de magnitud 7,7 en 1900.',
  },
  {
    n: '02',
    title: 'La Guaira, declarado zona de desastre',
    text: 'El estado costero de La Guaira sufrió los peores daños, con edificios colapsados total y parcialmente; también hubo colapsos en Caracas. Se emitió alerta de tsunami para Aruba, Curazao y Bonaire, y hubo réplicas sentidas hasta en Maracay.',
  },
  {
    n: '03',
    title: 'Las cifras siguen cambiando',
    text: 'Los reportes de prensa al 25 de junio hablan de más de 160 personas fallecidas, cerca de 970 heridas y más de 150 reportadas como desaparecidas, con equipos de búsqueda y rescate aún trabajando. Verifica siempre la cifra más reciente en las fuentes oficiales de abajo, no en esta página.',
  },
]

export default function QuePaso() {
  return (
    <section className="problem" id="que-paso">
      <div className="wrap section-split">
        <Reveal>
          <p className="eyebrow mono">Qué pasó</p>
          <h2 className="display">Dos sismos, 40 segundos de diferencia,<br />el más fuerte en <em>más de un siglo.</em></h2>
          <p className="section-copy">
            Resumen de los hechos confirmados hasta ahora. Esta es una situación que cambia hora a hora:
            usa los enlaces de fuentes oficiales para la versión más actualizada.
          </p>
        </Reveal>

        <div className="pains">
          {FACTS.map((fact, i) => (
            <Reveal as="article" className="pain" key={fact.n} delay={i * 0.06}>
              <div className="pain-n">{fact.n}</div>
              <div>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="note-line mono">
          Cobertura en vivo:{' '}
          <a href="https://cnnespanol.cnn.com/2026/06/24/venezuela/live-news/terremoto-sismo-en-vivo-noticias-caracas-orix" target="_blank" rel="noopener">CNN en Español</a>
          {' · '}
          <a href="https://www.infobae.com/venezuela/2026/06/24/un-terremoto-de-magnitud-71-sacudio-varias-regiones-de-venezuela-hay-alerta-de-tsunami-para-aruba-curazao-y-bonaire/" target="_blank" rel="noopener">Infobae</a>
        </p>
      </div>
    </section>
  )
}
